import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { featuredPost } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Software Development Blog",
  description:
    "Articles from Mark Gill about full-stack development, React, Next.js, React Native, Node.js, TypeScript, APIs, software architecture, and product delivery.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Software Development Blog | Mark Gill",
    description: "Practical insights on building reliable web, mobile, and backend software.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f8ff] text-slate-900">
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

      <section className="mx-auto w-full max-w-[1120px] px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Gill Software Solutions</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.04em] text-[#0f172a] sm:text-6xl">Software Development Blog</h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Practical perspectives on full-stack engineering, product development, and creating reliable software that solves real business problems.
        </p>

        <div className="mt-14">
          <article className="grid overflow-hidden rounded-[22px] border border-blue-100 bg-white shadow-[0_12px_34px_rgba(20,48,99,0.08)] md:grid-cols-[0.42fr_1.58fr]">
            <div className="flex min-h-56 items-end bg-[#0b2342] p-7 text-sm font-bold uppercase tracking-[0.14em] text-blue-300">{featuredPost.category}</div>
            <div className="p-7 sm:p-9">
              <div className="flex gap-4 text-sm text-slate-500"><time dateTime={featuredPost.publishedAt}>{featuredPost.displayDate}</time><span>{featuredPost.readingTime}</span></div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0f172a]">
                <Link href={`/blog/${featuredPost.slug}`} className="transition hover:text-[#2e7afe]">{featuredPost.title}</Link>
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{featuredPost.description}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="mt-6 inline-block font-bold text-[#2e7afe]">Read article →</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

