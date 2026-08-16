"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Button } from "@workspace/ui/components/button"

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
            "-=0.15",
          )
          .to(
            taglineRef.current,
            { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
            "-=0.9",
          )
          .to(
            heroButtonsRef.current,
            { opacity: 1, duration: 0.5, ease: "expo.out" },
            "-=0.5",
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
    { scope: containerRef },
  )

  return (
    <main ref={containerRef} className="min-h-svh bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col justify-center min-h-svh px-6 py-20 max-w-2xl mx-auto">
        <p ref={introRef} className="text-muted-foreground text-sm mb-4">
          Hi, I&apos;m
        </p>
        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Benedict Taguinod.
        </h1>
        <p ref={taglineRef} className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Web + cloud engineer.{" "}
          <span className="text-foreground">Education enthusiast.</span>{" "}
          Aspiring entrepreneur.
        </p>
        <div ref={heroButtonsRef} className="flex flex-wrap gap-3">
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
            render={<a href="mailto:benedict.a.taguinod@gmail.com" />}
            variant="outline"
          >
            Email me
          </Button>
        </div>
      </section>

      {/* Current Work */}
      <section
        data-section
        className="px-6 py-20 max-w-2xl mx-auto border-t border-border"
      >
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What I&apos;m working on
        </h2>
        <p className="text-muted-foreground text-sm mb-8">Currently</p>
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-medium">Lead Engineer</span>
              <span className="text-muted-foreground">@ Conectado</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Conectado is a nonprofit building tech-powered pathways to
              economic mobility for underserved communities.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-none">
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Leading company-wide software architecture and aligning
                  long-term technical vision across all teams.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Built the Digital AI Backpack, giving bootcampers access to
                  personalized opportunities and community resources.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Self-hosted Canvas LMS and n8n, eliminating 50% of
                  instructor time through AI-enhanced automation workflows.
                </span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            Previously built cloud infrastructure and automation tooling at{" "}
            <span className="text-foreground">Hewlett Packard Enterprise</span>{" "}
            — network automation in Go, Terraform-as-a-Service, and
            Kubernetes deployment tooling.
          </p>
        </div>
      </section>

      {/* Selected Work */}
      <section
        data-section
        className="px-6 py-20 max-w-2xl mx-auto border-t border-border"
      >
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Selected Work
        </h2>
        <p className="text-muted-foreground text-sm mb-8">Professional and personal</p>
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-medium">Digital AI Backpack</span>
              <span className="text-sm text-muted-foreground">@ Conectado</span>
            </div>
            <p className="text-xs text-muted-foreground font-mono mb-3">
              JavaScript · Python · React
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground list-none">
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Led 3 teams building a platform that gives Conectado
                  bootcampers personalized access to academic and career
                  opportunities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
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
              className="inline-block mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              aibackpack.conectado.com →
            </a>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-medium">Personal Homelab</span>
              <span className="text-xs text-muted-foreground font-mono">
                Kubernetes · Prometheus · Grafana · n8n · NAS
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Provisioned a bare-metal Kubernetes cluster across 3 mini
                  PCs with a dedicated NAS for persistent storage.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground mt-0.5">—</span>
                <span>
                  Self-host production-grade services: n8n for workflow
                  automation, Prometheus and Grafana for cluster monitoring
                  and alerting.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-border">
            <a
              href="https://github.com/btaguinod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See more on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-section
        className="px-6 py-20 max-w-2xl mx-auto border-t border-border"
      >
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s build something.
        </h2>
        <p className="text-muted-foreground mb-8">
          Have an idea, a project, or just want to connect? I&apos;d love to
          hear from you.
        </p>
        <Button
          render={<a href="mailto:benedict.a.taguinod@gmail.com" />}
          size="lg"
        >
          Send me an email
        </Button>
      </section>

      <footer
        data-section
        className="px-6 py-8 max-w-2xl mx-auto border-t border-border"
      >
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Benedict Taguinod
        </p>
      </footer>
    </main>
  )
}
