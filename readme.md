# 🏥 Augmented Artificial Intelligent Diagnostic Integrated

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Augmented AI Diagnostic Integrated — Transforming Clinical Intelligence**

[Live Demo](#) • [Documentation](/) • [Contact](https://wa.me/6285816021405)

</div>

---

## 🎯 Overview

**SENTRA AADI** adalah sistem pendukung keputusan klinis berbasis kecerdasan buatan yang merevolusi cara dokter bekerja di Fasilitas Kesehatan Tingkat Pertama (FKTP). Website ini dibangun dengan **Next.js 15** dan **Sentra/UI v2.0** design system.

### ✨ Key Features

- 🌓 **Full Dark Mode** — Deep navy palette dengan smooth transitions
- 📱 **Responsive Design** — Mobile-first dengan desktop optimization
- ⚡ **Performance** — 36.3 kB homepage, optimized static generation
- ♿ **Accessibility** — WCAG AA compliant dengan focus-visible states
- 🎨 **Sentra/UI v2.0** — Professional design system dengan dense layout
- 🔒 **Type-Safe** — TypeScript strict mode, zero `any` types

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/doctorcodex/sentra-website.git
cd sentra-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

**Build for production:**
```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15.5.6 (App Router, React 19)
- **Language:** TypeScript 5.x (strict mode)
- **Styling:** Tailwind CSS 3.x + Sentra/UI custom tokens
- **Icons:** Lucide React (16px default, following text color)

### UI Components
- **Primitives:** Radix UI (Accordion, Avatar, Navigation, Tooltip)
- **Animation:** Framer Motion
- **Image:** Next.js Image optimization

### Code Quality
- **Linting:** ESLint + Next.js lint rules
- **Formatting:** Prettier
- **Styling:** Stylelint
- **Commits:** Commitlint (conventional commits)
- **Hooks:** Husky (pre-commit, commit-msg)
- **CI/CD:** GitHub Actions (Codex Guard workflow)

---

## 📁 Project Structure

```
sentra-website/
├── .github/workflows/       # CI/CD (Codex Guard)
├── .husky/                  # Git hooks
├── docs/
│   ├── brand/              # Sentra/UI design system
│   │   ├── sentra-ui-design-spec.md
│   │   ├── sentra-ui-tokens.json
│   │   └── sentra-ui-manifest.json
│   ├── agents/             # AI agent configurations
│   └── ai/                 # MCP setup docs
├── public/
│   ├── avatar/             # Team avatars (8 AI agents)
│   ├── icons/              # Lucide SVG icons (200+)
│   ├── images/             # Brand images
│   ├── logo/               # Sentra logos
│   └── styles/
│       └── sentra-brand.css # Design tokens as CSS variables
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage (all sections)
│   │   └── globals.css     # Global styles + Tailwind imports
│   ├── components/
│   │   ├── ui/             # Sentra-prefixed components
│   │   │   ├── sentra-hero.tsx
│   │   │   ├── sentra-about.tsx
│   │   │   ├── sentra-aadi-demo.tsx
│   │   │   ├── sentra-protocol7.tsx
│   │   │   ├── sentra-milestones.tsx
│   │   │   ├── sentra-integrations.tsx
│   │   │   ├── sentra-customers.tsx
│   │   │   ├── sentra-faq.tsx
│   │   │   ├── sentra-credits.tsx
│   │   │   ├── sentra-footer.tsx
│   │   │   └── ... (primitives: button, card, etc.)
│   │   ├── theme_toggle.tsx # Dark mode toggle
│   │   └── site_header.tsx  # Navbar wrapper
│   ├── lib/
│   │   └── utils.ts        # cn() helper
│   └── hooks/              # Custom React hooks
├── .cursorrules            # Project rules + AI agents config
├── package.json
├── tsconfig.json
└── next.config.mjs
```

---

## 🎨 Sentra/UI v2.0 Design System

### Brand Colors
```css
--brand-oxford: #002157  /* Primary neutral */
--brand-red:    #F71D25  /* Primary action/error */
--brand-yellow: #FEE505  /* Warning */
--brand-blue:   #0085FF  /* Info/accent alt */
```

### Light Mode
```css
--bg:     #ffffff        /* Main background */
--bg-alt: #f7f8fb        /* Alternative surface */
--fg:     #000000        /* Foreground text */
--muted:  rgba(0,33,87,0.60)   /* Muted text */
--border: rgba(0,33,87,0.12)   /* Borders */
```

### Dark Mode
```css
--bg:     #0a0e1a        /* Deep navy (not pure black) */
--bg-alt: #141827        /* Darker navy */
--fg:     #e8edf5        /* Soft white */
--muted:  rgba(232,237,245,0.65)  /* Muted light */
--border: rgba(232,237,245,0.12)  /* Subtle borders */
```

**Philosophy:** Deep navy instead of pure black for professionalism and reduced eye strain.

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm start                # Start production server

# Code Quality
npm run lint             # ESLint check
npm run format           # Prettier format
npm run format:check     # Check formatting
npm run guard:tokens     # Generate CSS from tokens
npm run guard:a11y       # Axe accessibility linter
npm run guard:ci         # Full CI pipeline
```

---

## 🌓 Dark Mode Implementation

### Features
- ✅ **System Detection:** Auto-detects `prefers-color-scheme: dark`
- ✅ **LocalStorage:** Saves preference as `sentra-theme`
- ✅ **Smooth Transitions:** 300ms cubic-bezier easing
- ✅ **Icon Inversion:** SVG icons auto-invert with `filter: invert(1)`
- ✅ **WCAG AA:** Proper contrast ratios in both modes

### Usage
Toggle via navbar Sun/Moon icon, or programmatically:
```javascript
// Add/remove class on <html>
document.documentElement.classList.toggle('theme-dark');
```

---

## 🧩 Key Components

### Interactive Sections
- **Clinical Demo** — Mobile browser frame with interactive tutorial
- **Development Milestones** — Animated timeline with hover effects
- **FAQ** — Plus icon accordion (rotates 45° on open)
- **Team Avatars** — 8 AI agents with yellow tooltips
- **Terminal Demo** — Realistic Mac terminal with typing animation

### Design Patterns
- **Dense Layout:** Compact spacing (4-40px scale)
- **Symmetric Design:** Grid-based, balanced layouts
- **Icon Strategy:** Lucide 16px, follows text color
- **Typography:** Inter font, 14-36px scale
- **Animations:** Framer Motion for smooth UX

---

## 👥 Meet Sentra AI Team

Built by industry-standard AI collaboration:

- **Aurora** (ara.png) — Asisten Inovasi
- **Atlas** (atlas.png) — Research & Forecasting Analyst
- **Codex** (codex.png) — Brainstorming
- **Dexton** (dexton.png) — Strategis
- **Kod** (kod.png) — Assistant Software Engineer
- **Nova** (nova.png) — Administrator Digital Document
- **Rex** (rex.png) — Assistant Software Engineer
- **Kade** (kade.png) — Software Engineer

---

## 🔗 External Links

- **Powered by:** [RSIA Melinda DHAI](https://melinda.co.id)
- **WhatsApp:** [+62 858-1602-1405](https://wa.me/6285816021405)
- **Email:** [doctorcodex@outlook.com](mailto:doctorcodex@outlook.com)
- **Documentation:** [Home](/)

---

## 🏗️ Architecture

### Engineering Standards
- **Conventional Commits:** `feat:`, `fix:`, `chore:`, etc.
- **Branch Strategy:** `feat/*`, `fix/*`, `docs/*`
- **No Secrets:** All sensitive data in `.env` (not committed)
- **Type Safety:** No `any` types, strict TypeScript
- **Testing Ready:** Structure supports Vitest/Jest integration

### Performance
- **Homepage:** 36.3 kB First Load JS
- **Static Generation:** Pre-rendered at build time
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic by Next.js

---

## 🎓 Agents & AI Integration

Three specialized AI agents configured via `.cursorrules`:

### 1. Codex UIX
- **Focus:** UI/UX refinement
- **Tools:** 21st.dev, Magic Logos, Component builder/refiner
- **Mission:** Maintain Sentra/UI standards, symmetry, accessibility

### 2. Codex Guard
- **Focus:** Quality assurance, token hygiene
- **Tools:** Component refiner, inspiration
- **Mission:** Enforce design tokens, WCAG AA, minimal diffs

### 3. Sentra Engineer
- **Focus:** Full-stack development
- **Tools:** Complete toolkit (MCP servers, Context7, GitHub)
- **Mission:** Production-ready code, typed errors, tests

---

## 📦 Dependencies

### Production
- `next` 15.5.6
- `react` 19.x
- `framer-motion` — Animations
- `lucide-react` — Icons
- `@radix-ui/*` — Accessible primitives
- `tailwindcss` 3.x
- `class-variance-authority` — Component variants
- `clsx` + `tailwind-merge` — Conditional classes

### Development
- `typescript` 5.x
- `eslint` + plugins
- `prettier` + plugins
- `stylelint` + plugins
- `husky` + `lint-staged`
- `@commitlint/cli`

Full list: See `package.json`

---

## 🎨 Design Philosophy

### Sentra/UI Principles
1. **Presisi, padat, modular** — Compact by default
2. **Netral tenang, aksen tegas** — Oxford blue neutral, red/yellow/blue accents
3. **Adaptif gelap/terang** — Full dark mode with smooth transitions
4. **Aksesibilitas first** — WCAG AA, keyboard navigation, focus states

### Visual Hierarchy
- **Headings:** Oxford blue (#002157) in light, soft white (#e8edf5) in dark
- **Body:** Muted colors for comfortable reading
- **Accents:** Vibrant red/yellow/blue for CTAs and status
- **Spacing:** Dense scale (4-40px) for efficient use of space

---

## 🧪 Quality Assurance

### Pre-commit Checks
```bash
✓ ESLint (no errors)
✓ Prettier (formatted)
✓ Stylelint (CSS valid)
✓ Token guard (CSS regenerated)
✓ Accessibility guard (Axe linter)
```

### CI Pipeline (GitHub Actions)
- Lint all files
- Type check
- Build verification
- Token consistency check
- Style validation

---

## 📄 License

**MIT License**

Copyright © 2025 doctorcodex / drferdiiskandar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

---

## 🙏 Acknowledgments

Powered by **51 open-source technologies** including:

- **Framework:** Next.js by Vercel
- **UI Primitives:** Radix UI
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Type Safety:** TypeScript
- **And many more...** See [Credits section](/#credits) on website

### Special Thanks

We extend our sincere appreciation to the creators and contributors of the open-source technologies that power this system.

---

## 👨‍💻 Author

**Architecture & Development by [doctorcodex / drferdiiskandar](mailto:doctorcodex@outlook.com)**

- CEO of Sentra
- CEO RSIA Melinda DHAI
- Full Stack Developer
- Civil Law Consultant (Konsultan Hukum Perdata)

---

## 📞 Contact & Support

- **WhatsApp:** [+62 858-1602-1405](https://wa.me/6285816021405)
- **Email:** [doctorcodex@outlook.com](mailto:doctorcodex@outlook.com)
- **Website:** [RSIA Melinda DHAI](https://melinda.co.id)
- **Repository:** [github.com/doctorcodex/sentra-website](https://github.com/doctorcodex/sentra-website)

---

<div align="center">

**Developed by doctorcodex**

*Transformasi Digital Healthcare Indonesia*

Made with ❤️ using **Sentra/UI v2.0**

</div>
