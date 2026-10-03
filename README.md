# benedict-taguinod

Personal website for Benedict Taguinod — built with Next.js (App Router), Tailwind CSS v4, shadcn/ui, and GSAP.

## Getting started

Requires Node >= 20 and pnpm (declared via `packageManager`).

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Scripts

| Command        | Description                     |
| -------------- | ------------------------------- |
| `pnpm dev`     | Start the dev server (port 3000) |
| `pnpm build`   | Production build                |
| `pnpm start`   | Serve the production build      |
| `pnpm lint`    | Run ESLint                      |
| `pnpm format`  | Format with Prettier            |
| `pnpm typecheck` | Type-check with TypeScript    |

## Structure

- `app/` — routes, layout, global styles
- `components/` — site components (`ui/` holds shadcn/ui primitives)
- `lib/` — shared utilities (`cn`)
- `hooks/` — shared React hooks
- `docs/` — cv.md and resume.md

## Adding shadcn/ui components

```bash
pnpm dlx shadcn@latest add button
```

Components are placed in `components/ui/` per `components.json`.