# Technology Stack & Credits
**Architected & Developed by doctorcodex / drferdiiskandar**

Komprehensif daftar teknologi, framework, library, dan pihak ketiga yang digunakan dalam sentra-website.

---

## 🎯 Core Framework

### **Next.js 15.0.3**
- **Purpose**: React framework dengan App Router, Server Components, dan optimization
- **License**: MIT
- **Website**: https://nextjs.org
- **Developer**: Vercel
- **Usage**: Foundation seluruh aplikasi

### **React 19.0.0**
- **Purpose**: UI library untuk building component-based interfaces
- **License**: MIT
- **Website**: https://react.dev
- **Developer**: Meta (Facebook)
- **Usage**: Component architecture, hooks, state management

### **TypeScript 5.6.0**
- **Purpose**: Type-safe JavaScript dengan strict mode
- **License**: Apache 2.0
- **Website**: https://typescriptlang.org
- **Developer**: Microsoft
- **Usage**: Type safety, developer experience, compile-time checks

---

## 🎨 UI & Styling

### **Tailwind CSS 3.4.18**
- **Purpose**: Utility-first CSS framework
- **License**: MIT
- **Website**: https://tailwindcss.com
- **Developer**: Tailwind Labs
- **Usage**: Styling system, responsive design, sentra/ui tokens

### **shadcn/ui (Radix UI Primitives)**
- **Purpose**: Unstyled, accessible component primitives
- **License**: MIT
- **Website**: https://ui.shadcn.com & https://radix-ui.com
- **Developer**: shadcn & Radix UI team
- **Components Used**:
  - `@radix-ui/react-accordion` (1.2.12)
  - `@radix-ui/react-avatar` (1.1.10)
  - `@radix-ui/react-label` (2.1.7)
  - `@radix-ui/react-navigation-menu` (1.2.14)
  - `@radix-ui/react-popover` (1.1.15)
  - `@radix-ui/react-separator` (1.1.7)
  - `@radix-ui/react-slot` (1.2.3)
  - `@radix-ui/react-tabs` (1.1.13)
  - `@radix-ui/react-tooltip` (1.2.8)
- **Usage**: Button, Card, Badge, Tabs, Avatar, Popover, Accordion, etc.

### **Framer Motion 11.18.2**
- **Purpose**: Animation library untuk React
- **License**: MIT
- **Website**: https://framer.com/motion
- **Developer**: Framer
- **Usage**: Hero animations, page transitions, interactive effects

### **Lucide React 0.546.0**
- **Purpose**: Icon library (Lucide icon set)
- **License**: ISC
- **Website**: https://lucide.dev
- **Developer**: Lucide contributors
- **Usage**: Icons untuk UI (16px default, follow text color per sentra/ui spec)

### **class-variance-authority 0.7.1**
- **Purpose**: Type-safe variant API for components
- **License**: Apache 2.0
- **Developer**: Joe Bell
- **Usage**: Component variant management

### **clsx 2.1.1**
- **Purpose**: Utility for constructing className strings
- **License**: MIT
- **Developer**: Luke Edwards
- **Usage**: Conditional class composition

### **tailwind-merge 2.6.0**
- **Purpose**: Merge Tailwind CSS classes without conflicts
- **License**: MIT
- **Developer**: dcastil
- **Usage**: cn() utility function

---

## 🔧 Development Tools

### **ESLint 9.0.0 + eslint-config-next**
- **Purpose**: Code linting untuk JavaScript/TypeScript
- **License**: MIT
- **Website**: https://eslint.org
- **Usage**: Code quality, error prevention, style enforcement

### **Prettier 3.2.5**
- **Purpose**: Code formatter
- **License**: MIT
- **Website**: https://prettier.io
- **Usage**: Automatic code formatting (on save & pre-commit)

### **Stylelint 16.0.0**
- **Purpose**: CSS linter
- **License**: MIT
- **Website**: https://stylelint.io
- **Usage**: CSS quality checks, sentra/ui token validation

### **Husky 9.0.0**
- **Purpose**: Git hooks manager
- **License**: MIT
- **Website**: https://typicode.github.io/husky
- **Usage**: Pre-commit hooks (lint-staged, format, tokens check)

### **lint-staged 15.2.0**
- **Purpose**: Run linters on staged git files
- **License**: MIT
- **Usage**: Pre-commit quality gates

### **Commitlint 19.0.0**
- **Purpose**: Enforce conventional commit messages
- **License**: MIT
- **Website**: https://commitlint.js.org
- **Usage**: Commit message validation (feat:, fix:, etc.)

### **Axe Core CLI 4.9.1**
- **Purpose**: Accessibility testing tool
- **License**: MPL-2.0
- **Website**: https://github.com/dequelabs/axe-core
- **Developer**: Deque Systems
- **Usage**: WCAG AA compliance checks

---

## 🎭 Additional UI Libraries

### **Heroicons 2.2.0**
- **Purpose**: SVG icon set by Tailwind CSS team
- **License**: MIT
- **Website**: https://heroicons.com
- **Developer**: Tailwind Labs
- **Usage**: Supplementary icons

### **Tabler Icons 3.35.0**
- **Purpose**: Additional icon library
- **License**: MIT
- **Website**: https://tabler.io/icons
- **Usage**: Extended icon set

### **@aliimam/icons & @aliimam/logos**
- **Purpose**: Custom icon and logo collections
- **License**: MIT
- **Usage**: Brand logos, custom icons

### **tsParticles 3.9.1**
- **Purpose**: Particle effects library
- **License**: MIT
- **Website**: https://particles.js.org
- **Usage**: Background effects, visual enhancements

---

## 🏥 Healthcare & Standards

### **fhir-kit-client 1.9.2**
- **Purpose**: FHIR R4 client library
- **License**: MIT
- **Website**: https://github.com/Vermonster/fhir-kit-client
- **Usage**: HL7 FHIR R4 integration, healthcare data interoperability

---

## 🛠️ Build & Tooling

### **PostCSS 8.5.6**
- **Purpose**: CSS transformation tool
- **License**: MIT
- **Usage**: Tailwind CSS processing, autoprefixer

### **Autoprefixer 10.4.21**
- **Purpose**: Automatic CSS vendor prefixing
- **License**: MIT
- **Usage**: Cross-browser compatibility

---

## 📝 Design System Credits

### **sentra/ui Design System**
- **Developed by**: doctorcodex / drferdiiskandar
- **Inspiration**: Modern healthcare UI/UX best practices
- **Components**: Custom components following dense, accessible design
- **Tokens**:
  - Colors: Oxford Blue (#002157), Sentra Red (#F71D25), Sentra Yellow (#FEE505), Sentra Blue (#0085FF)
  - Typography: Inter font family
  - Spacing: Dense scale (4, 6, 10, 14, 18, 24, 32, 40)
  - Controls: Compact heights (32px), 6px radius

---

## 🎓 Design Influences & References

### **shadcn/ui Blocks**
- **Reference**: Footer design patterns
- **Website**: https://ui.shadcn.com/blocks
- **Usage**: Footer layout inspiration (Footer 04 structure)

### **21st.dev / Magic Components**
- **Reference**: Component architecture patterns
- **Integration**: MCP tools untuk AI-assisted design
- **Usage**: Component building best practices

---

## 🤖 AI & Development Tools

### **Cursor IDE**
- **Purpose**: AI-powered code editor
- **Developer**: Anysphere Inc.
- **Usage**: Development environment dengan AI agents

### **MCP (Model Context Protocol) Servers**
Used for AI agent tooling:
- **GitHub MCP**: Repository operations
- **Vercel MCP**: Deployment & documentation
- **Context7 MCP**: Library documentation lookup
- **GitKraken MCP**: Git workflow automation
- **21st.dev/Magic MCP**: Component design assistance

---

## 📦 Package Managers & Build Tools

### **npm (Node Package Manager)**
- **Purpose**: Dependency management
- **Usage**: Package installation, script running

### **Turbopack**
- **Purpose**: Next.js bundler (Rust-based)
- **Developer**: Vercel
- **Usage**: Fast development builds

---

## 🌐 Deployment & Hosting (Planned)

### **Vercel**
- **Purpose**: Next.js hosting & deployment platform
- **Website**: https://vercel.com
- **Developer**: Vercel
- **Usage**: Production deployment, edge functions

---

## 📄 License Compliance Summary

**All dependencies use permissive open-source licenses:**
- MIT License: 95% of dependencies
- Apache 2.0: TypeScript, class-variance-authority
- MPL-2.0: Axe Core
- ISC: Lucide React

**No proprietary or restrictive licenses used.**

---

## 🙏 Special Thanks

### **Open Source Community**
- Vercel team (Next.js, Turbopack)
- Meta (React team)
- Tailwind Labs (Tailwind CSS, Heroicons)
- shadcn (shadcn/ui architecture)
- Radix UI team (Accessible primitives)
- Framer team (Framer Motion)
- HL7 FHIR community (Healthcare interoperability)

### **Design Inspiration**
- Modern healthcare SaaS platforms
- WCAG accessibility guidelines
- Dense UI paradigms for clinical workflows

---

## 📊 Technology Statistics

**Total Dependencies**: 51
- Production: 31
- Development: 20

**Lines of Code (Estimated)**:
- TypeScript/TSX: ~5,000+ lines
- CSS: ~1,200+ lines
- Configuration: ~500+ lines

**Component Count**: 20+ custom components
**Page Count**: 1 main page (homepage)

---

**Last Updated**: October 23, 2025
**Project Status**: Active Development
**Build Status**: ✅ Passing

---

**For detailed licensing information, see individual package repositories.**
**All code developed by doctorcodex is proprietary to SENTRA AADI Framework.**

