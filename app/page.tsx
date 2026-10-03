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
        gsap.set(nameRef.current, {
          opacity: 0,
          fontVariationSettings: '"WONK" 1, "SOFT" 0, "opsz" 144',
        })
        gsap.set(taglineRef.current, { opacity: 0, y: 10 })
        gsap.set(heroButtonsRef.current, { opacity: 0 })

        const tl = gsap.timeline({ delay: 0.1 })

        tl.to(introRef.current, { opacity: 1, duration: 0.5, ease: "expo.out" })
          .to(
            nameRef.current,
            {
              opacity: 1,
              fontVariationSettings: '"WONK" 0, "SOFT" 100, "opsz" 144',
              duration: 1.4,
              ease: "expo.out",
            },
            "-=0.15"
          )
          .to(
            taglineRef.current,
            { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
            "-=0.9"
          )
          .to(
            heroButtonsRef.current,
            { opacity: 1, duration: 0.5, ease: "expo.out" },
            "-=0.5"
          )

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          gsap.from(section, {
            opacity: 0,
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
      {/* Hero */}
      <section className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-20">
        <p
          ref={introRef}
          data-js-hide
          className="mb-4 text-sm text-muted-foreground"
        >
          Hi, I&apos;m
        </p>
        <h1
          ref={nameRef}
          data-js-hide
          className="mb-6 text-5xl leading-tight font-bold sm:text-6xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontVariationSettings: '"WONK" 0, "SOFT" 100, "opsz" 144',
          }}
        >
          Benedict Taguinod.
        </h1>
        <p
          ref={taglineRef}
          data-js-hide
          className="mb-8 text-xl leading-relaxed text-muted-foreground"
        >
          web + cloud engineer.{" "}
          <span className="text-foreground">education enthusiast.</span>{" "}
          aspiring entrepreneur.
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
            Email me
          </Button>
        </div>
      </section>

      {/* Current Work */}
      <section
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What I&apos;m working on
        </h2>
        <div className="space-y-6">
          <div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="font-medium">
                Lead Engineer, Platform & Learning Systems
              </span>
              <span className="text-muted-foreground">
                @ Conectado · 2025–present
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Conectado is a nonprofit building tech-powered pathways to
              economic mobility for underserved communities.
            </p>
            <ul className="list-none space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  Leading company-wide software architecture and aligning
                  long-term technical vision across all teams.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  Built the AI Opportunity Backpack, giving bootcampers access
                  to personalized opportunities and community resources.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  Self-hosted Canvas LMS and n8n, cutting{" "}
                  <span className="text-foreground">
                    50% of instructor time
                  </span>{" "}
                  through AI-enhanced automation workflows.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="font-medium">Cloud Developer</span>
              <span className="text-muted-foreground">
                @ Hewlett Packard Enterprise · 2023–2025
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Two years of production cloud infrastructure work: a network
              automation service in Go for Private Cloud Business Edition, and
              Terraform-as-a-Service — a Go application that automates{" "}
              <span className="text-foreground">
                60% of the Terraform deployment process
              </span>{" "}
              for internal developers.
            </p>
            <p className="text-sm text-muted-foreground">
              Started at HPE as a software engineering intern in 2022, building
              Helm tooling in Go + React. BS EECS from UC Berkeley, 2023.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section
        data-section
        className="mx-auto max-w-2xl border-t border-border px-6 py-20"
      >
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Selected Work
        </h2>
        <div className="space-y-8">
          <div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="font-medium">AI Opportunity Backpack</span>
              <span className="font-mono text-xs text-muted-foreground">
                In development · JavaScript · Python · React
              </span>
            </div>
            <ul className="list-none space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  Led <span className="text-foreground">3 teams</span> building
                  a platform that gives Conectado bootcampers personalized
                  access to academic and career opportunities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  Designed and implemented the core application, connecting
                  students to scholarships, jobs, and community resources.
                </span>
              </li>
            </ul>
            <a
              href="https://aibackpack.conectado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              aibackpack.conectado.com →
            </a>
          </div>

          <div>
            <div className="mb-1 flex items-baseline gap-2">
              <span className="font-medium">Personal Homelab</span>
              <span className="font-mono text-xs text-muted-foreground">
                Terraform · Ansible · Proxmox · Docker Swarm · TrueNAS · Prometheus · Grafana
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  A production-parity lab modeled on the cloud environments I
                  built at HPE: virtualization, Kubernetes, network storage, and
                  observability — every layer, owned end-to-end.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
                <span>
                  The entire stack is code: Terraform provisions Proxmox VMs
                  across <span className="text-foreground">4 mini PCs</span>, Ansible
                  configures the Docker Swarm cluster on top, and a TrueNAS
                  server backs persistent volumes — reproducible from zero on
                  new hardware.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-foreground">—</span>
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
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              github.com/btaguinod/homelab →
            </a>
          </div>

          <div className="border-t border-border pt-4">
            <a
              href="https://github.com/btaguinod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              See more on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Email me
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
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Benedict Taguinod
          </p>
          <a
            href="/resume"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            résumé →
          </a>
        </div>
      </footer>
    </main>
  )
}
