import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { siteConfig } from "../../lib/site";

const pagePath = "/southern-massachusetts-rhode-island-software-developer";

export const metadata: Metadata = {
  title: "Southern Massachusetts & Rhode Island Software Developer | Web & Mobile Apps",
  description:
    "Based in Southern Massachusetts, Mark Gill builds web, mobile, and backend software for clients across the U.S. and worldwide, including nearby Rhode Island.",
  keywords: [
    "Southern Massachusetts software developer",
    "Southern Massachusetts web developer",
    "Massachusetts full-stack developer",
    "Massachusetts app developer",
    "Rhode Island software developer",
    "Boston web development",
    "Providence app development",
    "New England software development",
    "React developer Massachusetts",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: "Southern Massachusetts & Rhode Island Software Developer | Mark Gill",
    description: "Custom web, mobile, and backend development based in Southern Massachusetts, available across the U.S. and worldwide.",
  },
};

const localServices = [
  ["Custom Web Applications", "Responsive React and Next.js applications, business portals, dashboards, internal tools, and customer-facing platforms."],
  ["Mobile App Development", "Cross-platform iOS and Android applications built with React Native and connected to custom backend services."],
  ["APIs & Backend Systems", "Secure Node.js APIs, databases, authentication, permissions, integrations, and real-time application features."],
  ["Existing Application Support", "Feature development, debugging, performance improvements, modernization, and maintainable refactoring."],
];

export default function RegionalDeveloperPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Custom Software Development in Southern Massachusetts & Rhode Island",
        url: `${siteConfig.url}${pagePath}`,
        serviceType: ["Web application development", "Mobile app development", "API development", "Full-stack development"],
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          { "@type": "Place", name: "Southern Massachusetts" },
          { "@type": "State", name: "Massachusetts" },
          { "@type": "State", name: "Rhode Island" },
          { "@type": "City", name: "Boston" },
          { "@type": "City", name: "Providence" },
          { "@type": "Place", name: "New England" },
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Worldwide" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What software development services are available in Southern Massachusetts and Rhode Island?",
            acceptedAnswer: { "@type": "Answer", text: "Mark Gill provides full-stack web development, React Native mobile app development, Node.js API development, database work, integrations, and ongoing application support for businesses in Southern Massachusetts, Rhode Island, across the U.S., and worldwide." },
          },
          {
            "@type": "Question",
            name: "Do you work with businesses outside Southern Massachusetts and Rhode Island?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Based in Southern Massachusetts, Gill Software Solutions is available to work remotely with clients across the U.S. and worldwide." },
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
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Southern Massachusetts &amp; Rhode Island</p>
          <h1 className="display-heading-large mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-6xl">Full-stack software development for ambitious businesses everywhere</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-blue-100">
            I&apos;m Mark Gill, a senior full-stack developer based in Southern Massachusetts. I build custom web applications, mobile apps, APIs, and backend systems for businesses across the U.S. and worldwide, including nearby clients in Massachusetts and Rhode Island.
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
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">A development partner with full-stack range</h2>
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
            <h2 className="text-2xl font-extrabold text-[#0f172a]">Based locally. Available worldwide.</h2>
            <p className="mt-4 leading-7 text-slate-600">Gill Software Solutions is based in Southern Massachusetts and available to clients across the U.S. and worldwide. I welcome nearby projects in Massachusetts and Rhode Island, including Boston and Providence, as well as remote collaboration wherever your team is based.</p>
            <p className="mt-4 leading-7 text-slate-600">Remote collaboration lets us work together wherever you are, with clear communication and a schedule coordinated around your team.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 py-20 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Frequently Asked Questions</p>
        <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">Working together</h2>
        <div className="mt-9 divide-y divide-blue-100 rounded-[20px] border border-blue-100 bg-white px-6 sm:px-8">
          <div className="py-7"><h3 className="text-xl font-bold">What can you build?</h3><p className="mt-3 leading-7 text-slate-600">Custom web applications, React and Next.js platforms, React Native mobile apps, Node.js APIs, databases, real-time features, integrations, and internal business tools.</p></div>
          <div className="py-7"><h3 className="text-xl font-bold">Do you only work with businesses in Southern Massachusetts and Rhode Island?</h3><p className="mt-3 leading-7 text-slate-600">No. I am based in Southern Massachusetts and available to work with clients across the U.S. and worldwide through remote collaboration.</p></div>
          <div className="py-7"><h3 className="text-xl font-bold">Can you improve software that already exists?</h3><p className="mt-3 leading-7 text-slate-600">Yes. I can add features, solve bugs, improve performance, integrate external services, modernize legacy code, and strengthen application architecture.</p></div>
        </div>
      </section>

      <section className="bg-[#081c36] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-3xl font-extrabold">Let&apos;s build something useful.</h2><p className="mt-3 text-blue-100">Based in Southern Massachusetts. Available for projects across the U.S. and worldwide.</p></div>
          <a href="mailto:info@gillsoftwaresolutions.com" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2e7afe] px-6 font-bold">info@gillsoftwaresolutions.com</a>
        </div>
      </section>
    </main>
  );
}
