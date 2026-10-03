---
name: Benedict Taguinod — Portfolio
description: A dark, calm, Catppuccin-soft portfolio where the person and the work lead and the interface recedes.
colors:
  primary: "oklch(0.741 0.183 300)"
  primary-foreground: "oklch(0.088 0.020 274)"
  background: "oklch(0.156 0.030 274)"
  foreground: "oklch(0.869 0.064 263)"
  card: "oklch(0.122 0.026 274)"
  card-foreground: "oklch(0.869 0.064 263)"
  secondary: "oklch(0.314 0.028 270)"
  secondary-foreground: "oklch(0.869 0.064 263)"
  muted: "oklch(0.234 0.025 273)"
  muted-foreground: "oklch(0.723 0.049 262)"
  destructive: "oklch(0.764 0.149 358)"
  border: "oklch(0.314 0.028 270)"
  ring: "oklch(0.741 0.183 300)"
  selection: "oklch(0.741 0.183 300 / 30%)"
  scrollbar-track: "oklch(0.122 0.026 274)"
  scrollbar-thumb: "oklch(0.403 0.033 268)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
    fontVariation: '"WONK" 0, "SOFT" 100, "opsz" 144'
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.1em"
    fontFeature: "upper"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  none: "0"
  scrollbar: "4px"
  icon: "5px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  section-y: "80px"
  gutter: "24px"
  measure: "42rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "oklch(0.741 0.183 300 / 80%)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-outline-hover:
    backgroundColor: "{colors.secondary}"
  button-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 32px"
---

# Design System: Benedict Taguinod — Portfolio

## Overview

**Creative North Star: "The Quiet Backbone"**

This system renders an engineer who is helpful and soft-spoken while carrying
real infrastructure weight. The interface recedes: a deep, low-chroma
blue-black canvas (Catppuccin Mocha at heart) holds one lavender accent, and
the reader meets the person, not the chrome. Minimalism here is not emptiness —
it isolates. Every stripped-away ornament raises the signal of what remains: a
name set in a warm variable serif, a tagline in the maintainer's own lowercase
voice, real numbers from real work.

The palette is soft but never sleepy. Catppuccin's softened-dark character —
a lavender voice on a night-blue page, grays that lean warm rather than dead —
is the emotional register: calm, professional, quietly distinct. Depth is
earned with tonal layering and hairline rules, not shadows; motion is brief
fades that settle rather than perform. The signature move is a variable-font
hero: Fraunces arriving with a `WONK 1 → 0` and `SOFT 0 → 100` axis animation,
the serif literally relaxing into place as the page loads.

The incumbent components are squared (0px radius) because nothing here needs
to feel bubbly; restraint is the feel of buttons, cards, and links — refined,
not tactile. The person and the work are the flair. When more visual voice is
wanted later, it must be earned the same way: isolate one impactful element,
rather than adding ambient decoration.

**Key Characteristics:**

- Dark-first, effectively dark-only; Catppuccin Mocha-derived OKLCH palette
- One lavender accent, used sparingly on primary actions
- Squared components (no border radius), uppercase button labels; no kickers or eyebrows — headings carry their own weight
- Fraunces display serif with variable-axis animation; DM Sans body; JetBrains Mono for tech-stack tags
- Hairline `border-t` section separators on a single narrow measure (~672px)
- GSAP fade/settle motion, fully disabled under `prefers-reduced-motion`

## Colors

A softened-dark scheme: one lavender voice over deep blue-black, with warm
gray-blue structure. Everything is low-noise so the accent stays rare.

### Primary

- **Lavender Aura** (`oklch(0.741 0.183 300)`): The single accent. Primary
  button fill, focus rings, selection wash (30% alpha), scrollbar thumb hover.
  Rarity is the point — it marks "action" and nothing else.

### Secondary (optional; omit if the project has only one accent)

- **Smoke Shell** (`oklch(0.314 0.028 270)`): Elevated interactive surface —
  hover fills on outline/ghost buttons, border and input stroke color. Reads
  as "one step closer to the reader" gray.

### Tertiary (optional)

- **Grafana Green** (`oklch(0.858 0.142 143)`), **Terminal Amber**
  (`oklch(0.911 0.092 75)`), **HPE Cyan** (`oklch(0.744 0.123 253)`), **Soft
  Rose** (`oklch(0.764 0.149 358)`): chart-1 through chart-5. Reserved for
  future data-viz (monitoring-flavored). Not for UI chrome; Rose doubles as
  the semantic destructive color.

### Neutral

- **Deep Mocha** (`oklch(0.156 0.030 274)`): Page background. The night canvas.
- **Night Cocoa** (`oklch(0.122 0.026 274)`): Card/popover wells slightly
  darker than the page — inverse-elevation tonal step.
- **Moonlit Slate** (`oklch(0.869 0.064 263)`): Primary text.
- **Ash Mist** (`oklch(0.723 0.049 262)`): Secondary/inactive text, list
  bodies, taglines' dimmed halves.
- **Idle Gray** (`oklch(0.234 0.025 273)`): Muted fills, hover washes.
- **Hairline** (`oklch(0.314 0.028 270)`): 1px section separators, borders.
- **Primary Ink** (`oklch(0.088 0.020 274)`): Text on Lavender Aura.
- **Thumb Gray** (`oklch(0.403 0.033 268)`): Scrollbar thumb, mid-step gray.

### Named Rules (optional, powerful)

**The One Voice Rule.** Lavender Aura is used on ≤10% of any viewport. It
marks action (primary button, focus ring, selection); if a static element
competes for it, the element is wrong.
**The Warmer-Grays Rule.** All neutrals lean blue-violet, never pure gray
(0 chroma). The softness is in the temperature.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback) — variable axes
`opsz`, `SOFT`, `WONK`
**Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** A warm variable serif that relaxes into place over quiet
utilitarian sans and mono. Fraunces carries the person; DM Sans and JetBrains
Mono carry the work.

### Hierarchy

- **Display** (700, clamp(3rem–3.75rem), 1.25): The hero name only. Loads
  animated from `WONK 1/SOFT 0` to `WONK 0/SOFT 100` at `opsz 144`.
- **Headline** (600, 1.5rem, 1.3): Section titles ("Selected Work", "Let's
  build something.").
- **Title** (500, 0.875–1rem, 1.5): Entry names within sections ("Lead
  Engineer", "AI Opportunity Backpack").
- **Body** (400, 1rem–0.875rem, 1.625): Taglines and entry descriptions,
  bounded by the ~672px measure.
- **Label** (600, 0.75rem, 0.1em tracking, uppercase): All button text
  ("LinkedIn", "Email me", "Résumé").
- **Mono Label** (400, 0.75rem): Tech-stack tags ("Kubernetes · Prometheus ·
  Grafana"), separator-dot form.

### Named Rules (optional)

**The Relaxing Serif Rule.** Fraunces renders with `SOFT 100, WONK 0` at
rest. Axis flips are entrance animation only, never a resting state.
**The Lowercase Voice Rule.** Kickers and taglines follow the brand's
lowercase voice when echoing the personal tagline; buttons stay uppercase.

## Layout

Single narrow measure, ~672px (`max-w-2xl` ≈ 42rem), center-aligned, with 24px
gutters (`px-6`) and generous 80px vertical rhythm (`py-20`) per section.
Full-height hero (100svh) starts the scroll; every later section is a short
chapter separated by a 1px `border-t` hairline — no cards, no columns, one
reading column. Density is air: whitespace does the isolating that the North
Star demands. Responsive behavior collapses gracefully — type scale steps
down (name 5xl→6xl at `sm`), and buttons wrap (`flex-wrap`). No grid system;
if a future two-column need appears, it must justify itself against the
single-measure doctrine.

## Elevation & Depth

Depth is tonal, not shadowed: the page is Deep Mocha, interactive surfaces
step _lighter_ (Smoke Shell) on hover, while dedicated well surfaces
(Night Cocoa, used by popovers/cards) step _darker_. Two 1px hairline tokens —
Hairline and border — draw section separators and control outlines. There are
**no box-shadows anywhere** in the incumbent system; do not introduce them
casually. If a future "pop" moment needs lift, prefer a Lavender Aura ring
or a tonal step before a shadow; if shadows ever arrive, they must be
declared in this section first.

### Named Rules (optional)

**The Flat-By-Default Rule.** Surfaces are flat at rest; state is expressed
with tonal steps and hairlines, not elevation. Any shadow must be declared
here first.

## Shapes

Everything squared. Component corners are 0px radius (buttons `rounded-none`);
the only rounded things are utility chrome: 4px scrollbar thumb, 5px favicon
tile. Hairline rules (1px, Hairline gray) are the structural motif — full
section-width dividers and focus rings. Inputs, when they arrive, follow the
same squared form. This squared stance is what keeps the terminal-engineer
character inside the soft palette: edges square, colors soft.

## Components

### Buttons

- **Shape:** Squared corners (0 radius), thin transparent border at rest.
- **Primary:** Lavender Aura fill, Primary Ink text, uppercase 0.75rem/600
  with 0.1em tracking, 40px tall × 24px horizontal padding.
- **Hover / Focus:** Primary dims to 80% alpha; outline/ghost fill with
  Smoke Shell. Focus: 1px Lavender Aura border + 2px ring at 30% alpha;
  buttons dip 1px on press. Transition covers all properties briefly.
- **Outline:** Transparent over Deep Mocha, Moonlit Slate text, Hairline
  border; on dark input surfaces, hover wash uses `--input` at 30%.
- **Ghost:** No border; hover washes Idle Gray, text brightens.
- **Sizes:** xs 28px, sm/sm-default 36–40px, lg 44px tall; proportional
  horizontal padding (12–32px).

### Chips

- **Style:** None as components, but the recurring chip _pattern_ is plain
  mono text with middot separators (`JetBrains Mono 0.75rem`, Ash Mist).
- **State:** Static tags only.

### Cards / Containers

- Not used on the page. When they arrive: Night Cocoa well, Hairline 1px
  border, squared corners, no shadow, 16–24px internal padding.

### Inputs / Fields

- None on the page. Incumbent token (`--input`) equals Hairline; squared,
  1px stroke, wash on focus per buttons.

### Navigation

- None: a single scrolling page with a full-viewport hero. Anchor behavior
  only. Keyboard "d" toggles theme (dark↔light), though light is not
  implemented.

### Signature Component

- **The Relaxing Hero:** The `h1` name animates its Fraunces variable axes
  (`WONK 1→0`, `SOFT 0→100`, `opsz 144`) over 1.4s with `expo.out` easing as
  the entrance timeline (staggered intro → name → tagline → buttons, ~0.1s
  overlap) plays; sections fade in once on scroll (`top 88%`, once). All
  motion is inside a `matchMedia("(prefers-reduced-motion: no-preference)")`
  guard.

## Do's and Don'ts

### Do:

- **Do** keep the accent rare (The One Voice Rule): Lavender Aura only on
  primary actions, focus rings, and selection.
- **Do** use hairlines (1px, `--border`) and tonal steps (Night Cocoa /
  Smoke Shell / Deep Mocha) for all structure and depth.
- **Do** set all display text in Fraunces with `SOFT 100, WONK 0` at rest,
  and animate axes only as entrance.
- **Do** keep whitespace as the isolation device: single ~672px measure,
  80px section rhythm; every element earns its place.
- **Do** honor the lowercase personal voice in taglines/kickers echoing the
  brand; uppercase only inside buttons.
- **Do** keep tech-stack tags as inline mono middot lists in the entry
  title row (`JetBrains Mono 0.75rem`, Ash Mist).
- **Do** keep evidence numerals (60%, 50%, 3 mini PCs, 3 teams) brightened
  to Moonlit Slate inside muted prose — numbers carry the weight.
- **Do** keep the resume one click away: /resume serves docs/resume.md
  (upgrades to resume.pdf when present).
- **Do** gate all motion behind `prefers-reduced-motion`; `expo.out` +
  fade/settle grammar.

### Don't:

- **Don't** introduce gradients, glassmorphism, or ambient glows — flat
  tonal layers only; any shadow must be declared in Elevation & Depth first.
- **Don't** round component corners; squared is the form language (utility
  chrome only: scrollbar 4px, favicon tile 5px).
- **Don't** spread Lavender Aura onto static elements; if it appears on
  something static, reassign to Moonlit Slate.
- **Don't** add a second accent hue; chart tones (Grafana Green, Terminal
  Amber, HPE Cyan, Soft Rose) stay for data-viz and destructive only.
- **Don't** use pure gray (0-chroma) neutrals; every neutral keeps its
  blue-violet temperature.
- **Don't** let body text exceed the ~672px measure; no multi-column
  reading layouts.
- **Don't** implement light mode until real light tokens exist; `:root` and
  `.dark` are currently identical, dark is the world.
- **Don't** fabricate numbers, testimonials, or projects — copy comes from
  documented work only (per PRODUCT.md).
