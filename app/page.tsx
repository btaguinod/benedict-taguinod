"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Page() {
  const containerRef = useRef<HTMLElement>(null)
  const mugRef = useRef<SVGSVGElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const heroButtonsRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLAnchorElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(mugRef.current, { opacity: 0, scale: 0.8 })
        gsap.set(introRef.current, { opacity: 0 })
        gsap.set(nameRef.current, { opacity: 0, y: 14 })
        gsap.set(taglineRef.current, { opacity: 0, y: 10 })
        gsap.set(heroButtonsRef.current, { opacity: 0 })
        gsap.set(scrollCueRef.current, { opacity: 0 })

        const tl = gsap.timeline({ delay: 0.1 })

        tl.to(mugRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        })
          .to(introRef.current, { opacity: 1, duration: 0.5, ease: "expo.out" })
          .to(
            nameRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "expo.out",
            },
            "-=0.15"
          )
          .to(
            taglineRef.current,
            { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
            "-=0.6"
          )
          .to(
            heroButtonsRef.current,
            { opacity: 1, duration: 0.5, ease: "expo.out" },
            "-=0.4"
          )
          .to(
            scrollCueRef.current,
            { opacity: 1, duration: 0.7, ease: "expo.out" },
            "+=0.25"
          )

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          gsap.from(section, {
            opacity: 0,
            y: 12,
            duration: 0.7,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          })
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <main
      ref={containerRef}
      className="min-h-svh bg-background text-foreground"
    >
      <span
        hidden
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html:
            "<!-- Direction contract — The Menu Board (seed 3cd9af30). THESIS: the café menu board — one board you scan in a single pass; refuses the dark-terminal portfolio default. OWN-WORLD: cream paper ground, espresso ink, matcha-sage fields and washes between 1px sage hairlines; Fraunces display, DM Sans voice, JetBrains mono tags; squared corners, no shadows. STORY: welcome in! I'm greets first; a recruiter scans today's brew, the menu of work, prices-and-portion outcomes, and lands on the counter CTA — email, résumé, LinkedIn. FIRST VIEWPORT: full-height hero — greeting line, Fraunces espresso name, three-part tagline, row of squared buttons, all on cream. FORM: direction 4 of the grounded list (The Menu Board); seed key 3cd9af30; code-led, no comp is owed. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->",
        }}
      />
      {/* Hero — the board header */}
      <section className="relative mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-20">
        {/* {(
          <svg
            ref={mugRef}
            data-js-hide-mug
            role="img"
            aria-label="Steaming mug with code braces"
            className="mb-5 size-16"
            viewBox="-2.5 -2.5 105 105"
            fill="oklch(0.398 0.094 49)"
          >
            <path d="m45.301 29.102c-0.30078 0-0.69922-0.10156-1-0.30078-1.1016-0.60156-1.3984-1.8984-0.89844-2.8984 0.89844-1.6992 1.1992-3.1992 0.89844-4.5-0.30078-1.3008-1.3008-2.1016-2.3984-3.1016-1.3984-1.1992-3.1992-2.8008-3.1016-5.3984 0-1.3008 0.5-2.1992 0.89844-3 0.39844-0.69922 0.69922-1.3008 0.69922-2.3984 0-0.69922-0.10156-1.5-0.30078-2.1992-0.30078-1.1016 0.30078-2.3008 1.5-2.6992 1.1016-0.30078 2.3984 0.30078 2.6992 1.5s0.5 2.3984 0.5 3.5c-0.10156 2.1016-0.69922 3.3008-1.1992 4.3008-0.30078 0.60156-0.39844 0.80078-0.39844 1.1016 0 0.60156 0.5 1 1.6016 2.1016 1.3984 1.1992 3.1016 2.6992 3.6992 5.3008 0.60156 2.3008 0.19922 4.8984-1.3008 7.6016-0.30078 0.6875-1.0977 1.0898-1.8984 1.0898z" />
            <path d="m35 28.898c-0.30078 0-0.60156-0.10156-1-0.19922-1.1016-0.5-1.5-1.8008-1-2.8984 0.69922-1.5 0.89844-2.6992 0.60156-3.6016-0.19922-0.60156-0.60156-1.1016-1.1016-1.6992-0.89844-1.1016-2-2.3984-1.8984-4.5 0-1 0.30078-2 0.89844-2.8984 0.60156-1 2-1.3008 3-0.69922 1 0.60156 1.3008 2 0.69922 3-0.19922 0.30078-0.30078 0.5-0.30078 0.80078 0 0.39844 0.30078 0.80078 0.89844 1.6016 0.60156 0.80078 1.3984 1.6992 1.8008 3 0.69922 2 0.39844 4.3984-0.80078 7-0.29688 0.59375-0.99609 1.0938-1.7969 1.0938z" />
            <path d="m73.102 43.5h-2.6992v-3.1992c0-2.6992-2.8984-4.5-9.6016-5.6992-5.1992-1-12-1.5-19.199-1.5-4.1016 0-8 0.19922-11.699 0.5-0.5 0-1 0.10156-1.5 0.10156-0.69922 0.10156-1.3008 0.10156-1.8984 0.19922-1.1016 0.10156-2.1016 0.30078-3.1016 0.5-1.1992 0.19922-2 1.3008-1.8008 2.5 0.19922 1.1992 1.3008 2 2.5 1.8008 0.89844-0.19922 1.8984-0.30078 2.8984-0.39844 0.60156-0.10156 1.1992-0.10156 1.8008-0.19922 0.5-0.10156 0.89844-0.10156 1.3984-0.10156 3.5-0.30078 7.3984-0.5 11.301-0.5 12.898 0 21 1.6992 23.699 2.8984-2.6992 1.1992-10.801 2.8984-23.699 2.8984-13 0-21.199-1.6992-23.801-3 0.69922-0.69922 0.80078-1.8008 0.30078-2.6016-0.60156-1-1.8984-1.3984-3-0.80078-0.30078 0.19922-0.60156 0.39844-0.89844 0.60156-1.1992 1-1.3984 2.1016-1.3984 2.8008v44.5c0 8.3008 14.801 12.699 28.801 12.699 13.996 0 28.797-4.5 28.797-12.699v-3.1992h2.6992c7.8008 0 14.199-6.3008 14.199-14.199v-9.8008c0-7.7031-6.3008-14.102-14.098-14.102zm-42.703 27.102c1.1016 0.80078 1.3984 2.3008 0.60156 3.3984-0.5 0.69922-1.1992 1-2 1-0.5 0-1-0.19922-1.3984-0.5l-6.8984-4.8984c-0.69922-0.5-1-1.1992-1-2.1016 0-0.80078 0.39844-1.6016 1.1016-2l6.8984-4.3984c1.1016-0.69922 2.6992-0.39844 3.3984 0.69922 0.69922 1.1016 0.39844 2.6992-0.69922 3.3984l-3.8008 2.3984zm17.402-9.6016-9.3008 16.301c-0.5 0.80078-1.3008 1.1992-2.1016 1.1992-0.39844 0-0.80078-0.10156-1.1992-0.30078-1.1992-0.69922-1.6016-2.1992-0.89844-3.3984l9.3008-16.301c0.69922-1.1992 2.1992-1.6016 3.3984-0.89844 1.1016 0.69922 1.5 2.1992 0.80078 3.3984zm13.398 9.3008-6.8984 4.3984c-0.39844 0.30078-0.89844 0.39844-1.3008 0.39844-0.80078 0-1.6016-0.39844-2.1016-1.1016-0.69922-1.1016-0.39844-2.6992 0.69922-3.3984l3.8008-2.3984-3.8984-2.8008c-1.1016-0.80078-1.3984-2.3008-0.60156-3.3984 0.80078-1.1016 2.3008-1.3984 3.3984-0.60156l6.8984 4.8984c0.69922 0.5 1 1.1992 1 2.1016 0.10547 0.70312-0.29687 1.4023-0.99609 1.9023zm17.801-2.8008c0 3.3008-2.6992 5.8984-5.8984 5.8984h-2.6992l-0.003906-21.699h2.6992c3.3008 0 5.8984 2.6992 5.8984 5.8984z" />
          </svg>
        )} */}
        <p
          ref={introRef}
          data-js-hide
          className="mb-4 font-mono text-sm text-muted-foreground"
        >
          welcome in! I&apos;m
        </p>
        <h1
          ref={nameRef}
          data-js-hide-name
          className="mb-6 text-5xl leading-tight font-bold text-[oklch(0.375_0.052_64)] sm:text-6xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontVariationSettings: `"WONK" 0, "SOFT" 100, "opsz" 144`,
          }}
        >
          Benedict Taguinod
        </h1>
        <p
          ref={taglineRef}
          data-js-hide
          className="mb-8 text-xl leading-relaxed text-muted-foreground"
        >
          serving{" "}
          <span className="text-foreground">engineering, education</span>, and
          everything in between
        </p>
        <div ref={heroButtonsRef} data-js-hide className="flex flex-wrap gap-3">
          <Button
            render={
              <a
                href="https://linkedin.com/in/benedict-taguinod"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="default"
          >
            LinkedIn
          </Button>
          <Button
            render={
              <a
                href="https://github.com/btaguinod"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
          >
            GitHub
          </Button>
          <Button
            render={
              <a href="mailto:benedict.a.taguinod@gmail.com?subject=Getting%20in%20touch" />
            }
            variant="outline"
          >
            Email
          </Button>
        </div>
        <a
          ref={scrollCueRef}
          href="#about"
          data-js-hide
          className="absolute inset-x-6 bottom-8 flex w-fit flex-col gap-1.5 font-mono text-xs text-muted-foreground"
        >
          <span className="flex w-fit items-center gap-2">
            check out the menu!
            <span aria-hidden="true" className="inline-flex">
              <ArrowDown className="size-3.5" strokeWidth={1.5} />
            </span>
          </span>
          <span className="text-muted-foreground/70">
            (about me and my work)
          </span>
        </a>
      </section>

      {/* About — a word from the counter */}
      <section
        id="about"
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A word from the counter
        </h2>
        <p className="-mt-6 mb-6 font-mono text-xs text-muted-foreground">
          (about me)
        </p>
        <p className="mb-4 text-muted-foreground">
          Thanks for coming in!
        </p>
        <p className="mb-4 text-muted-foreground">
          I lead engineering at{" "}
          <a
            href="#connectado"
            className="text-secondary underline decoration-border underline-offset-4 transition-colors hover:decoration-secondary"
          >
            Conectado
          </a>
          , empowering students to succeed in their classrooms and careers.
        </p>
        <p className="mb-4 text-muted-foreground">
          In my past work at{" "}
          <a
            href="#work"
            className="text-secondary underline decoration-border underline-offset-4 transition-colors hover:decoration-secondary"
          >
            HPE
          </a>
          , I developed cloud-native applications for scaling enterprises.
        </p>
        <p className="text-muted-foreground">
          I love learning and I love building. Right now, my specialties are
          websites, automations, and infrastructure. Have a look around to see
          some of my work!
        </p>
      </section>

      {/* Today's brew — the special */}
      <section
        id="connectado"
        data-section
        className="mx-auto max-w-2xl scroll-mt-8 border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Today&apos;s brew
        </h2>
        <p className="-mt-6 mb-6 font-mono text-xs text-muted-foreground">
          (current work)
        </p>
        <div className="mb-4 flex items-baseline gap-2">
          <span
            className="inline-block bg-card px-2 text-sm leading-7 font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lead Engineer, Platform &amp; Learning Systems
          </span>
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          Conectado Inc. · <span className="text-foreground">2025–present</span>
        </p>
        <p className="mt-4 mb-4 text-sm text-muted-foreground">
          Conectado builds tech-powered pathways to economic mobility.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="mt-0.5 text-accent-foreground">—</span>
            <span>
              Set the software architecture and technical direction for all
              engineering teams.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5">—</span>
            <span>
              Built the AI Opportunity Backpack: bootcampers match with
              opportunities and resources that fit what they&apos;re actually
              after.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-0.5">—</span>
            <span>
              Self-hosted Canvas LMS and n8n, cutting{" "}
              <span className="font-medium text-foreground">
                50% of instructor time
              </span>{" "}
              through AI-enhanced automation workflows.
            </span>
          </li>
        </ul>
      </section>

      {/* The menu — previous work */}
      <section
        id="work"
        data-section
        className="mx-auto max-w-2xl scroll-mt-8 border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          On the menu
        </h2>
        <p className="-mt-6 mb-6 font-mono text-xs text-muted-foreground">
          (selected work)
        </p>
        <div className="space-y-8">
          <div>
            <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
              <span className="font-medium">Cloud Developer</span>
              <span className="font-mono text-xs text-muted-foreground">
                @ Hewlett Packard Enterprise · 2023–2025
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Two years of production cloud infrastructure work: a network
              automation service in Go for Private Cloud Business Edition, and
              Terraform-as-a-Service — a Go application that automates{" "}
              <span className="font-medium text-foreground">
                60% of the Terraform deployment process
              </span>{" "}
              for internal developers.
            </p>
            <p className="text-sm text-muted-foreground">
              Started at HPE as a software engineering intern in 2022, building
              Helm tooling in Go + React. BS EECS from UC Berkeley, 2023.
            </p>
          </div>

          <div>
            <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
              <span className="font-medium">AI Opportunity Backpack</span>
              <span className="font-mono text-xs text-muted-foreground">
                In development · JavaScript · Python · React
              </span>
            </div>
            <ul className="list-none space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  Led{" "}
                  <span className="font-medium text-foreground">3 teams</span>{" "}
                  building the platform bootcampers use to find academic and
                  career opportunities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  Designed and built the core application — students match with
                  scholarships, jobs, and community resources.
                </span>
              </li>
            </ul>
            <a
              href="https://aibackpack.conectado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-secondary underline decoration-border underline-offset-4 transition-colors hover:decoration-secondary"
            >
              aibackpack.conectado.com →
            </a>
          </div>

          <div>
            <div className="mb-1 flex flex-wrap items-baseline gap-x-2">
              <span className="font-medium">Personal Homelab</span>
              <span className="font-mono text-xs text-muted-foreground">
                Terraform · Ansible · Proxmox · Docker Swarm · TrueNAS ·
                Prometheus · Grafana
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  A production-parity lab modeled on the cloud environments I
                  built at HPE: virtualization, Kubernetes, network storage, and
                  observability — every layer, owned end-to-end.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  The entire stack is code: Terraform provisions Proxmox VMs
                  across{" "}
                  <span className="font-medium text-foreground">
                    4 mini PCs
                  </span>
                  , Ansible configures the Docker Swarm cluster on top, and a
                  TrueNAS server backs persistent volumes — reproducible from
                  zero on new hardware.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  Self-host production-grade services: n8n for workflow
                  automation, Prometheus and Grafana for monitoring and
                  alerting.
                </span>
              </li>
            </ul>
            <a
              href="https://github.com/btaguinod/homelab"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-secondary underline decoration-border underline-offset-4 transition-colors hover:decoration-secondary"
            >
              github.com/btaguinod/homelab →
            </a>
          </div>

          <div className="border-t border-border pt-4">
            <a
              href="https://github.com/btaguinod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary underline decoration-border underline-offset-4 transition-colors hover:decoration-secondary"
            >
              See more on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* The counter — CTA */}
      <section
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What can I get for you?
        </h2>
        <p className="mb-8 text-muted-foreground">
          my inbox is open, say hi anytime!
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            render={
              <a href="mailto:benedict.a.taguinod@gmail.com?subject=Getting%20in%20touch" />
            }
            size="lg"
          >
            Email
          </Button>
          <Button render={<a href="/resume" />} variant="outline" size="lg">
            Résumé
          </Button>
          <Button
            render={
              <a
                href="https://linkedin.com/in/benedict-taguinod"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
          >
            LinkedIn
          </Button>
        </div>
      </section>

      <footer
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Benedict Taguinod
          </p>
          <a
            href="/resume"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            résumé →
          </a>
        </div>
      </footer>
    </main>
  )
}
