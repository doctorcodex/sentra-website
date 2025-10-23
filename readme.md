# sentra-website

**Architected by doctorcodex**

Next.js 15 website with sentra/ui brand system, TypeScript strict, and production-ready tooling.

## quickstart

```bash
# install dependencies
npm install

# run development server
npm run dev

# open http://localhost:3000
```

## tech stack

- Next.js 15 + React 19 (App Router)
- TypeScript strict mode
- sentra/ui design tokens (dense, dark mode)
- ESLint + Prettier + Stylelint
- Husky (pre-commit hooks)
- Codex Guard (CI quality checks)

## scripts

- `npm run dev` - development server
- `npm run build` - production build
- `npm run start` - production server
- `npm run lint` - ESLint + Next.js lint
- `npm run format` - Prettier format
- `npm run guard:tokens` - regenerate CSS from tokens
- `npm run guard:ci` - full CI checks

## structure

- `src/app/` - Next.js App Router pages
- `src/components/` - React components
- `src/lib/` - utilities, helpers
- `public/styles/` - sentra/ui brand CSS
- `docs/brand/` - design tokens, spec, manifest
- `docs/agents/` - AI agent charters

## landing template

- **Dark mode**: toggle via header button (adds/removes `.theme-dark` on `<html>`)
- **Sections**: use `.section` (default) or `.section--alt` (alt surface); hero uses `.section--hero`
- **Typography**: H1/H2 follow sentra/ui scale; add `.h2-underline` for spec underline (48px)
- **Layout**: wrap content in `.container`; grid helpers `.grid-12`, `.feature-grid`
- **Controls**: `.btn`, `.btn--primary`, compact sizes; focus-visible outlines per spec
- **Tokens**: see `public/styles/sentra-brand.css` for CSS variables; dark mode via `.theme-dark`

## agents

- codex uix - UI/UX refinement specialist
- codex guard - background quality & a11y
- Sentra Engineer - assistant implementation
