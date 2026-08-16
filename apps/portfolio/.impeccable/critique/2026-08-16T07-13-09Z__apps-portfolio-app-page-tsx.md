---
target: apps/portfolio/app/page.tsx
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-16T07-13-09Z
slug: apps-portfolio-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No scroll progress indicator; otherwise static page handles well |
| 2 | Match System / Real World | 4 | Appropriate technical vocabulary; clean plain English throughout |
| 3 | User Control and Freedom | 3 | No anchor IDs — recruiter can't jump to or share a specific section |
| 4 | Consistency and Standards | 4 | Internally consistent spacing, hierarchy, and pattern reuse |
| 5 | Error Prevention | 3 | mailto: contact links fail silently without configured mail client |
| 6 | Recognition Rather Than Recall | 3 | No persistent nav; no resume download; bottom CTA relies on memory of hero button |
| 7 | Flexibility and Efficiency | n/a | Experience mode |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, but "Currently" subtitle redundant; Projects section thin with one entry |
| 9 | Error Recovery | 2 | Both email CTAs use mailto: with no fallback; email address never appears as copyable text |
| 10 | Help and Documentation | n/a | Experience mode |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict

Partially authored; structurally category-interchangeable. Typography is the most distinctive element: Fraunces with SOFT/WONK/opsz variable axes, three-stack (display serif + humanist sans + monospace), Catppuccin Mocha palette. But the structural composition — centered single-column max-w-2xl, thin horizontal rule dividers, em-dash bullet lists — is the most common pattern in engineer portfolios. The positioning claim (full-stack infra + mission) must be reverse-engineered from reading two sections of body copy; it is never stated.

Deterministic scan: exit code 0, zero findings. Codebase is technically clean. All contrast pairs pass WCAG AA; muted/muted-foreground is borderline at small sizes but passes.

## Overall Impression

Fundamentally solid bones — typography and Current Work copy do real work. But the page fails at its most critical job: giving a recruiter something concrete to hold after 90 seconds. Hero offers three vague noun phrases instead of a claim. Projects section has one entry with setup facts instead of engineering judgment. Ending ("Let's build something") undercuts the grounded voice built everywhere else.

## What's Working

1. Typography system: Fraunces variable axes genuinely distinctive; three-font stack coherent and considered.
2. Current Work copy: Named systems, real numbers (50%, 60%, 3 teams), mission framing emerges naturally. Best section.
3. Catppuccin Mocha as identity signal: Recognizable in developer circles, non-generic primary token, deliberate micro-decisions in scrollbar and selection color.

## Priority Issues

**[P1] Projects section critically thin**
One entry (Personal Homelab), two setup bullets, no links, no architecture rationale, "See more on GitHub →" fallback. Terraform-as-a-Service, Digital AI Backpack, HPE Helm Chart tool — all invisible. Recruiter draws wrong seniority conclusion.
Fix: Add 2–3 entries. Prioritize TaaS (complex platform, 60%), Digital AI Backpack (product thinking + leadership), homelab with architecture rationale.
Command: /impeccable shape

**[P2] Hero has no hook — positioning claim never stated**
"Web + cloud engineer. Education enthusiast. Aspiring entrepreneur." Three vague signals. Recruiter gets nothing to hold after 30 seconds in the hero.
Fix: One sentence that encodes the actual claim. Not a noun-phrase list — a statement.
Command: /impeccable clarify

**[P2] CTA copy contradicts brand voice**
"Let's build something" / "I'd love to hear from you" — startup boilerplate. Contradicts PRODUCT.md's "direct, grounded, no marketing language" voice. Last impression is the lasting one.
Fix: State what's on offer directly. Visible email address + what Benedict is currently evaluating.
Command: /impeccable clarify

**[P2] No resume download; email links fail silently**
No resume link. Both email CTAs use mailto: — fails on corporate Windows, mobile Gmail-in-browser. Email address never appears as copyable text. Recruiter who wants to act is blocked.
Fix: PDF resume download link. Plain visible email address alongside button.
Command: /impeccable harden

**[P2] No title, meta description, or OG tags**
layout.tsx has no metadata. Link previews in Slack/email show nothing.
Fix: export const metadata in layout.tsx with title, description, og fields.
Command: /impeccable harden

## Persona Red Flags

**Jordan (First-Timer recruiter):** No company/school in hero → must scroll. One project entry → interprets as junior. No resume link. "Email me" fails silently on corporate Windows. Leaves without resume, with seniority uncertainty, with broken contact path.

**Casey (Mobile recruiter between calls):** "See more on GitHub →" — won't open GitHub mid-screen. "Send me an email" on iOS without native mail: nothing happens. No resume. No email sent. Forgotten.

**Marcus (Senior EM, 90-second eval):** Slows at Current Work (real signals). Projects: setup facts only, no architecture rationale. Can't determine architect vs. executor from page. Verdict: "Strong senior IC, probably. Would need a screen."

## Minor Observations

- "Currently" subtitle redundant under "What I'm working on"
- style={{ fontFamily }} inline on every h2 — should be global CSS
- group class on Projects div with no group-hover: styles — dead CSS (Assessment B confirmed)
- :root and .dark identical token sets — ThemeProvider exists but changes nothing visible
- "See more on GitHub →" missing rel="noopener noreferrer" (Assessment B flagged)
- No id attributes on section elements — no anchor links possible
- "Things I've built" register mismatch — casual against otherwise grounded voice
- No OG/meta tags — link previews blank when URL is shared

## Questions to Consider

1. What if the hero opened with the claim instead of the introduction?
2. What if each project entry had one sentence of architecture rationale?
3. What if the CTA stated exactly what Benedict is looking for?
