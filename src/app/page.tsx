"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="pt-[76px] max-[620px]:pt-[66px]">
        <section className="min-h-[calc(100svh-76px)] grid items-center pt-[88px] pb-[78px]">
          <Container>
            <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] gap-16 items-end max-[920px]:grid-cols-1">
              <Reveal>
                <div className="inline-flex items-center gap-[10px] text-[13px] tracking-[.12em] uppercase text-(--gold) mb-[26px]">
                  <span className="w-[34px] h-px bg-(--gold) opacity-80" />
                  100+ awards. One evolving language of influence.
                </div>
                <h1 className="font-serif font-normal tracking-[-.055em] leading-[.96] text-[clamp(58px,10vw,142px)] mb-[34px] max-w-[980px] max-[620px]:text-[clamp(52px,16vw,88px)]">
                  A legacy in persuasion.
                  <br />A future in intelligence.
                </h1>
                <p className="max-w-[760px] text-[rgba(244,240,232,.84)] text-[clamp(20px,2.1vw,30px)] leading-[1.35] tracking-[-.018em] mb-[38px] max-[620px]:text-[20px]">
                  Ushakkaal brings together advertising memory, technical craft, and emerging
                  intelligence to explore what communication becomes next.
                </p>
                <div className="flex flex-wrap gap-[14px] max-[620px]:w-full">
                  <Button variant="primary" href="#intelligence" className="max-[620px]:w-full">
                    Explore the thinking
                  </Button>
                  <Button href="#contact" className="max-[620px]:w-full">
                    Contact
                  </Button>
                </div>
              </Reveal>

              <Reveal>
                <aside
                  className="relative p-7 min-h-[370px] max-[920px]:min-h-[280px] overflow-hidden rounded-[28px] border border-(--line) shadow-[0_24px_80px_rgba(0,0,0,.32)] bg-[linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.035))]"
                  aria-label="Intelligence signal graphic"
                >
                  <div className="absolute right-[-92px] top-[-80px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(184,155,94,.28),transparent_62%)]" />
                  <div className="flex justify-between gap-[18px] text-[13px] tracking-widest uppercase text-(--muted)">
                    <span>Signal 001</span>
                    <span>Intelligence</span>
                  </div>
                  <div
                    className="absolute left-7 bottom-[34px] w-[132px] h-[132px] rounded-full border border-[rgba(184,155,94,.38)] bg-[radial-gradient(circle_at_35%_30%,rgba(244,240,232,.22),rgba(184,155,94,.10)_35%,transparent_68%)] animate-[float_7s_ease-in-out_infinite_alternate]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-7 bottom-[34px] w-[46%] grid gap-3"
                    aria-hidden="true"
                  >
                    <span className="h-px bg-[linear-gradient(90deg,transparent,rgba(244,240,232,.42))]" />
                    <span className="h-px w-[80%] justify-self-end opacity-70 bg-[linear-gradient(90deg,transparent,rgba(244,240,232,.42))]" />
                    <span className="h-px w-[62%] justify-self-end opacity-45 bg-[linear-gradient(90deg,transparent,rgba(244,240,232,.42))]" />
                  </div>
                </aside>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="intelligence">
          <div className="py-[116px] max-[920px]:py-[86px]">
            <Container>
              <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
                <Reveal>
                  <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                    Intelligence
                  </div>
                  <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(42px,6vw,86px)] mb-6">
                    The new layer of communication.
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="text-[rgba(244,240,232,.78)] text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                    Artificial intelligence is moving from feature to foundation. It is changing how
                    ideas are shaped, how software is built, how systems respond, and how people
                    interact with products.
                  </p>
                  <p className="text-(--muted) text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                    Ushakkaal works at this edge: where creative judgment, technical development,
                    product thinking, and machine intelligence become one continuous system.
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-3 gap-[18px] mt-11 max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
                {[
                  {
                    num: "01",
                    title: "AI Product Strategy",
                    text: "Defining what intelligent products should do, how they should behave, and where they create meaningful value.",
                  },
                  {
                    num: "02",
                    title: "Software Prototypes",
                    text: "Turning early ideas into usable platforms, internal tools, product concepts, and proof-of-intelligence systems.",
                  },
                  {
                    num: "03",
                    title: "Intelligent Interfaces",
                    text: "Designing interactions that feel clear, adaptive, useful, and human even when powered by complex systems.",
                  },
                  {
                    num: "04",
                    title: "Automation Systems",
                    text: "Creating workflows that reduce repetition, connect tools, and allow teams to move with more speed and precision.",
                  },
                  {
                    num: "05",
                    title: "Generative Engines",
                    text: "Building systems for content, research, decisions, recommendations, and adaptive communication at scale.",
                  },
                  {
                    num: "06",
                    title: "AI Integration",
                    text: "Bringing intelligence into existing products, websites, platforms, operations, and customer experiences.",
                  },
                ].map((c) => (
                  <Reveal key={c.num}>
                    <article className="min-h-[230px] p-[26px] rounded-3xl border border-(--line) bg-[rgba(255,255,255,.047)] transition-[transform,border-color,background] duration-350 ease-(--ease) hover:translate-y-[-6px] hover:border-[rgba(184,155,94,.42)] hover:bg-[rgba(184,155,94,.075)]">
                      <div className="text-[13px] uppercase tracking-[.14em] text-(--gold) mb-[34px]">
                        {c.num}
                      </div>
                      <h3 className="text-[22px] tracking-[-.02em] mb-3">{c.title}</h3>
                      <p className="text-(--muted) m-0">{c.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Container>
          </div>
        </section>

        <section id="products" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                  Products
                </div>
                <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(42px,6vw,86px)] mb-6">
                  Building for the intelligent era.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[rgba(244,240,232,.78)] text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                  The next generation of software will not only be used. It will understand, adapt,
                  generate, recommend, respond, and learn.
                </p>
                <p className="text-(--muted) text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                  Ushakkaal approaches AI as a creative and technical layer for shaping products,
                  platforms, tools, workflows, and intelligent experiences.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-[46px]">
              <div className="grid grid-cols-4 gap-px border border-(--line) rounded-[28px] overflow-hidden bg-(--line) max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
                {[
                  { num: "01", title: "AI-enabled platforms" },
                  { num: "02", title: "Internal intelligence tools" },
                  { num: "03", title: "Adaptive customer experiences" },
                  { num: "04", title: "Content and workflow engines" },
                ].map((t) => (
                  <div
                    key={t.num}
                    className="min-h-[190px] max-[620px]:min-h-[150px] p-7 bg-[rgba(255,255,255,.045)]"
                  >
                    <span className="text-[12px] uppercase tracking-[.13em] text-(--gold)">
                      {t.num}
                    </span>
                    <h3 className="mt-[52px] max-[620px]:mt-[34px] text-[21px] leading-[1.22]">
                      {t.title}
                    </h3>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="systems" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] gap-[74px] items-start max-[920px]:grid-cols-1">
              <Reveal>
                <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                  Systems
                </div>
                <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(42px,6vw,86px)] mb-6">
                  Behind every product is a system.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[rgba(244,240,232,.78)] text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                  Modern products live inside interfaces, data, workflows, automation, models, and
                  invisible technical decisions.
                </p>
                <p className="text-(--muted) text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                  Ushakkaal treats technology as part of the creative act: structured enough to
                  scale, flexible enough to evolve, and intelligent enough to serve the people
                  using it.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-4 gap-[18px] mt-12 max-[920px]:grid-cols-2 max-[620px]:grid-cols-1">
              {[
                {
                  t: "Think",
                  p: "Clarify the idea, audience, product role, and intelligence opportunity.",
                },
                {
                  t: "Architect",
                  p: "Shape the technical structure, workflows, interface logic, and AI layer.",
                },
                {
                  t: "Build",
                  p: "Create prototypes, software products, automation systems, and connected experiences.",
                },
                { t: "Refine", p: "Learn from use, improve the system, and prepare it for the next stage." },
              ].map((s) => (
                <Reveal key={s.t}>
                  <div className="pt-7 border-t border-(--line)">
                    <strong className="block text-(--gold) mb-[14px] font-medium">
                      {s.t}
                    </strong>
                    <p className="m-0 text-(--muted)">{s.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="recognition" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <Reveal>
              <div className="grid grid-cols-[.9fr_1.1fr] gap-[38px] items-center p-[54px] max-[620px]:p-[26px] rounded-[28px] border border-(--line) bg-[linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.03))] max-[920px]:grid-cols-1">
                <div className="font-serif tracking-[-.07em] leading-[.85] text-[clamp(92px,15vw,210px)] text-(--gold)">
                  100+
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                    Recognition
                  </div>
                  <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(36px,5vw,72px)] mb-5">
                    A history of work that moved people.
                  </h2>
                  <p className="text-(--muted) text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                    Recognition is not the destination. It is the evidence. A foundation of creative
                    achievement now carried into the intelligent era.
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="text-center py-[136px]">
          <Container>
            <Reveal>
              <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                Next
              </div>
              <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(42px,6vw,86px)] mb-6 max-w-[920px] mx-auto">
                The future of communication will not look like its past. But it will remember it.
              </h2>
              <p className="text-[rgba(244,240,232,.78)] text-[clamp(18px,1.45vw,22px)] max-w-[760px] mx-auto">
                Ushakkaal explores what happens when memory, craft, software, and intelligence begin
                to move together.
              </p>
              <div className="flex flex-wrap gap-[14px] justify-center mt-[34px]">
                <Button variant="primary" href="#contact" className="max-[620px]:w-full">
                  Contact
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="contact" className="py-[116px] max-[920px]:py-[86px]">
          <Container>
            <div className="grid grid-cols-[.9fr_1.1fr] gap-11 items-stretch max-[920px]:grid-cols-1">
              <Reveal>
                <div className="border border-(--line) rounded-[28px] bg-[rgba(255,255,255,.045)] p-[34px] max-[620px]:p-[26px] flex flex-col justify-between gap-[68px]">
                  <div>
                    <div className="text-[12px] uppercase tracking-[.14em] text-(--gold) mb-[18px]">
                      Contact
                    </div>
                    <h2 className="font-serif font-normal tracking-[-.042em] leading-[1.02] text-[clamp(36px,5vw,70px)] mb-6">
                      Start a conversation.
                    </h2>
                    <p className="text-(--muted) text-[clamp(18px,1.45vw,22px)] max-w-[760px]">
                      For AI products, intelligent systems, technical development, and what
                      communication becomes next.
                    </p>
                  </div>
                  <p className="text-(--muted)">hello@ushakkaal.com</p>
                </div>
              </Reveal>

              <Reveal>
                <form
                  className="border border-(--line) rounded-[28px] bg-[rgba(255,255,255,.045)] p-[34px] max-[620px]:p-[26px] grid gap-[14px]"
                  action="mailto:hello@ushakkaal.com"
                  method="post"
                  encType="text/plain"
                >
                  <div>
                    <label
                      className="text-[13px] tracking-[.08em] uppercase text-(--muted)"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-(--line) bg-[rgba(0,0,0,.22)] px-4 py-[15px] outline-none transition-[border-color,background] duration-250 ease-(--ease) focus:border-[rgba(184,155,94,.6)] focus:bg-[rgba(0,0,0,.34)]"
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[13px] tracking-[.08em] uppercase text-(--muted)"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-(--line) bg-[rgba(0,0,0,.22)] px-4 py-[15px] outline-none transition-[border-color,background] duration-250 ease-(--ease) focus:border-[rgba(184,155,94,.6)] focus:bg-[rgba(0,0,0,.34)]"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[13px] tracking-[.08em] uppercase text-(--muted)"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="mt-2 min-h-[150px] resize-y w-full rounded-2xl border border-(--line) bg-[rgba(0,0,0,.22)] px-4 py-[15px] outline-none transition-[border-color,background] duration-250 ease-(--ease) focus:border-[rgba(184,155,94,.6)] focus:bg-[rgba(0,0,0,.34)]"
                      id="message"
                      name="message"
                    />
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-2 w-fit max-[620px]:w-full"
                  >
                    Send
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
