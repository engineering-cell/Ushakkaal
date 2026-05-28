"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IllustrationCard from "@/components/IllustrationCard";
import Reveal from "@/components/Reveal";

/* ─── Neural network SVG illustration for hero card ─── */
function HeroNetworkSVG() {
  // Nodes: A=input, B-D=hidden1, E-H=hidden2, I-J=hidden3, K=output
  // Highlighted signal path: A → C → G → J → K
  return (
    <svg
      viewBox="0 0 380 210"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="hero-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="hero-glow-sm" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Faint background connections */}
      <g stroke="rgba(184,155,94,0.16)" strokeWidth="0.75" fill="none">
        {/* A → B, D */}
        <line x1="35" y1="105" x2="110" y2="48" />
        <line x1="35" y1="105" x2="110" y2="162" />
        {/* B → E, F, G */}
        <line x1="110" y1="48" x2="185" y2="22" />
        <line x1="110" y1="48" x2="185" y2="78" />
        <line x1="110" y1="48" x2="185" y2="122" />
        {/* C → E, F (highlighted path A→C→G skips these) */}
        <line x1="110" y1="105" x2="185" y2="22" />
        <line x1="110" y1="105" x2="185" y2="78" />
        {/* D → F, G, H */}
        <line x1="110" y1="162" x2="185" y2="78" />
        <line x1="110" y1="162" x2="185" y2="122" />
        <line x1="110" y1="162" x2="185" y2="178" />
        {/* E → I, J */}
        <line x1="185" y1="22" x2="260" y2="58" />
        <line x1="185" y1="22" x2="260" y2="142" />
        {/* F → I, J */}
        <line x1="185" y1="78" x2="260" y2="58" />
        <line x1="185" y1="78" x2="260" y2="142" />
        {/* G → I */}
        <line x1="185" y1="122" x2="260" y2="58" />
        {/* H → J */}
        <line x1="185" y1="178" x2="260" y2="142" />
        {/* I → K */}
        <line x1="260" y1="58" x2="340" y2="105" />
      </g>

      {/* Highlighted signal path: A→C→G→J→K */}
      <g className="signal-path" stroke="rgba(184,155,94,0.55)" strokeWidth="1.3" fill="none">
        <line x1="35" y1="105" x2="110" y2="105" />
        <line x1="110" y1="105" x2="185" y2="122" />
        <line x1="185" y1="122" x2="260" y2="142" />
        <line x1="260" y1="142" x2="340" y2="105" />
      </g>

      {/* Regular hidden nodes */}
      <g fill="rgba(184,155,94,0.38)">
        <circle cx="110" cy="48" r="2.5" />
        <circle cx="110" cy="162" r="2.5" />
        <circle cx="185" cy="22" r="2" />
        <circle cx="185" cy="78" r="2.5" />
        <circle cx="185" cy="178" r="2" />
        <circle cx="260" cy="58" r="2.5" />
      </g>

      {/* Path nodes — brighter */}
      <g fill="rgba(184,155,94,0.78)">
        <circle cx="35" cy="105" r="4" filter="url(#hero-glow-sm)" />
        <circle cx="110" cy="105" r="3.5" />
        <circle cx="260" cy="142" r="3.5" />
        <circle cx="340" cy="105" r="4.5" filter="url(#hero-glow-sm)" />
      </g>

      {/* Center highlight node — G */}
      <circle cx="185" cy="122" r="9" fill="rgba(184,155,94,0.2)" filter="url(#hero-glow)" />
      <circle cx="185" cy="122" r="5.5" fill="#b89b5e" />
      <circle cx="185" cy="122" r="2.5" fill="#f4f0e8" opacity="0.95" />

      {/* Animated signal particles along the path */}
      <circle className="signal-dot-1" cx="72" cy="105" r="2" fill="rgba(244,240,232,0.7)" />
      <circle className="signal-dot-2" cx="222" cy="133" r="2" fill="rgba(244,240,232,0.65)" />
      <circle className="signal-dot-3" cx="300" cy="123" r="2" fill="rgba(244,240,232,0.55)" />
    </svg>
  );
}

/* ─── Product tile icons ─── */
const ProductIcons = {
  platform: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <circle cx="24" cy="8" r="2" fill="currentColor" />
      <circle cx="8" cy="24" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" opacity="0.95" />
      <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <line x1="24" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <line x1="8" y1="24" x2="16" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <line x1="24" y1="24" x2="16" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.45" />
      <line x1="8" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="8" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="12" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <line x1="16" y1="5" x2="16" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="16" y1="20" x2="16" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="5" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="16" cy="5" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="27" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="5" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="27" cy="16" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="0.75" opacity="0.28" />
    </svg>
  ),
  engine: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <line x1="5" y1="10" x2="27" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="5" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <polyline
        points="23,14 27,16 23,18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  ),
};

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="pt-[76px] max-[620px]:pt-[66px]">

        {/* ── Hero ── */}
        <section className="min-h-[calc(100svh-76px)] grid items-center pt-[88px] pb-[78px]">
          <Container>
            <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] gap-16 items-end max-[920px]:grid-cols-1">
              <Reveal>
                <div className="inline-flex items-center gap-[10px] text-[13px] tracking-[.12em] uppercase text-(--gold) mb-[26px]">
                  <span className="w-[34px] h-px bg-(--gold) opacity-80" />
                  A creative legacy. A systems future.
                </div>
                <h1 className="font-serif font-normal tracking-[-.055em] leading-[.98] text-[clamp(42px,7.2vw,96px)] mb-[26px] max-w-[900px] max-[620px]:text-[clamp(38px,11vw,60px)] text-balance">
                  <span className="block">A legacy in persuasion.</span>
                  <span className="block text-[rgba(244,240,232,.9)]">
                    A future in <span className="text-(--gold)">intelligence</span>.
                  </span>
                </h1>
                <p className="max-w-[680px] text-[rgba(244,240,232,.84)] text-[clamp(16px,1.5vw,22px)] leading-normal tracking-[-.014em] mb-[34px] max-[620px]:text-[16px]">
                  Ushakkaal blends advertising memory with technical craft to build intelligent
                  communication—strategies, products, and systems that learn, adapt, and scale.
                </p>
                <div className="flex flex-wrap gap-[14px] max-[620px]:w-full">
                  <Button variant="primary" href="#intelligence" className="max-[620px]:w-full">
                    Explore the work
                  </Button>
                  <Button href="#contact" className="max-[620px]:w-full">
                    Start a conversation
                  </Button>
                </div>
              </Reveal>

              <Reveal>
                <aside
                  className="relative p-7 pb-6 min-h-[400px] max-[920px]:min-h-[300px] overflow-hidden rounded-[28px] border border-(--line) shadow-[0_24px_80px_rgba(0,0,0,.36)] bg-[linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.03))] flex flex-col"
                  aria-label="Intelligence signal visualization"
                >
                  <div className="absolute right-[-92px] top-[-80px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(184,155,94,.26),transparent_62%)]" />

                  <div className="flex justify-between gap-[18px] text-[13px] tracking-widest uppercase text-(--muted)">
                    <span>Signal 001</span>
                    <span>Intelligence</span>
                  </div>

                  <div className="flex-1 flex items-center mt-2">
                    <HeroNetworkSVG />
                  </div>

                  <div
                    className="absolute left-7 bottom-[28px] w-[108px] h-[108px] rounded-full border border-[rgba(184,155,94,.3)] bg-[radial-gradient(circle_at_35%_30%,rgba(244,240,232,.18),rgba(184,155,94,.08)_35%,transparent_68%)] animate-[float_7s_ease-in-out_infinite_alternate] opacity-60"
                    aria-hidden="true"
                  />

                  <div className="mt-4 flex items-center gap-[10px] text-[11px] text-(--gold) tracking-widest uppercase relative z-10">
                    <span className="w-5 h-px bg-(--gold) opacity-60" />
                    Active signal path
                  </div>
                </aside>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Intelligence ── */}
        <section id="intelligence">
          <div className="py-[116px] max-[920px]:py-[86px]">
            <Container>
              <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                    Intelligence
                  </div>
                  <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(36px,5.2vw,72px)] mb-5">
                    The intelligence layer of communication.
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="text-[rgba(244,240,232,.8)] text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                    AI is shifting from feature to foundation—reshaping how ideas are formed, how
                    software is built, and how products respond in real time.
                  </p>
                  <p className="text-(--muted) text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                    We work where creative judgment, product thinking, and machine intelligence become
                    one continuous system.
                  </p>
                </Reveal>
              </div>

              <Reveal className="mt-10">
                <IllustrationCard
                  src="/visuals/intelligence.svg"
                  alt="Abstract intelligence signal illustration"
                />
              </Reveal>

              <div className="grid grid-cols-3 gap-[18px] mt-11 max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
                {[
                  {
                    num: "01",
                    title: "AI Product Strategy",
                    text: "Define what the product should understand, how it should behave, and where intelligence creates real value.",
                  },
                  {
                    num: "02",
                    title: "Software Prototypes",
                    text: "Turn early thinking into usable prototypes—platforms, tools, and proof-of-intelligence workflows.",
                  },
                  {
                    num: "03",
                    title: "Intelligent Interfaces",
                    text: "Design interactions that stay clear and human—even when the system underneath is complex.",
                  },
                  {
                    num: "04",
                    title: "Automation Systems",
                    text: "Build automations that remove repetition, connect tools, and increase speed without losing precision.",
                  },
                  {
                    num: "05",
                    title: "Generative Engines",
                    text: "Create generative engines for content, research, decisions, recommendations, and adaptive communication.",
                  },
                  {
                    num: "06",
                    title: "AI Integration",
                    text: "Integrate intelligence into existing products, sites, operations, and customer experiences—cleanly and safely.",
                  },
                ].map((c) => (
                  <Reveal key={c.num}>
                    <article className="min-h-[240px] p-[26px] rounded-3xl border border-(--line) bg-[rgba(255,255,255,.047)] transition-[transform,border-color,background] duration-350 ease-(--ease) hover:translate-y-[-6px] hover:border-[rgba(184,155,94,.42)] hover:bg-[rgba(184,155,94,.075)]">
                      <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[30px]">
                        {c.num}
                      </div>
                      <h3 className="text-[19px] tracking-[-.02em] leading-[1.3] mb-[10px]">{c.title}</h3>
                      <p className="text-(--muted) text-[15px] leading-[1.65] m-0">{c.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Container>
          </div>
        </section>

        {/* ── Products ── */}
        <section id="products" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                  Products
                </div>
                <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(36px,5.2vw,72px)] mb-5">
                  Building for the intelligent era.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[rgba(244,240,232,.8)] text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                  The next generation of software won’t just be used—it will understand, adapt,
                  generate, recommend, and learn.
                </p>
                <p className="text-(--muted) text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                  We treat AI as both a creative and technical layer—shaping platforms, tools, and
                  experiences that improve with use.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-10">
              <IllustrationCard src="/visuals/products.svg" alt="Abstract product tiles illustration" />
            </Reveal>

            <Reveal className="mt-[46px]">
              <div className="grid grid-cols-4 gap-px border border-(--line) rounded-[28px] overflow-hidden bg-(--line) max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
                {[
                  {
                    num: "01",
                    title: "AI-enabled platforms",
                    desc: "Software that understands, adapts, and responds in real time.",
                    icon: ProductIcons.platform,
                  },
                  {
                    num: "02",
                    title: "Internal intelligence tools",
                    desc: "Systems that make teams faster, smarter, and more connected.",
                    icon: ProductIcons.tools,
                  },
                  {
                    num: "03",
                    title: "Adaptive customer experiences",
                    desc: "Products that learn from every interaction and continuously improve.",
                    icon: ProductIcons.experience,
                  },
                  {
                    num: "04",
                    title: "Content and workflow engines",
                    desc: "Pipelines that create, curate, and distribute at scale.",
                    icon: ProductIcons.engine,
                  },
                ].map((t) => (
                  <div
                    key={t.num}
                    className="min-h-[220px] max-[620px]:min-h-[180px] p-7 bg-[rgba(255,255,255,.045)] flex flex-col justify-between gap-6 hover:bg-[rgba(255,255,255,.068)] transition-colors duration-300"
                  >
                    <div>
                      <span className="text-[12px] uppercase tracking-[.13em] text-(--gold)">
                        {t.num}
                      </span>
                      <h3 className="mt-4 text-[19px] leading-[1.28] tracking-[-.015em]">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-(--muted) text-[14px] leading-[1.6] m-0">
                        {t.desc}
                      </p>
                    </div>
                    <span className="text-(--gold) opacity-60">{t.icon}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ── Systems ── */}
        <section id="systems" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                  Systems
                </div>
                <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(36px,5.2vw,72px)] mb-5">
                  Behind every product is a system.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[rgba(244,240,232,.8)] text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                  Modern products live inside interfaces, data, workflows, automation, models, and
                  invisible technical decisions.
                </p>
                <p className="text-(--muted) text-[clamp(15px,1.2vw,19px)] max-w-[760px]">
                  Ushakkaal treats technology as part of the creative act: structured enough to
                  scale, flexible enough to evolve, and intelligent enough to serve the people
                  using it.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-10">
              <IllustrationCard src="/visuals/systems.svg" alt="Abstract systems flow illustration" />
            </Reveal>

            <div className="grid grid-cols-4 gap-0 mt-12 max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
              {[
                {
                  t: "Think",
                  p: "Clarify the idea, audience, product role, and intelligence opportunity.",
                  n: "01",
                },
                {
                  t: "Architect",
                  p: "Shape the technical structure, workflows, interface logic, and AI layer.",
                  n: "02",
                },
                {
                  t: "Build",
                  p: "Create prototypes, software products, automation systems, and connected experiences.",
                  n: "03",
                },
                {
                  t: "Refine",
                  p: "Learn from use, improve the system, and prepare it for the next stage.",
                  n: "04",
                },
              ].map((s, i) => (
                <Reveal key={s.t}>
                  <div className="pt-7 pr-8 border-t border-(--line) relative">
                    {/* Arrow connector between steps */}
                    {i < 3 && (
                      <div
                        className="absolute -top-px right-0 translate-x-1/2 translate-y-[-50%] text-(--gold) opacity-30 hidden min-[921px]:block"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                          <polyline
                            points="2,3 8,6 2,9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="text-[11px] uppercase tracking-[.12em] text-(--faint) mb-[10px] block">
                      {s.n}
                    </span>
                    <strong className="block text-(--gold) mb-[10px] font-medium text-[17px]">
                      {s.t}
                    </strong>
                    <p className="m-0 text-(--muted) text-[15px] leading-[1.65]">{s.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Recognition ── */}
        <section id="recognition" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <Reveal>
              <div className="grid grid-cols-[.9fr_1.1fr] gap-[38px] items-center p-[54px] max-[620px]:p-[28px] rounded-[28px] border border-(--line) bg-[linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.03))] max-[920px]:grid-cols-1">
                <div className="font-serif tracking-[-.07em] leading-[.85] text-[clamp(76px,12vw,170px)] text-(--gold) select-none">
                  100+
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                    Recognition
                  </div>
                  <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(32px,4.6vw,60px)] mb-4">
                    A history of work that moved people.
                  </h2>
                  <p className="text-(--muted) text-[clamp(16px,1.3vw,20px)] max-w-[760px] leading-[1.65]">
                    Recognition is not the destination. It is the evidence. A foundation of creative
                    achievement now carried into the intelligent era.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ── CTA / Next ── */}
        <section className="text-center py-[136px]">
          <Container>
            <Reveal>
              <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                Next
              </div>
              <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(32px,4.8vw,68px)] mb-5 max-w-[820px] mx-auto">
                The future of communication will not look like its past. But it will remember it.
              </h2>
              <p className="text-[rgba(244,240,232,.78)] text-[clamp(15px,1.2vw,19px)] max-w-[640px] mx-auto leading-[1.6]">
                Ushakkaal explores what happens when memory, craft, software, and intelligence begin
                to move together.
              </p>
              <div className="flex flex-wrap gap-[14px] justify-center mt-[38px]">
                <Button variant="primary" href="#contact" className="max-[620px]:w-full">
                  Start a conversation
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[.9fr_1.1fr] gap-11 items-stretch max-[920px]:grid-cols-1">
              <Reveal>
                <div className="border border-(--line) rounded-[28px] bg-[rgba(255,255,255,.045)] p-[38px] max-[620px]:p-[28px] flex flex-col justify-between gap-[68px]">
                  <div>
                    <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                      Contact
                    </div>
                    <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.05] text-[clamp(32px,4.6vw,58px)] mb-5">
                      Start a conversation.
                    </h2>
                    <p className="text-(--muted) text-[clamp(16px,1.3vw,20px)] max-w-[760px] leading-[1.65]">
                      For AI products, intelligent systems, technical development, and what
                      communication becomes next.
                    </p>
                  </div>
                  <a
                    href="mailto:hello@ushakkaal.com"
                    className="text-(--gold) text-[15px] tracking-[.02em] hover:opacity-75 transition-opacity duration-200 w-fit"
                  >
                    hello@ushakkaal.com
                  </a>
                </div>
              </Reveal>

              <Reveal>
                <form
                  className="border border-(--line) rounded-[28px] bg-[rgba(255,255,255,.045)] p-[38px] max-[620px]:p-[28px] grid gap-[16px]"
                  action="mailto:hello@ushakkaal.com"
                  method="post"
                  encType="text/plain"
                >
                  {[
                    { id: "name", label: "Name", type: "text", autoComplete: "name" },
                    { id: "email", label: "Email", type: "email", autoComplete: "email" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label
                        className="text-[12px] tracking-widest uppercase text-(--muted)"
                        htmlFor={f.id}
                      >
                        {f.label}
                      </label>
                      <input
                        className="mt-[8px] w-full rounded-2xl border border-(--line) bg-[rgba(0,0,0,.22)] px-4 py-[14px] text-[15px] outline-none transition-[border-color,background] duration-250 ease-(--ease) focus:border-[rgba(184,155,94,.6)] focus:bg-[rgba(0,0,0,.34)] placeholder:text-(--faint)"
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        autoComplete={f.autoComplete}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      className="text-[12px] tracking-widest uppercase text-(--muted)"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="mt-[8px] min-h-[140px] resize-y w-full rounded-2xl border border-(--line) bg-[rgba(0,0,0,.22)] px-4 py-[14px] text-[15px] outline-none transition-[border-color,background] duration-250 ease-(--ease) focus:border-[rgba(184,155,94,.6)] focus:bg-[rgba(0,0,0,.34)]"
                      id="message"
                      name="message"
                    />
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-2 w-fit max-[620px]:w-full"
                  >
                    Send message
                  </Button>
                </form>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
