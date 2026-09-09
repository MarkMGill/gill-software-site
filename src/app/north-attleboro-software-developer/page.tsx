import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { siteConfig } from "../../lib/site";

const pagePath = "/north-attleboro-software-developer";

export const metadata: Metadata = {
  title: "North Attleboro Software Developer | Web & Mobile Apps",
  description:
    "North Attleboro, MA software developer Mark Gill builds custom web applications, mobile apps, APIs, and backend systems for Massachusetts, New England, and U.S. businesses.",
  keywords: [
    "North Attleboro software developer",
    "North Attleborough web developer",
    "Massachusetts full-stack developer",
    "Massachusetts app developer",
    "New England software development",
    "React developer Massachusetts",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: "North Attleboro Software Developer | Mark Gill",
    description: "Custom web, mobile, and backend software development based in North Attleboro, Massachusetts.",
  },
};

const localServices = [
  ["Custom Web Applications", "Responsive React and Next.js applications, business portals, dashboards, internal tools, and customer-facing platforms."],
  ["Mobile App Development", "Cross-platform iOS and Android applications built with React Native and connected to reliable backend services."],
  ["APIs & Backend Systems", "Secure Node.js APIs, databases, authentication, permissions, integrations, and real-time application features."],
  ["Existing Application Support", "Feature development, debugging, performance improvements, modernization, and maintainable refactoring."],
];

export default function NorthAttleboroDeveloperPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Custom Software Development in North Attleboro, MA",
        url: `${siteConfig.url}${pagePath}`,
        serviceType: ["Web application development", "Mobile app development", "API development", "Full-stack development"],
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          { "@type": "City", name: "North Attleboro" },
          { "@type": "State", name: "Massachusetts" },
          { "@type": "Place", name: "New England" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What software development services are available in North Attleboro?",
            acceptedAnswer: { "@type": "Answer", text: "Mark Gill provides full-stack web development, React Native mobile app development, Node.js API development, database work, integrations, and ongoing application support from North Attleboro, Massachusetts." },
          },
          {
            "@type": "Question",
            name: "Do you work with businesses outside North Attleboro?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Gill Software Solutions works remotely with clients across Massachusetts, New England, and throughout the US." },
          },
          {
            "@type": "Question",
            name: "Can you help with an existing application?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Services include adding features, fixing difficult bugs, improving performance, integrating third-party systems, and modernizing existing web and mobile applications." },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="bg-[#081c36] text-white">
        <div className="mx-auto flex h-20 w-full max-w-[1220px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Gill Software Solutions home"><Image src={logo} alt="Gill Software Solutions" className="h-auto w-[86px]" priority /></Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-blue-100">
            <Link href="/#projects" className="hidden transition hover:text-white sm:inline">Projects</Link>
            <Link href="/#services" className="hidden transition hover:text-white sm:inline">Services</Link>
            <Link href="/#contact" className="rounded-lg bg-[#2e7afe] px-5 py-2.5 text-white transition hover:bg-[#1968ef]">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#081c36] px-4 pb-20 pt-14 text-white sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">North Attleboro, Massachusetts</p>
          <h1 className="display-heading-large mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-6xl">Local full-stack software development for ambitious businesses</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-blue-100">
            I&apos;m Mark Gill, a senior full-stack developer based in North Attleboro, MA. I build reliable web applications, mobile apps, APIs, and backend systems for local companies and remote teams across Massachusetts, New England, and throughout the US.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/#contact" className="rounded-lg bg-[#2e7afe] px-6 py-3 font-bold text-white transition hover:bg-[#1968ef]">Discuss your project</Link>
            <Link href="/#projects" className="rounded-lg border border-blue-200/30 px-6 py-3 font-bold text-white transition hover:bg-white/10">View recent work</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Software Services</p>
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">A local partner with full-stack range</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Work directly with an experienced developer who can connect product requirements, user experience, frontend code, backend services, and databases.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {localServices.map(([title, description]) => (
              <article key={title} className="rounded-[18px] border border-blue-100 bg-white p-6 shadow-[0_10px_28px_rgba(20,48,99,0.07)]">
                <h3 className="text-xl font-bold text-[#0f172a]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Why Work With Me</p>
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">Clear communication and practical engineering</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">I have more than five years of experience delivering startup MVPs and enterprise-grade systems. Clients rely on me to learn quickly, communicate clearly, take ownership, and produce clean code that can evolve with the product.</p>
          </div>
          <div className="rounded-[20px] bg-[#f5f8ff] p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#0f172a]">Serving North Attleboro and beyond</h2>
            <p className="mt-4 leading-7 text-slate-600">Gill Software Solutions operates remotely from North Attleboro. I can collaborate with nearby businesses in Bristol County and throughout Massachusetts, as well as distributed teams anywhere in the country.</p>
            <p className="mt-4 leading-7 text-slate-600">Remote delivery keeps communication flexible while still giving local clients access to a Massachusetts-based development partner who understands their market and time zone.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 py-20 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Frequently Asked Questions</p>
        <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">Working together</h2>
        <div className="mt-9 divide-y divide-blue-100 rounded-[20px] border border-blue-100 bg-white px-6 sm:px-8">
          <div className="py-7"><h3 className="text-xl font-bold">What can you build?</h3><p className="mt-3 leading-7 text-slate-600">Custom web applications, React and Next.js platforms, React Native mobile apps, Node.js APIs, databases, real-time features, integrations, and internal business tools.</p></div>
          <div className="py-7"><h3 className="text-xl font-bold">Do you only work with North Attleboro businesses?</h3><p className="mt-3 leading-7 text-slate-600">No. I welcome local projects while continuing to serve clients across Massachusetts, New England, and throughout the US through remote collaboration.</p></div>
          <div className="py-7"><h3 className="text-xl font-bold">Can you improve software that already exists?</h3><p className="mt-3 leading-7 text-slate-600">Yes. I can add features, solve bugs, improve performance, integrate external services, modernize legacy code, and strengthen application architecture.</p></div>
        </div>
      </section>

      <section className="bg-[#081c36] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-3xl font-extrabold">Let&apos;s build something useful.</h2><p className="mt-3 text-blue-100">Based in North Attleboro, MA. Available for local and remote software projects.</p></div>
          <a href="mailto:MarkMGill@yahoo.com" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2e7afe] px-6 font-bold">MarkMGill@yahoo.com</a>
        </div>
      </section>
    </main>
  );
}
