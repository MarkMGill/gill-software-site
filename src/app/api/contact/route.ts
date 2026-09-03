const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (requestLog.get(identifier) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(identifier, recent);

  if (requestLog.size > 500) {
    for (const [key, times] of requestLog) {
      if (!times.some((time) => now - time < RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return Response.json({ message: "Invalid request origin." }, { status: 403 });
      }
    } catch {
      return Response.json({ message: "Invalid request origin." }, { status: 403 });
    }
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const identifier = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  if (isRateLimited(identifier)) {
    return Response.json({ message: "Too many messages. Please wait a few minutes and try again." }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid form submission." }, { status: 400 });
  }

  if (cleanText(payload.companyWebsite, 200)) {
    return Response.json({ message: "Thanks! Your message has been sent." });
  }

  const name = cleanText(payload.name, 80);
  const email = cleanText(payload.email, 254).toLowerCase();
  const projectType = cleanText(payload.projectType, 80);
  const message = cleanText(payload.message, 5000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || !emailPattern.test(email) || !projectType || message.length < 20) {
    return Response.json({ message: "Please complete every field with valid information." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "MarkMGill@yahoo.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Gill Software Solutions <onboarding@resend.dev>";
  if (!apiKey) {
    return Response.json({ message: "Email delivery is not configured yet. Please email MarkMGill@yahoo.com directly." }, { status: 503 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProjectType = escapeHtml(projectType);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const text = `New website inquiry\n\nName: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`;
  const html = `<h1>New website inquiry</h1><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Project type:</strong> ${safeProjectType}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "Gill-Software-Solutions-Contact-Form/1.0",
      },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website inquiry: ${projectType} — ${name}`, html, text }),
    });

    if (!response.ok) {
      console.error("Contact email provider error", response.status, await response.text());
      return Response.json({ message: "Your message could not be sent. Please email MarkMGill@yahoo.com directly." }, { status: 502 });
    }

    return Response.json({ message: "Thanks! Your message has been sent." });
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return Response.json({ message: "Your message could not be sent. Please email MarkMGill@yahoo.com directly." }, { status: 502 });
  }
}
