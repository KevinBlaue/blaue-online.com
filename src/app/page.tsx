import Image from "next/image";
import { SiDatadog, SiTypescript } from "react-icons/si";
import {
  FaArrowUp,
  FaAws,
  FaBlog,
  FaCloud,
  FaEnvelope,
  FaFileLines,
  FaGithub,
  FaLinkedin,
  FaWallet,
} from "react-icons/fa6";
import {
  TbActivityHeartbeat,
  TbApiApp,
  TbBrain,
  TbDatabaseShare,
  TbServer,
  TbShieldLock,
  TbUsers,
} from "react-icons/tb";
import type { IconType } from "react-icons";

import { ContactForm } from "./contact-form";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#achievements" },
  { label: "Case studies", mobileLabel: "Cases", href: "#patterns" },
  { label: "Experience", mobileLabel: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const availabilityNote =
  "Based in Calgary, AB, with a Canadian IEC open work permit. Available now, no sponsorship or LMIA required.";

const resumeAsset = "/assets/kevin-blaue-resume.pdf";
const achievementsAsset = "/assets/kevin-blaue-achievements.pdf";
const emailHref = "mailto:kevin@blaue-online.com";

const focusItems: { label: string; copy: string; icon: IconType }[] = [
  {
    label: "Architecture Governance",
    copy: "Represented my department in freenet's internal Architecture Management Group, contributing to company-wide architecture decisions and technical standards.",
    icon: TbApiApp,
  },
  {
    label: "BFF Delivery & Handover",
    copy: "Owned freenet's first Backend for Frontend from architecture and governance review through Jira planning, cross-team delivery, and structured knowledge transfer.",
    icon: TbUsers,
  },
  {
    label: "Reliable Backend Operations",
    copy: "Build and maintain AWS services, APIs, identity boundaries, observability, security controls, and delivery workflows for production ownership.",
    icon: SiDatadog,
  },
];

const systemSignals = [
  { metric: "Experience", value: "6+ yrs", label: "Software development" },
  { metric: "AWS", value: "3+ yrs", label: "Production workloads" },
  { metric: "Available", value: "Now", label: "Calgary / Canada" },
];

const systemRows: [string, string, IconType][] = [
  ["Backend", "TypeScript, Node.js, REST, GraphQL", SiTypescript],
  ["Cloud", "AWS Lambda, CDK, API Gateway, S3, Glue", FaAws],
  ["Identity", "Auth0, IAM, scopes, GDPR controls", TbShieldLock],
  ["Observability", "Datadog, Sentry, CloudWatch", TbActivityHeartbeat],
];

const keyAchievements: { title: string; copy: string; icon: IconType }[] = [
  {
    title: "Architecture Governance",
    copy: "Nominated to represent my department in the internal Architecture Management Group, where system architects and selected engineering representatives align company-wide standards and decisions.",
    icon: TbApiApp,
  },
  {
    title: "First Backend for Frontend",
    copy: "Owned architecture, documentation, governance review, implementation planning, task breakdown, dependencies, and handover for the company's first BFF.",
    icon: TbServer,
  },
  {
    title: "IAM Platform Ownership",
    copy: "Developed and maintained central Auth0-based customer login and authorization services used by multiple internal teams across freenet Mobilfunk and Klarmobil.",
    icon: TbShieldLock,
  },
  {
    title: "Cloud Infrastructure Delivery",
    copy: "Developed and operated serverless AWS services with IaC, scalable architectures, observability, and Glue-based data pipelines across a 3-year tenure at Fielmann.",
    icon: FaAws,
  },
  {
    title: "Cross-Team Enablement",
    copy: "Turned architecture into executable work, coordinated dependencies and Product Owner alignment, and enabled a frontend-focused team to maintain the BFF independently after handover.",
    icon: TbUsers,
  },
  {
    title: "AI-Assisted Engineering",
    copy: "Use AI to accelerate analysis, implementation, and debugging while retaining responsibility for correctness, architecture, maintainability, security, and long-term fit.",
    icon: TbBrain,
  },
];

const engineeringPatterns: {
  title: string;
  context: string;
  contribution: string;
  signal: string;
  tags: string[];
  flow: string[];
  icon: IconType;
}[] = [
  {
    title: "First Backend for Frontend",
    context:
      "A new backend boundary for a frontend-focused team with limited AWS experience, designed to fit internal architecture standards and remain maintainable after handover.",
    contribution:
      "Owned the architecture, technical documentation, governance presentation, Jira breakdown, Product Owner coordination, cross-team dependencies, implementation structure, and knowledge transfer.",
    signal: "Turns an architecture decision into an executable plan and an independently maintainable system.",
    tags: ["AWS", "TypeScript", "REST", "Architecture", "Knowledge transfer"],
    flow: ["Requirements", "BFF design", "Governance review", "Team handover"],
    icon: TbServer,
  },
  {
    title: "Consent-Gated Order Data API",
    context:
      "A typed order-data boundary that unified multiple order sources behind a consent-aware GraphQL/API layer for consuming applications.",
    contribution:
      "Worked with a teammate and an external AWS architect on the domain model, data mapping, resolver behavior, canary coverage, and private connectivity inside a solution-architecture-led AppSync design.",
    signal: "Makes multiple order sources appear as one consent-aware product API.",
    tags: ["GraphQL", "AppSync", "DynamoDB", "VPC", "Canaries"],
    flow: ["Order sources", "Mapping layer", "Consent gate", "Typed API"],
    icon: TbDatabaseShare,
  },
  {
    title: "Digital Wallet Integration",
    context:
      "A wallet-pass backend for mobile pass creation, registration, updates, callbacks, and deletion flows across wallet providers.",
    contribution:
      "Led the Apple Wallet implementation and helped shape the shared API contract, lifecycle behavior, callback handling, CORS/security controls, and synthetic test coverage.",
    signal: "Turns wallet provider callbacks into an auditable pass lifecycle.",
    tags: ["TypeScript", "AWS Lambda", "API Gateway", "CDK", "Wallet APIs"],
    flow: ["Client app", "Pass API", "Wallet provider", "Lifecycle events"],
    icon: FaWallet,
  },
];

const careerTimeline = [
  {
    role: "Software Developer",
    company: "freenet DLS GmbH",
    period: "Nov 2025 — Sep 2026",
    logo: "/assets/freenet.png",
    highlight:
      "Represented my department in the internal Architecture Management Group and owned the company's first BFF from architecture and governance review through cross-team delivery and handover. Also maintained central Auth0-based IAM services.",
  },
  {
    role: "Software Developer",
    company: "Fielmann Group AG",
    period: "Nov 2022 — Oct 2025",
    logo: "/assets/fielmann.png",
    highlight:
      "Built and operated serverless AWS backend services for 3 years. Introduced observability with Datadog/CloudWatch, designed data pipelines, and owned operational reliability.",
  },
  {
    role: "Working Student, Full-Stack",
    company: "1&1 Versatel Deutschland GmbH",
    period: "May 2019 — Jul 2022",
    logo: "/assets/1and1.png",
    highlight:
      "Internal tools and customer-contact systems in a telecom enterprise while completing a B.Sc. in Applied Computer Science.",
  },
];

const contactLinks: {
  label: string;
  href: string;
  icon: IconType;
  download?: boolean;
}[] = [
  { label: "Email", href: emailHref, icon: FaEnvelope },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-blaue-b09a9023b", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/KevinBlaue", icon: FaGithub },
  { label: "Resume", href: resumeAsset, icon: FaFileLines, download: true },
  { label: "Architecture brief", href: achievementsAsset, icon: FaFileLines, download: true },
  { label: "Blog", href: "https://blog.blaue-online.com/", icon: FaBlog },
  { label: "Bluestack", href: "https://www.bluestack.cloud/en/", icon: FaCloud },
  { label: "Top", href: "#top", icon: FaArrowUp },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Blaue",
  url: "https://blaue-online.com",
  email: "mailto:kevin@blaue-online.com",
  jobTitle: "Backend / Cloud Software Developer",
  sameAs: [
    "https://www.linkedin.com/in/kevin-blaue-b09a9023b",
    "https://github.com/KevinBlaue",
  ],
  knowsAbout: [
    "Amazon Web Services",
    "Backend Development",
    "TypeScript",
    "Node.js",
    "Software Architecture",
    "Serverless Architecture",
    "Identity and Access Management",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f4] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-[#f6f7f4]/92 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"
        >
          <a
            href="#top"
            className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-900"
            aria-label="Back to top"
          >
            Kevin Blaue
          </a>
          <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white px-1 py-1 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 sm:px-3 sm:text-sm"
              >
                {item.mobileLabel ? (
                  <>
                    <span className="sm:hidden">{item.mobileLabel}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-28"
      >
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
            Backend / Cloud Software Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            Backend systems, owned from architecture to handover.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700">
            I design cloud backends and turn architecture into executable work.
            My recent work spans company-wide architecture governance, the first
            Backend for Frontend at freenet, AWS serverless systems, and central
            Auth0/IAM services.
          </p>
          <p className="mt-4 max-w-2xl rounded-md border border-sky-200 bg-sky-50 px-4 py-3 text-sm font-medium leading-6 text-sky-900">
            {availabilityNote}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              View work focus
            </a>
            <a
              href={resumeAsset}
              download
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </div>
        </div>

        <aside
          aria-label="Technical profile summary"
          className="self-center rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
        >
          <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Profile
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">
                  At a glance
                </h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Calgary · Open work permit
              </span>
            </div>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-3">
            {systemSignals.map((signal) => (
              <div
                key={signal.metric}
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {signal.metric}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">
                  {signal.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{signal.label}</p>
              </div>
            ))}
          </div>

          <div className="px-5 pb-5">
            <div className="overflow-hidden rounded-md border border-slate-200">
              {systemRows.map(([domain, technologies, Icon]) => (
                <div
                  key={domain}
                  className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 last:border-b-0"
                >
                  <Icon className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                  <span className="shrink-0 font-medium text-slate-900">
                    {domain}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {technologies}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section
        id="work"
        className="scroll-mt-24 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Work focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Architecture that teams can deliver and own.
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              My responsibility extends beyond implementation: architecture,
              technical documentation, governance review, planning, cross-team
              coordination, production readiness, and knowledge transfer.
            </p>
          </div>
          <div className="grid gap-4">
            {focusItems.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-slate-200 bg-[#fbfbf8] p-5"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.label}
                  </h3>
                </div>
                <p className="mt-3 leading-7 text-slate-700">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="scroll-mt-24 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Achievements
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ownership beyond implementation.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyAchievements.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-[#fbfbf8] p-5"
              >
                <item.icon className="h-6 w-6 text-emerald-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="patterns"
        className="scroll-mt-24 border-y border-slate-200 bg-[#f4f7f1]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Engineering Patterns
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Selected architecture and backend case studies.
              </h2>
              <p className="mt-5 leading-8 text-slate-700">
                These examples show where I owned delivery and where I
                contributed inside team-built systems, without exposing private
                source code or internal project material.
              </p>
            </div>

            <div className="rounded-lg border border-slate-300 bg-slate-950 p-5 text-white shadow-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Backend work made tangible
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug">
                API contracts, consent gates, private connectivity, event
                flows, canaries, and reliability controls are the visible
                artifacts of systems that otherwise live behind the scenes.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {engineeringPatterns.map((pattern) => (
              <article
                key={pattern.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                    <pattern.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {pattern.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {pattern.context}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-3"
                  aria-label={`${pattern.title} architecture flow`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Flow
                    </p>
                    <span className="h-px flex-1 bg-slate-200" aria-hidden />
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-4">
                    {pattern.flow.map((step, index) => (
                      <div key={step} className="relative">
                        <div className="h-full rounded-md border border-slate-200 bg-white px-3 py-3">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                            0{index + 1}
                          </p>
                          <p className="mt-1 text-xs font-semibold uppercase text-slate-800">
                            {step}
                          </p>
                        </div>
                        {index < pattern.flow.length - 1 ? (
                          <span
                            className="absolute -right-2 top-1/2 hidden h-px w-4 bg-emerald-300 sm:block"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-6 text-slate-600">
                    {pattern.signal}
                  </p>
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Contribution
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {pattern.contribution}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {pattern.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Six years of shipping software, nearly four full-time.
              </h2>
              <p className="mt-5 leading-8 text-slate-700">
                From internal tooling to AWS platforms, architecture governance,
                and end-to-end BFF delivery — with increasing ownership across
                systems and teams.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={resumeAsset}
                  download
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                >
                  Download full resume
                </a>
                <a
                  href={achievementsAsset}
                  download
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
                >
                  Download architecture brief
                </a>
              </div>
            </div>

            <div className="grid gap-4 content-start">
              {careerTimeline.map((item) => (
                <article
                  key={item.company}
                  className="rounded-lg border border-slate-200 bg-[#fbfbf8] p-5"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-md object-contain"
                    />
                    <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                        {item.company}
                      </p>
                      <span className="font-mono text-xs text-slate-400">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">
                    {item.role}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    {item.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.75fr)] lg:px-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Based in Calgary. Available now.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              I hold a Canadian IEC open work permit, so no sponsorship or LMIA
              is required. Open to backend, cloud, platform, and related software
              engineering roles in Calgary or suitable remote roles across Canada.
            </p>
          </div>
          <div className="grid content-start gap-5">
            <ContactForm />
            <div className="grid grid-cols-2 gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  aria-label={link.label === "Top" ? "Back to top" : link.label}
                  className="group inline-flex min-h-14 items-center gap-3 rounded-md border border-white/15 bg-white/[0.03] px-4 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-slate-100 transition group-hover:bg-emerald-300 group-hover:text-slate-950">
                    <link.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
