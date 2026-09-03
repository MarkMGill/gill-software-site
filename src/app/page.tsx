import Image from "next/image";
import Link from "next/link";
import confluentDemo from "../assets/confluent_demo.png";
import heroImage from "../assets/hero_image.png";
import logo from "../assets/logo.png";
import newHeadShot from "../assets/new_head_shot.jpg";
import screnrDemo from "../assets/screnr_demo.png";
import writeGTDemo from "../assets/writeGTdemo4.png";
import { featuredPost } from "../lib/posts";
import { siteConfig } from "../lib/site";

const navItems = ["Home", "About", "Projects", "Services", "Testimonials", "Blog"];

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end solutions",
  },
  {
    title: "Web Applications",
    description: "Fast, responsive, scalable",
  },
  {
    title: "Mobile Applications",
    description: "iOS and Android with React Native",
  },
  {
    title: "API & Backend",
    description: "Robust, secure, high-performance",
  },
];

const detailedServices = [
  {
    number: "01",
    title: "Full-Stack Product Development",
    description:
      "I take products from early requirements through architecture, development, testing, and launch, creating cohesive experiences across the interface, server, and database.",
    deliverables: ["MVPs and new products", "Feature development", "Production-ready code"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "I build fast, responsive web applications and internal platforms with React, Next.js, and TypeScript, focusing on usability, accessibility, and maintainable components.",
    deliverables: ["Responsive interfaces", "Dashboards and portals", "Complex interactive tools"],
  },
  {
    number: "03",
    title: "Mobile Application Development",
    description:
      "I create cross-platform iOS and Android applications with React Native, connecting polished mobile experiences to reliable backend services and device capabilities.",
    deliverables: ["React Native apps", "iOS and Android delivery", "Mobile API integration"],
  },
  {
    number: "04",
    title: "APIs & Backend Systems",
    description:
      "I develop secure Node.js APIs, business logic, database integrations, and real-time services designed to perform reliably as products and user demand grow.",
    deliverables: ["REST API development", "Database design", "Authentication and permissions"],
  },
  {
    number: "05",
    title: "Architecture & Technical Strategy",
    description:
      "I turn business requirements into practical technical plans, choose the right tools, and structure applications for clean ownership, dependable releases, and future growth.",
    deliverables: ["System architecture", "Technical roadmaps", "Code and stack evaluation"],
  },
  {
    number: "06",
    title: "Integrations & Modernization",
    description:
      "I connect third-party services, improve existing applications, resolve difficult bugs, and modernize legacy code without losing sight of day-to-day business needs.",
    deliverables: ["Third-party integrations", "Performance improvements", "Refactoring and maintenance"],
  },
];

const projects = [
  {
    title: "Confluent Reporting",
    category: "Compliance reporting platform",
    description:
      "I built a streamlined reporting dashboard that helps healthcare teams review monthly compliance and operational status by brand. The interface includes searchable, filterable data, clear status indicators, and export tools that make complex reporting easier to manage.",
    image: confluentDemo,
    alt: "Confluent Reporting brand scorecard dashboard",
    technologies: ["React", "Data Grids", "Reporting UX"],
  },
  {
    title: "Screnr",
    category: "Computer-vision fitness application",
    description:
      "I developed a movement-analysis experience that uses real-time pose tracking to evaluate exercise form. The application counts repetitions, scores joint angles, checks movement rules, and delivers immediate visual feedback across mobile and desktop views.",
    image: screnrDemo,
    alt: "Screnr overhead squat analysis on mobile and desktop",
    technologies: ["React Native", "Computer Vision", "Real-time Feedback"],
  },
  {
    title: "Write GT",
    category: "Collaborative digital whiteboard",
    description:
      "I created an interactive handwriting and whiteboard workspace for teaching, tutoring, and remote collaboration. It combines natural drawing tools, graph-paper canvases, zoom controls, printing, and live communication features in one focused interface.",
    image: writeGTDemo,
    alt: "Write GT digital whiteboard displaying a hand-drawn math lesson",
    technologies: ["Web App", "Canvas", "Real-time Collaboration"],
  },
];

const testimonials = [
  {
    project: "JB - Screnr Health",
    quote:
      "Mark has been absolutely AMAZING. His skills are more extensive than initially advertised. He has helped us way beyond the scope of this project. We more or less have him on retainer because of the high quality of work. He's helped with mobile app development, web app development, database development. Absolute rockstar!",
  },
  {
    project: "Sam - Write GT",
    quote:
      "Our team works with React and Mark has been with us for a few months now. We went from concept mode to a Windows Desktop application that's functioning very well and more as it evolves. Mark goes above and beyond to figure out solutions, and reports them back to us when complete. Very courteous and professional, and I highly recommend him. He has a quick learning curve too!",
  },
  {
    project: "Praveen - InterviewWorks",
    quote:
      "Mark ramped up quick on the project requirements and was able to contribute to the deliverables. Will definitely hire him back once there is an opportunity. His strong points are attention to detail, communication and follow-up. Good luck Mark with your next projects!",
  },
];

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Gill",
    url: siteConfig.url,
    jobTitle: "Senior Full-Stack Developer",
    worksFor: { "@type": "Organization", name: siteConfig.name },
    knowsAbout: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "API development", "Full-stack development"],
  };

  return (
    <main className="bg-[#f5f8ff] text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      <div className="w-full bg-[#081c36] text-white">
        <header className="mx-auto flex h-20 w-full max-w-[1220px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Mark Gill home" className="inline-flex items-center">
            <Image
              src={logo}
              alt="Mark Gill logo"
              width={108}
              height={24}
              style={{ borderRadius: 8 }}
              className="h-auto w-[72px] sm:w-[86px]"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-blue-100 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-[#2e7afe] px-6 py-2.5 text-sm font-semibold shadow-[0_10px_24px_rgba(46,122,254,0.45)] transition hover:bg-[#1968ef]"
          >
            Contact
          </a>
        </header>
      </div>

      <section id="home" className="mx-auto w-full max-w-[1380px] px-2 pb-16 pt-14 sm:px-3 lg:px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Full-Stack Developer</p>
            <h1 className="mt-5 max-w-xl text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-[#0f172a] sm:text-6xl">
              Building Reliable Software That Drives Results
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-9 text-slate-600">
              I help businesses turn ideas into powerful web and mobile apps with clean code, scalable architecture,
              and great user experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#projects"
                className="rounded-lg bg-[#2e7afe] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(46,122,254,0.35)] transition hover:bg-[#1968ef]"
              >
                View My Work
              </a>
              <a href="#about" className="text-base font-semibold text-[#1b3565] transition hover:text-[#2e7afe]">
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative rounded-[24px] border border-blue-100/70 bg-white p-3 shadow-[0_18px_50px_rgba(20,48,99,0.15)]">
            <div className="relative overflow-hidden rounded-[18px] bg-[#f6f9ff] p-4">
              <Image
                src={heroImage}
                alt="Dashboard on laptop and phone"
                width={900}
                height={560}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 rounded-[18px] border border-blue-100 bg-white px-5 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2e7afe]">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-[1380px] px-2 pb-20 sm:px-3 lg:px-4">
        <div className="grid gap-8 rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_12px_34px_rgba(20,48,99,0.09)] md:grid-cols-[0.72fr_1.28fr] md:p-8 lg:p-10">
          <div className="overflow-hidden rounded-[18px] border border-blue-100 bg-[#edf5ff]">
            <Image
              src={newHeadShot}
              alt="Mark Gill headshot"
              width={768}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">About Mark</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a]">Senior Full Stack Developer focused on real business outcomes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I have over 5 years of professional experience building production web, mobile, and backend software.
              My core stack is React, React Native, Next.js, Node.js, and TypeScript.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I have delivered startup MVPs and enterprise-grade tools, including healthcare platforms and real-time collaboration systems.
              Clients value my communication, ownership, and clean maintainable code.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Top Rated Plus", "Top 1% on Upwork"],
                ["100%", "Job Success Score"],
                ["5+", "Years experience"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-[#f6f9ff] p-4">
                  <p className="text-2xl font-extrabold text-[#0f172a]">{value}</p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Selected Projects</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
              Software built around real-world needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A selection of products I have designed and developed across reporting, computer vision, and collaborative education.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-blue-100 bg-[#f8faff] shadow-[0_12px_34px_rgba(20,48,99,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,48,99,0.14)]"
              >
                <div className="aspect-[16/9] overflow-hidden border-b border-blue-100 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2e7afe]">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-[#0f172a]">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-[#1b3565]">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="w-full bg-[#081c36] py-20 text-white">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Services</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
                Technical expertise from first idea to finished product
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-blue-100 lg:justify-self-end">
              Whether you need a new product, a focused feature, or a stronger foundation for existing software, I can step in at any stage and move the work forward.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <article key={service.title} className="group bg-[#0b2342] p-7 transition hover:bg-[#102d53] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.16em] text-blue-300">{service.number}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/30 text-blue-200 transition group-hover:border-blue-300 group-hover:bg-[#2e7afe] group-hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 15 15 5M8 5h7v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-bold tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-4 leading-7 text-blue-100/80">{service.description}</p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-3 text-sm font-medium text-blue-50">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4a93ff]" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-[18px] border border-blue-300/20 bg-white/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-bold">Have a project that does not fit neatly into a category?</h3>
              <p className="mt-2 text-blue-100/80">Tell me what you are trying to accomplish, and I will help identify the right approach.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-[#2e7afe] px-6 font-semibold text-white shadow-[0_12px_28px_rgba(46,122,254,0.35)] transition hover:bg-[#1968ef]"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full bg-[#f5f8ff] py-20">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Client Testimonials</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
                Trusted for the work—and the way I work
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Long-term clients count on me to learn quickly, communicate clearly, adapt as requirements evolve, and deliver dependable software.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_16px_42px_rgba(20,48,99,0.09)]">
            <article className="grid gap-8 bg-[#0b2342] p-7 text-white sm:p-10 lg:grid-cols-[0.35fr_1.65fr] lg:gap-12 lg:p-12">
              <div className="flex items-start">
                <span className="font-serif text-7xl leading-none text-[#4a93ff]" aria-hidden="true">“</span>
              </div>
              <div>
                <blockquote className="text-xl font-medium leading-9 text-blue-50 sm:text-2xl sm:leading-10">
                  {testimonials[0].quote}
                </blockquote>
                <div className="mt-8 border-t border-white/15 pt-6">
                  <p className="font-bold">{testimonials[0].project}</p>
                </div>
              </div>
            </article>

            <div className="grid divide-y divide-blue-100 md:grid-cols-2 md:divide-x md:divide-y-0">
              {testimonials.slice(1).map((testimonial) => (
                <article key={testimonial.project} className="flex flex-col p-7 sm:p-9">
                  <div className="flex items-center">
                    <span className="text-4xl leading-none text-[#2e7afe]" aria-hidden="true">“</span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg font-medium leading-8 text-slate-700">{testimonial.quote}</blockquote>
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <p className="font-bold text-[#0f172a]">{testimonial.project}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-7 text-center text-sm text-slate-500">Client feedback collected through Upwork.</p>
        </div>
      </section>

      <section id="blog" className="w-full bg-white py-20">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">From the Blog</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
                Practical notes on building better software
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Lessons from developing production web, mobile, backend, and real-time applications for growing businesses.
              </p>
            </div>
            <Link href="/blog" className="font-bold text-[#2e7afe] transition hover:text-[#1968ef]">
              View all articles <span aria-hidden="true">→</span>
            </Link>
          </div>

          <article className="mt-12 grid overflow-hidden rounded-[22px] border border-blue-100 bg-[#f8faff] shadow-[0_12px_34px_rgba(20,48,99,0.08)] lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex min-h-64 flex-col justify-between bg-[#0b2342] p-8 text-white sm:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">{featuredPost.category}</span>
              <div className="mt-12 font-mono text-sm text-blue-100">
                <p>React · Next.js · Node.js</p>
                <p className="mt-2">TypeScript · APIs · Architecture</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-slate-500">
                <time dateTime={featuredPost.publishedAt}>{featuredPost.displayDate}</time>
                <span aria-hidden="true">·</span>
                <span>{featuredPost.readingTime}</span>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-4xl">
                <Link href={`/blog/${featuredPost.slug}`} className="transition hover:text-[#2e7afe]">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">{featuredPost.description}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[#2e7afe] transition hover:text-[#1968ef]">
                Read the article <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="w-full bg-[#081c36] py-14 text-white">
        <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-6 px-2 sm:px-3 lg:flex-row lg:items-end lg:justify-between lg:px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Contact</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em]">Ready to build your next product?</h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Send a message with your project goals and I will help shape the best technical plan.
            </p>
          </div>
          <a
            href="mailto:mark@example.com"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2e7afe] px-6 text-base font-semibold text-white shadow-[0_12px_28px_rgba(46,122,254,0.45)] transition hover:bg-[#1968ef]"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
