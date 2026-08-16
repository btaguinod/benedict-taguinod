import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col justify-center min-h-svh px-6 py-20 max-w-2xl mx-auto">
        <p className="text-muted-foreground text-sm mb-4">Hi, I&apos;m</p>
        <h1
          className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Benedict Taguinod.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Web + cloud engineer.{" "}
          <span className="text-foreground">Education enthusiast.</span>{" "}
          Aspiring entrepreneur.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="default">
            <a
              href="https://linkedin.com/in/benedict-taguinod"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/btaguinod"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:benedict.a.taguinod@gmail.com">Email me</a>
          </Button>
        </div>
      </section>

      {/* Current Work */}
      <section className="px-6 py-20 max-w-2xl mx-auto border-t border-border">
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

      {/* Projects */}
      <section className="px-6 py-20 max-w-2xl mx-auto border-t border-border">
        <h2
          className="text-2xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Projects
        </h2>
        <p className="text-muted-foreground text-sm mb-8">Things I&apos;ve built</p>
        <div className="space-y-8">
          <div className="group">
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
      <section className="px-6 py-20 max-w-2xl mx-auto border-t border-border">
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
        <Button asChild size="lg">
          <a href="mailto:benedict.a.taguinod@gmail.com">
            Send me an email
          </a>
        </Button>
      </section>

      <footer className="px-6 py-8 max-w-2xl mx-auto border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Benedict Taguinod
        </p>
      </footer>
    </main>
  )
}
