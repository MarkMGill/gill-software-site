import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import { featuredPost } from "../../../lib/posts";
import { siteConfig } from "../../../lib/site";
import ReadingProgress from "../../../components/reading-progress";

const articleUrl = `/blog/${featuredPost.slug}`;

export const metadata: Metadata = {
  title: "How I Build Reliable Full-Stack Applications That Scale",
  description: featuredPost.description,
  keywords: ["full-stack application development", "React", "Next.js", "React Native", "Node.js", "TypeScript", "API development", "software architecture"],
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title: featuredPost.title,
    description: featuredPost.description,
    publishedTime: featuredPost.publishedAt,
    authors: [siteConfig.author],
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Full-Stack Development"],
  },
  twitter: { card: "summary", title: featuredPost.title, description: featuredPost.description },
};

export default function ArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: featuredPost.title,
    description: featuredPost.description,
    datePublished: featuredPost.publishedAt,
    dateModified: featuredPost.publishedAt,
    mainEntityOfPage: `${siteConfig.url}${articleUrl}`,
    author: { "@type": "Person", name: siteConfig.author, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    keywords: "full-stack development, React, Next.js, React Native, Node.js, TypeScript, APIs, software architecture",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ReadingProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <header className="bg-[#081c36] text-white">
        <div className="mx-auto flex h-20 w-full max-w-[1220px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Gill Software Solutions home"><Image src={logo} alt="Gill Software Solutions" className="h-auto w-[86px]" priority /></Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-blue-100">
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
            <Link href="/#contact" className="rounded-lg bg-[#2e7afe] px-5 py-2.5 text-white transition hover:bg-[#1968ef]">Contact</Link>
          </nav>
        </div>
      </header>

      <article>
        <header className="bg-[#f5f8ff] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[900px]">
            <Link href="/blog" className="text-sm font-bold text-[#2e7afe]">← Back to the blog</Link>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">{featuredPost.category}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#0f172a] sm:text-6xl">{featuredPost.title}</h1>
            <p className="mt-6 text-xl leading-9 text-slate-600">{featuredPost.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
              <span>By Mark Gill</span><span aria-hidden="true">·</span><time dateTime={featuredPost.publishedAt}>{featuredPost.displayDate}</time><span aria-hidden="true">·</span><span>{featuredPost.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="prose mx-auto max-w-[760px] px-4 py-16 text-[17px] leading-8 text-slate-700 sm:px-6">
          <p className="text-xl leading-9 text-slate-700">
            Reliable software is not defined by a framework or a clever technical shortcut. It is software that helps people complete important work, remains understandable as the product evolves, and gives the business room to grow. As a senior full-stack developer, I build that reliability across the entire product—from the React interface to the Node.js API, database, mobile experience, and deployment architecture.
          </p>

          <h2>Start with the business problem, not the technology</h2>
          <p>
            Before I write code, I clarify who will use the product, what they need to accomplish, and where the current process breaks down. This discovery work turns a broad idea into a practical development plan. It also helps separate essential product requirements from features that can wait. For startups, that may mean defining a focused MVP. For an established business, it may mean improving a workflow without disrupting the system employees already depend on.
          </p>
          <p>
            My experience spans healthcare reporting tools, collaborative education software, computer-vision fitness applications, business dashboards, and internal CRUD systems. Those products differ in audience and complexity, but the same principle applies: architecture should support the product instead of dictating it.
          </p>

          <h2>Build responsive interfaces with React and Next.js</h2>
          <p>
            On the frontend, I use React and TypeScript to turn complex workflows into clear, reusable components. Strong component boundaries make interfaces easier to test, maintain, and extend. TypeScript adds useful constraints around component properties, API responses, and shared domain models, catching many integration problems before they reach production.
          </p>
          <p>
            Next.js is a strong choice when a web application needs excellent performance, server rendering, static generation, or search visibility. I use its App Router, Server Components, optimized images, metadata tools, and routing conventions where they provide a real product benefit. For dashboards and authenticated platforms, I focus on data flow, loading states, useful error handling, keyboard accessibility, and responsive behavior—not only how the first screen looks.
          </p>

          <h2>Create mobile experiences with React Native</h2>
          <p>
            React Native lets me apply the same product thinking and TypeScript discipline to iOS and Android applications. Shared concepts between a web platform and mobile app can remain consistent, while each interface still respects the expectations of its device. I work with navigation, API integration, device capabilities, responsive layouts, and real-time feedback to create mobile experiences that feel focused rather than like compressed websites.
          </p>
          <p>
            In movement-analysis work, for example, the interface must coordinate camera input, pose tracking, repetition counting, performance scoring, and immediate coaching feedback. That kind of feature requires careful state management and a clear boundary between computer-vision processing, business rules, and the user interface.
          </p>

          <h2>Design Node.js APIs and backend systems for change</h2>
          <p>
            A dependable frontend needs a dependable backend. I build Node.js services and REST APIs that organize business logic clearly, validate incoming data, enforce authentication and permissions, and return predictable responses. I also design database models around the questions the product needs to answer, rather than treating persistence as an afterthought.
          </p>
          <p>
            Good API development includes more than endpoints. It includes useful error contracts, logging, security boundaries, database indexes, migration planning, and protection against invalid states. When real-time collaboration or live status updates are required, I design the event flow so reconnects, duplicate messages, and network interruptions do not leave the application in an inconsistent state.
          </p>

          <h2>Use architecture that fits the current stage</h2>
          <p>
            I prefer the simplest architecture that meets the real reliability and growth requirements. A startup MVP rarely needs the same infrastructure as a mature enterprise platform. Unnecessary services create operational cost, while an application with no separation of concerns becomes difficult to change. The goal is a balanced system with clear modules, observable behavior, and deliberate extension points.
          </p>
          <p>
            My technical strategy work can include system design, data modeling, third-party integrations, authentication, deployment planning, performance review, and modernization of existing code. Because I work across the stack, I can evaluate tradeoffs in context. A frontend decision may affect API shape; an API decision may affect database performance; a deployment choice may affect development speed and operating cost.
          </p>

          <h2>Make quality part of everyday development</h2>
          <p>
            Quality is easier to maintain when it is built into the development process. I use static typing, linting, focused automated tests, code review, and production builds to catch problems early. I also test the details users notice: empty states, slow connections, validation messages, mobile layouts, keyboard navigation, and recovery after an error.
          </p>
          <p>
            Performance work begins with measurement. Depending on the product, that can mean reducing JavaScript, optimizing images, improving database queries, caching stable data, or removing unnecessary network requests. Security receives the same practical attention through input validation, least-privilege access, safe secret handling, and careful dependency management.
          </p>

          <h2>Communicate clearly and adapt as the product evolves</h2>
          <p>
            Software projects change. New customer feedback arrives, priorities shift, and an early assumption may prove incomplete. I keep progress visible, explain technical tradeoffs in plain language, and adapt without losing control of the codebase. Clients have repeatedly highlighted my communication, attention to detail, quick learning, and willingness to go beyond the original scope when the product needs it.
          </p>
          <p>
            That combination of full-stack execution and product ownership is especially useful for teams that need one developer to connect the pieces. I can move from a React component to a Node.js service, investigate a database issue, improve a React Native workflow, or map out the next stage of the architecture while keeping the business objective in view.
          </p>

          <h2>What I can help you build</h2>
          <p>
            I help businesses with full-stack product development, responsive web applications, iOS and Android apps with React Native, Node.js APIs, database design, real-time features, third-party integrations, application modernization, debugging, and ongoing feature development. The result should be more than working code: it should be a product your users understand and your team can continue to improve.
          </p>

          <aside className="mt-12 rounded-[20px] bg-[#0b2342] p-7 text-white sm:p-9">
            <h2 className="mt-0 text-2xl !text-white">Planning a web, mobile, or backend project?</h2>
            <p className="text-blue-100">Explore my <Link href="/#projects" className="font-bold text-white underline decoration-blue-400 underline-offset-4">selected projects</Link> and <Link href="/#services" className="font-bold text-white underline decoration-blue-400 underline-offset-4">development services</Link>, or tell me what you are trying to build.</p>
            <Link href="/#contact" className="mt-5 inline-flex rounded-lg bg-[#2e7afe] px-5 py-3 font-bold text-white">Discuss your project</Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
