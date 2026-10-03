"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Page() {
  const containerRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const heroButtonsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(introRef.current, { opacity: 0 })
        gsap.set(nameRef.current, { opacity: 0, y: 14 })
        gsap.set(taglineRef.current, { opacity: 0, y: 10 })
        gsap.set(heroButtonsRef.current, { opacity: 0 })

        const tl = gsap.timeline({ delay: 0.1 })

        tl.to(introRef.current, { opacity: 1, duration: 0.5, ease: "expo.out" })
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

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          gsap.from(
            section,
            {
              opacity: 0,
              y: 12,
              duration: 0.7,
              ease: "expo.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            }
          )
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
            '<!-- Direction contract — The Menu Board (seed 3cd9af30). THESIS: the café menu board — one board you scan in a single pass; refuses the dark-terminal portfolio default. OWN-WORLD: cream paper ground, espresso ink, matcha-sage fields and washes between 1px sage hairlines; Fraunces display, DM Sans voice, JetBrains mono tags; squared corners, no shadows. STORY: welcome in! I\'m greets first; a recruiter scans today\'s brew, the menu of work, prices-and-portion outcomes, and lands on the counter CTA — email, résumé, LinkedIn. FIRST VIEWPORT: full-height hero — greeting line, Fraunces espresso name, three-part tagline, row of squared buttons, all on cream. FORM: direction 4 of the grounded list (The Menu Board); seed key 3cd9af30; code-led, no comp is owed. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->',
        }}
      />
      {/* Hero — the board header */}
      <section className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-20">
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
      </section>

      {/* About — a word from the counter */}
      <section
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A word from the counter
        </h2>
        <p className="mb-4 text-muted-foreground">
          Welcome to my page! I&apos;m the engineering lead at{" "}
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
          , I developed cloud-native applications — Kubernetes, Helm, and Go
          services — for scaling enterprises.
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
            className="inline-block bg-card px-2 text-sm font-bold uppercase leading-7 tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lead Engineer, Platform &amp; Learning Systems
          </span>
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          Conectado Inc. ·{" "}
          <span className="text-foreground">2025–present</span>
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
              opportunities and resources that fit what they&apos;re
              actually after.
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
                  Led <span className="font-medium text-foreground">3 teams</span>{" "}
                  building the platform bootcampers use to find academic and
                  career opportunities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">—</span>
                <span>
                  Designed and built the core application — students match
                  with scholarships, jobs, and community resources.
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
                  <span className="font-medium text-foreground">4 mini PCs</span>,
                  Ansible configures the Docker Swarm cluster on top, and a
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
          Let&apos;s talk.
        </h2>
        <p className="mb-8 text-muted-foreground">
          if you want to chat, my inbox is open!
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