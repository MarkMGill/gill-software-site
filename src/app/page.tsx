import Image from "next/image";
import heroImage from "./hero_image.png";
import logo from "./logo.png";
import newHeadShot from "./new_head_shot.jpg";

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

export default function Home() {
  return (
    <main className="bg-[#f5f8ff] text-slate-900">
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
