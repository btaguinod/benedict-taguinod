---
name: Benedict Taguinod — Portfolio
description: A light, cream-paper café menu-board portfolio — brown-green matcha calm where the person and the work lead and the interface recedes.
colors:
  background: "oklch(0.951 0.032 73.5)"
  foreground: "oklch(0.228 0.022 60.1)"
  card: "oklch(0.914 0.044 122.7)"
  card-foreground: "oklch(0.228 0.022 60.1)"
  popover: "oklch(0.923 0.041 78.1)"
  popover-foreground: "oklch(0.228 0.022 60.1)"
  primary: "oklch(0.398 0.094 49)"
  primary-foreground: "oklch(0.951 0.032 73.5)"
  secondary: "oklch(0.456 0.101 128.3)"
  secondary-foreground: "oklch(0.951 0.032 73.5)"
  muted: "oklch(0.914 0.044 122.7)"
  muted-foreground: "oklch(0.41 0.045 63.4)"
  accent: "oklch(0.707 0.099 126.2)"
  accent-foreground: "oklch(0.228 0.022 60.1)"
  destructive: "oklch(0.48 0.134 37.1)"
  border: "oklch(0.836 0.059 122.6)"
  input: "oklch(0.836 0.059 122.6)"
  ring: "oklch(0.456 0.101 128.3)"
  selection: "oklch(0.707 0.099 126.2 / 55%)"
  scrollbar-track: "oklch(0.923 0.041 78.1)"
  scrollbar-thumb: "oklch(0.763 0.062 105.3)"
  scrollbar-thumb-hover: "oklch(0.456 0.101 128.3)"
  icon-tile: "#6E3511"
  icon-glyph: "#FCECD8"
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
    backgroundColor: "oklch(0.398 0.094 49 / 80%)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-outline-hover:
    backgroundColor: "{colors.muted}"
  button-lg:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "20px 32px"
---

# Design System: Benedict Taguinod — Portfolio

## Overview

**Creative North Star: "The Menu Board"**

This system renders the portfolio as the menu board of a café whose product
is an engineer: one board you scan in a single pass, set on warm unbleached
cream paper with deep espresso-brown ink, olive-green links, and matcha-sage
fields between 1px sage hairlines. The visitor is greeted — "welcome in! I'm"
— the way a regular is greeted at the counter, then reads a menu: the day's
special ("Today's brew", the current role), the standing menu of work, and
the counter where the conversation happens. Sections are menu categories;
entries are items; outcomes are the prices-and-portions. No cards, no
columns — one narrow reading column, the width of a well-set menu.

Two hues, one warm neutral, one ink: espresso brown (~49°) and olive/matcha
green (~128°) over cream. The green is architectural, not garnish — links,
focus, fields, and rules carry it; cream stays paper; espresso does the
writing and the primary actions, like ink pressed into cardstock. Depth is
tonal (sage washes between hairlines), never shadowed. Motion settles like
an analog gauge: one spring, then quiet. The signature moment is the greet
itself — the page opens like a shop door, lowercase, in mono, the
maintainer's own voice.

**Key Characteristics:**

- Light-only; cream `#FCECD8`-derived OKLCH palette, dark mode unshipped
- Brown-green two-hue family; espresso ink writes, deep olive acts, matcha
  tints fields — green never appears as bare garnish
- Squared components (0px radius), uppercase mono-tracked button labels;
  no kickers or eyebrows — headings carry their own weight
- Fraunces display serif (SOFT 100 at rest); DM Sans body; JetBrains Mono
  for the greet line, meta rows, and tech-stack tags
- 1px sage hairline section separators on a single narrow measure (~672px)
- GSAP fade/settle motion, fully disabled under `prefers-reduced-motion`

## Colors

A warm daylight scheme: espresso ink on cream paper with an olive-green
supporting voice. Everything keeps a sandy/sage temperature — no pure
grays, no cool blues.

### Primary

- **Espresso Tile** (`oklch(0.398 0.094 49)`, the pinned `#6E3511`): The
  ink voice. Primary button fill (cream text, 8.3:1), icon/favicon tile,
  and the display name itself. Also `primary`-hover at 80% alpha.

### Secondary

- **Deep Leaf** (`oklch(0.456 0.101 128.3)`, deepened toward the pinned
  `#597928` olive for 6:1 on cream): The action-and-link voice — text links,
  focus ring, scrollbar thumb hover, chart-1. The green earns its place by
  contrast, not decoration.

### Tertiary (optional)

- **Matcha Sage** (`oklch(0.707 0.099 126.2)`, the pinned `#91AC67`):
  Field tint voice — the "special" chip background, selection wash (55%
  alpha), hover fills via `--muted`. Never body text (1.3:1 on cream).
  **Terracotta Shot** (`oklch(0.48 0.134 37.1)`, derived `#9A3B1E`):
  semantic destructive, the one warm-red voice, used for errors only.
  Chart-2 through chart-5 (espresso, lighter matcha, caramel, terracotta)
  stay reserved for future data-viz.

### Neutral

- **Café Cream** (`oklch(0.951 0.032 73.5)`, the pinned `#FCECD8`): Page
  background, the paper.
- **Espresso Ink** (`oklch(0.228 0.022 60.1)`, derived `#241A12`): Primary
  text — 14.7:1 on cream. Slightly deeper than the pinned brown so hairlines
  and text read at different weights.
- **Espresso Ash** (`oklch(0.41 0.045 63.4)`, derived `#5C4530`): Secondary
  text — 7.1:1 on cream, 5.3:1 on the sage wash. Muted prose, meta rows.
- **Sage Wash** (`oklch(0.914 0.044 122.7)`, derived `#DDE8C8`): Card/muted
  field — the palest green tint, quiet fills and the special chip.
- **Pale Sand** (`oklch(0.923 0.041 78.1)`, derived `#F5E3C8`): Popover
  well one step warmer than cream.
- **Sage Hairline** (`oklch(0.836 0.059 122.6)`, derived `#C2D0A6`): 1px
  borders and separators — darkened matcha so rules read on cream.
- **Dusk Caramel** (`oklch(0.763 0.062 105.3)`, derived `#C9B08C`):
  Scrollbar thumb at rest, mid-step warm gray.

### Named Rules (optional, powerful)

**The Ink Rule.** Espresso writes and acts; green connects and tints;
cream is paper. If a surface reads green, it is a field or a link — never
a wall of green text.
**The Warm-Temperature Rule.** Every neutral leans warm (sand/sage hue
60–130°); pure gray (0 chroma) and cool blue are foreign to this world.
**The Cream Ledger Rule.** Body text is Espresso Ink (14.7:1), never Matcha
Sage; green carries links and large accents only after contrast verification.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback) — variable axes
`opsz`, `SOFT`, `WONK` (loaded, but axes rest at default; no flip)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** The warm soft-serif display of a hand-lettered menu over the
clean sans of a well-printed card and the mono of the board's dated meta
rows. Fraunces carries the person; DM Sans carries the work; JetBrains Mono
carries the café's small print.

### Hierarchy

- **Display** (700, clamp(3rem–3.75rem), 1.25): The hero name only. Rests
  at `WONK 0, SOFT 100, opsz 144`; entrance is y+opacity settle.
- **Headline** (600, 1.5rem, 1.3): Section titles — "Today's brew", "On the
  menu", "Let's talk."
- **Title** (500, 0.875–1rem, 1.5): Entry names within sections ("Cloud
  Developer", "AI Opportunity Backpack").
- **Chip Title** (700, 0.875rem, 1.625, uppercase, 0.1em tracking, Fraunces
  on Sage Wash padding): The one special's name row.
- **Body** (400, 1rem–0.875rem, 1.625): Taglines and entry descriptions,
  bounded by the ~672px measure.
- **Label** (600, 0.75rem, 0.1em tracking, uppercase): All button text
  ("LinkedIn", "Email me", "Résumé").
- **Mono Meta** (400, 0.75–0.875rem): The greet line, meta rows
  ("Conectado · 2025–present"), and tech-stack tags ("Kubernetes ·
  Prometheus · Grafana"), separator-dot form.

### Named Rules (optional)

**The Lowercase Voice Rule.** The greet line and CTA echo the brand's
lowercase voice ("welcome in! I'm"); buttons stay uppercase.

## Layout

Single narrow measure, ~672px (`max-w-2xl` ≈ 42rem), left-aligned within a
centered column, 24px gutters (`px-6`) and generous 80px vertical rhythm
(`py-20`) per section. Full-height hero (100svh) starts the scroll; every
later section is a menu category separated by a 1px `border-t` hairline —
no cards, no columns, one reading column. Responsive behavior collapses
gracefully: the name wraps ("Benedict" / "Taguinod."), buttons wrap, chip
titles break onto two lines. No grid system; a future two-column need must
justify itself against the single-measure doctrine.

## Elevation & Depth

Flat. Depth is tonal only: the page is Café Cream, fields step into Sage
Wash behind hairlines, popovers sit on Pale Sand. There are **no
box-shadows anywhere** in the system; do not introduce them. If a future
moment needs lift, prefer a Deep Leaf ring or a tonal step; shadows must
be declared in this section first.

### Named Rules (optional)

**The Flat-By-Default Rule.** Surfaces are flat at rest; state is expressed
with tonal steps and hairlines, never elevation.

## Shapes

Everything squared. Component corners are 0px radius (buttons
`rounded-none`); the only rounded things are utility chrome: 4px scrollbar
thumb, 5px favicon tile. Hairline rules (1px, Sage Hairline) are the
structural motif — full section-width dividers, the chip's baseline field,
and focus rings. Edges square, colors soft.

## Components

### Buttons

- **Shape:** Squared corners (0 radius), thin transparent border at rest.
- **Primary:** Espresso Tile fill, Café Cream text, uppercase 0.75rem/600
  with 0.1em tracking, 40px tall × 24px horizontal padding.
- **Hover / Focus:** Primary dims to 80% alpha; outline/ghost fill with
  Sage Wash, text deepens. Focus: 1px Deep Leaf border + 2px ring at 30%
  alpha; buttons dip 1px on press.
- **Outline:** Transparent over Café Cream, Espresso Ink text, Sage
  Hairline border.
- **Ghost:** No border; hover washes Sage Wash.
- **Sizes:** xs 28px, sm/sm-default 36–40px, lg 44px tall; proportional
  horizontal padding (12–32px).

### Chips

- **The Special Chip** (signature pattern): entry title set uppercase in
  Fraunces 700 with 0.75rem-equivalent prominence, on a Sage Wash field
  (`--card`) with `px-2` padding and 28px line height — like a menu's
  highlighted special. Cream page shows through as the paper margin.
- **Meta rows / tech tags:** plain mono middot lists (`JetBrains Mono
  0.75rem`, Espresso Ash).

### Cards / Containers

- Not used on the page. When they arrive: Sage Wash field, Sage Hairline
  1px border, squared corners, no shadow, 16–24px internal padding.

### Inputs / Fields

- None on the page. Incumbent token (`--input`) equals Sage Hairline;
  squared, 1px stroke, Deep Leaf focus ring.

### Navigation

- None: a single scrolling page with a full-viewport hero. Anchor behavior
  only.

### Signature Component

- **The Greet-and-Settle Hero:** "welcome in! I'm" (mono, Espresso Ash)
  → Fraunces name → tagline → buttons, a staggered fade/settle entrance
  (~0.9s on the name, `expo.out`); sections fade in once on scroll
  (`top 88%`, once). All motion sits inside a
  `matchMedia("(prefers-reduced-motion: no-preference)")` guard. Depth is
  a 12–14px rise that settles — gauge-settle, never bounce.

## Do's and Don'ts

### Do:

- **Do** keep the two-hue discipline (The Ink Rule): espresso writes and
  acts; green links, tints, and rings; cream stays paper.
- **Do** keep every neutral warm (The Warm-Temperature Rule): sage/sand
  hues 60–130°, chroma ≥ 0.02.
- **Do** use hairlines (1px, `--border`) and tonal steps (Sage Wash / Pale
  Sand / Café Cream) for all structure and depth.
- **Do** set display text in Fraunces resting at `SOFT 100, WONK 0`; motion
  is fade/settle, never axis animation.
- **Do** keep the greet line lowercase mono — it is the page's opening voice.
- **Do** keep tech tags as inline mono middot lists in the entry title row.
- **Do** keep evidence numerals (60%, 50%, 4 mini PCs, 3 teams) at Espresso
  Ink weight inside Espresso Ash prose — numbers carry the weight.
- **Do** keep links green (Deep Leaf) with hairline underlines
  (`decoration-border`, offset 4), deepening on hover.
- **Do** keep the resume one click away: /resume serves docs/resume.md.
- **Do** gate all motion behind `prefers-reduced-motion`; `expo.out`
  fade/settle grammar.
- **Do** keep browser chrome (favicon, apple icon) in the espresso-tile
  family (`#6E3511` tile, `#FCECD8` cream glyphs).

### Don't:

- **Don't** reintroduce the lavender night world; light-only is the
  committed world, dark tokens stay identical to root and unshipped.
- **Don't** introduce gradients, glassmorphism, or ambient glows — flat
  tonal layers only.
- **Don't** round component corners; squared is the form language (utility
  chrome only: scrollbar 4px, favicon tile 5px).
- **Don't** use Matcha Sage for text on cream (1.3:1); green text is Deep
  Leaf only, after contrast math.
- **Don't** use pure gray or cool-blue neutrals; every neutral keeps its
  warm temperature.
- **Don't** add a third hue; terracotta is destructive-only, chart tones
  stay for data-viz.
- **Don't** let body text exceed the ~672px measure; no multi-column
  reading layouts.
- **Don't** animate Fraunces axes; that was the previous world's signature.
- **Don't** fabricate numbers, testimonials, or projects — copy comes from
  documented work only (per PRODUCT.md).