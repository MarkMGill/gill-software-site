import Image from "next/image";
import Link from "next/link";
import confluentDemo from "../assets/confluent_demo.png";
import heroImage from "../assets/hero_image.png";
import logo from "../assets/logo.png";
import newHeadShot from "../assets/new_head_shot.jpg";
import screnrDemo from "../assets/screnr_demo.png";
import writeGTDemo from "../assets/writeGTdemo4.png";
import TypewriterHeading from "../components/typewriter-heading";
import AnimatedMetric from "../components/animated-metric";
import ContactForm from "../components/contact-form";
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
    category: "Web & full-stack",
    title: "Turn an idea into a working product.",
    description:
      "Custom web applications built around the way your business works. From customer portals to internal tools, every layer comes together: interface, backend, and database.",
    examples: "MVPs · Dashboards · Customer portals",
  },
  {
    category: "Mobile apps",
    title: "Put your product in people's hands.",
    description:
      "Connected experiences for iOS and Android with React Native. Bring the features your users need to mobile, with thoughtful interfaces and the backend to support them.",
    examples: "iOS & Android · Device features · API integration",
  },
  {
    category: "Integrations & improvements",
    title: "Make existing software work better.",
    description:
      "Slow workflows, disconnected systems, and stubborn bugs don't have to stay that way. Add useful features, connect external services, and improve performance without starting over.",
    examples: "New features · Third-party integrations · Modernization",
  },
  {
    category: "Technical direction",
    title: "Know what to build next, and how.",
    description:
      "Get a practical plan before committing to the build. Architecture reviews, code assessments, and clear technical priorities help turn a broad goal into manageable next steps.",
    examples: "Architecture · Code reviews · Technical roadmaps",
  },
];

const projects = [
  {
    title: "Confluent Health Reporting",
    category: "Healthcare reporting platform",
    description:
      "A streamlined, dynamic reporting dashboard that gives users a responsive interface for viewing and working with healthcare business data. The interface includes searchable, filterable data, clear status indicators, and export tools that make complex reporting easier to manage.",
    image: confluentDemo,
    alt: "Confluent Reporting brand scorecard dashboard",
    imageClass: "scale-100",
    technologies: ["React", "Express JS", "Microsoft Azure", "Data Grids", "Reporting UX"],
  },
  {
    title: "Screnr Health",
    category: "Video tracker fitness application",
    description:
      "A movement-analysis experience that uses real-time pose tracking and AI to evaluate exercise form. The app delivers immediate audio/visual in the mobile app to patients.  Clients and PT's can then log in to the web portal to see scores, and PT's can prescribe exercises.",
    image: screnrDemo,
    alt: "Screnr overhead squat analysis on mobile and desktop",
    imageClass: "scale-[1.045]",
    technologies: ["React","React Native", "Express.js", "AWS", "Video Tracking", "Real-time Feedback"],
  },
  {
    title: "Write GT",
    category: "Collaborative whiteboard application",
    description:
      "An interactive handwriting and whiteboard workspace for teaching, tutoring, and remote collaboration. It combines natural drawing tools, graph-paper canvases, zoom controls, printing, video calling, and instant messaging features in one focused interface.",
    image: writeGTDemo,
    alt: "Write GT digital whiteboard displaying a hand-drawn math lesson",
    imageClass: "scale-[1.035]",
    technologies: ["Next.js", "TypeScript", "Express.js", "Digital Ocean", "Canvas", "Real-time Collaboration"],
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
      "Our team works with React and Mark has been with us for a few months now. We went from concept mode to a Windows Desktop application and website that's functioning very well and more as it evolves. Mark goes above and beyond to figure out solutions, and reports them back to us when complete. Very courteous and professional, and I highly recommend him. He has a quick learning curve too.",
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#mark-gill`,
        name: "Mark Gill",
        url: siteConfig.url,
        jobTitle: "Senior Full-Stack Developer",
        homeLocation: { "@type": "Place", name: "North Attleboro, Massachusetts" },
        sameAs: ["https://www.linkedin.com/in/mark-gill-1705b567/"],
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        knowsAbout: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "API development", "Full-stack development"],
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: "info@gillsoftwaresolutions.com",
        telephone: "+1-401-575-6936",
        address: {
          "@type": "PostalAddress",
          addressLocality: "North Attleboro",
          addressRegion: "MA",
          addressCountry: "US",
        },
        areaServed: ["North Attleboro", "Massachusetts", "New England", "United States"],
        sameAs: ["https://www.linkedin.com/in/mark-gill-1705b567/"],
      },
    ],
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

      <section id="home" className="relative isolate overflow-hidden bg-[#081c36] pb-20 pt-12 text-white max-[576px]:pb-[3.2rem] sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2e7afe]/20 blur-3xl" />
          <div className="absolute -right-24 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        </div>

        <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-20">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-[#4a93ff] shadow-[0_0_14px_rgba(74,147,255,0.9)]" />
                Full-Stack Developer
              </div>
              <Link href="/north-attleboro-software-developer" className="mx-auto mt-4 flex w-fit items-center gap-2 text-sm font-semibold text-blue-100/75 transition hover:text-white lg:mx-0">
                Based in North Attleboro, Massachusetts
                <span aria-hidden="true">↗</span>
              </Link>
              <h1 className="display-heading-large mx-auto mt-6 max-w-2xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:mx-0">
                <TypewriterHeading text="Building Reliable Software That Drives Results" />
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-xl leading-9 text-blue-100/80 max-[576px]:text-[1.125rem] max-[576px]:leading-[1.9125rem] lg:mx-0">
                Turn ideas into powerful web and mobile apps with clean code, scalable architecture,
                and great user experiences.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2e7afe] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_28px_rgba(46,122,254,0.4)] transition hover:-translate-y-0.5 hover:bg-[#4a93ff]"
                >
                  View My Work <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Start a Conversation
                </a>
              </div>
              <div className="mt-9 flex items-center justify-center gap-6 text-left lg:justify-start">
                <div>
                  <p className="text-2xl font-extrabold text-white">5+</p>
                  <p className="text-xs font-medium text-blue-200/70">Years building</p>
                </div>
                <div className="h-9 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-extrabold text-white">Top 1%</p>
                  <p className="text-xs font-medium text-blue-200/70">Upwork talent</p>
                </div>
                <div className="h-9 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-extrabold text-white">100%</p>
                  <p className="text-xs font-medium text-blue-200/70">Job success</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-3xl lg:mx-0">
              <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-[#2e7afe]/25 via-transparent to-cyan-300/15 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-500 lg:rotate-[1deg] lg:hover:rotate-0">
                <div className="flex h-10 items-center justify-between rounded-t-[18px] border-b border-slate-200 bg-white px-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">Built for the real world</span>
                  <span className="h-2 w-8 rounded-full bg-slate-100" aria-hidden="true" />
                </div>
                <div className="overflow-hidden rounded-b-[18px] bg-[#f6f9ff] p-3 sm:p-5">
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
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-left text-slate-900 shadow-[0_16px_36px_rgba(0,0,0,0.22)] sm:left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold">Production-ready</p>
                  <p className="text-xs text-slate-500">From idea to launch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid overflow-hidden rounded-[20px] border border-white/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="group flex items-start gap-3 border-blue-100 p-5 transition hover:bg-blue-50/70 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf2ff] font-mono text-xs font-bold text-[#2e7afe] transition group-hover:bg-[#2e7afe] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-reveal mx-auto w-full max-w-[1380px] px-2 pb-20 pt-20 max-[576px]:pb-16 max-[576px]:pt-[4.8rem] sm:px-3 lg:px-4">
        <div className="grid gap-8 rounded-[22px] border border-blue-100 bg-white p-6 shadow-[0_12px_34px_rgba(20,48,99,0.09)] md:p-8 min-[992px]:grid-cols-[0.72fr_1.28fr] lg:p-10">
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
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">Senior Full Stack Developer focused on real business outcomes.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
              Seeing your software vision come to life doesn't have to be a rocky road. Your ideas should come to life through communication, ownership, and clean maintainable code. 
              With over 5 years of professional experience, I've helped clients bring their designs and ideas to MVP's, and production-ready applications with a great UI/UX.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
              Based in North Attleboro, Massachusetts, I work with businesses locally, across New England, and throughout the US. My core stack is React, React Native, Next.js, Node.js, and TypeScript.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#f6f9ff] p-4">
                <p className="text-2xl font-extrabold text-[#0f172a]">Top Rated Plus</p>
                <p className="mt-1 text-sm text-slate-500">Top 1% on Upwork</p>
              </div>
              <div className="rounded-xl bg-[#f6f9ff] p-4">
                <p className="text-2xl font-extrabold text-[#0f172a]"><AnimatedMetric end={100} suffix="%" /></p>
                <p className="mt-1 text-sm text-slate-500">Job Success Score - Upwork</p>
              </div>
              <div className="rounded-xl bg-[#f6f9ff] p-4">
                <p className="text-2xl font-extrabold text-[#0f172a]"><AnimatedMetric end={5} suffix="+" /></p>
                <p className="mt-1 text-sm text-slate-500">Years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-reveal w-full bg-white py-20 max-[576px]:py-16">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Projects</p>
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
              Software built around real-world needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
              A selection of applications I have developed across reporting, video features, and collaborative education.
            </p>
          </div>

          <div className="mt-12 grid gap-8 max-[576px]:mt-[2.4rem] lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-blue-100 bg-[#f8faff] shadow-[0_12px_34px_rgba(20,48,99,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,48,99,0.14)]"
              >
                <div className="aspect-[2/1] overflow-hidden border-b border-blue-100 bg-[#eef3fa]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    className={`h-full w-full object-contain object-center ${project.imageClass}`}
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

      <section id="services" aria-labelledby="services-heading" className="scroll-reveal w-full bg-[#081c36] py-20 text-white max-[576px]:py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Services</p>
            <h2 id="services-heading" className="display-heading mt-5 max-w-lg text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-5xl">
              New ideas.<br />
              Better software.<br />
              <span className="text-blue-300">A clear way forward.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-blue-100/80 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
              Launch something new or improve what you already have. Get hands-on development and practical technical guidance, shaped around your project.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#2e7afe] px-6 py-3 font-semibold text-white transition hover:bg-[#1968ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              Let’s talk about your project
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-blue-200/70">
              Based in North Attleboro, Massachusetts.<br />
              Working with teams across New England and the US.
            </p>
          </div>

          <div className="border-t border-white/15">
            {detailedServices.map((service) => (
              <article key={service.category} className="border-b border-white/15 py-7 first:pt-7 lg:py-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">{service.category}</p>
                <h3 className="mt-3 text-2xl font-bold leading-snug tracking-[-0.02em] sm:text-[1.65rem]">{service.title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-blue-100/80">{service.description}</p>
                <p className="mt-4 text-sm font-medium leading-6 text-blue-200">{service.examples}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-reveal w-full bg-[#f5f8ff] py-20 max-[576px]:py-16">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="grid gap-8 max-[576px]:gap-[1.6rem] lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">Client Testimonials</p>
              <h2 className="display-heading mt-4 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
                Delivering software the way it should be for years
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem] lg:justify-self-end">
              Long-term clients should expect clear communication, quick solutions, adapting as requirements evolve, and delivering great software.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-[0_16px_42px_rgba(20,48,99,0.09)] max-[576px]:mt-[2.4rem]">
            <article className="grid gap-4 bg-[#0b2342] p-7 text-white sm:p-10 lg:grid-cols-[0.35fr_3.25fr] lg:gap-3 lg:p-12">
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
                  <blockquote className="mt-2.5 flex-1 text-lg font-medium leading-8 text-slate-700">{testimonial.quote}</blockquote>
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <p className="font-bold text-[#0f172a]">{testimonial.project}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="blog" className="scroll-reveal w-full bg-white py-20 max-[576px]:py-16">
        <div className="mx-auto w-full max-w-[1380px] px-2 sm:px-3 lg:px-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2e7afe]">From the Blog</p>
              <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl">
                Practical notes on building better software
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
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
              <p className="mt-5 text-lg leading-8 text-slate-600 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">{featuredPost.description}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[#2e7afe] transition hover:text-[#1968ef]">
                Read the article <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="w-full bg-[#081c36] py-14 text-white max-[576px]:pt-[2.8rem]">
        <div className="mx-auto grid w-full max-w-[1380px] gap-10 px-2 sm:px-3 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Contact</p>
            <h2 className="display-heading mt-4 text-4xl font-extrabold tracking-[-0.03em]">Ready to build your next product?</h2>
            <p className="mt-4 text-lg leading-8 text-blue-100 max-[576px]:text-[1.0125rem] max-[576px]:leading-[1.7rem]">
              Send a message with your project goals and I will help shape the best technical plan.
            </p>
            <div className="mt-6 flex flex-col flex-wrap gap-3 text-blue-100 sm:flex-row sm:gap-x-8">
              <Link href="/north-attleboro-software-developer" className="inline-flex items-center gap-2 transition hover:text-white">
                <span className="font-semibold text-white">Location:</span> North Attleboro, MA
              </Link>
              <a href="mailto:info@gillsoftwaresolutions.com" className="inline-flex items-center gap-2 transition hover:text-white">
                <span className="font-semibold text-white">Email:</span> info@gillsoftwaresolutions.com
              </a>
              <a href="tel:+14015756936" className="inline-flex items-center gap-2 transition hover:text-white">
                <span className="font-semibold text-white">Phone:</span> 401-575-6936
              </a>
              <a
                href="https://www.linkedin.com/in/mark-gill-1705b567/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mark Gill on LinkedIn"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <span className="font-semibold text-white">LinkedIn:</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
