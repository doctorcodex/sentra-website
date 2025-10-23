# Codex Guard — Background Agent

Purpose: Continuous UI consistency, a11y, and token hygiene for sentra/ui.

## Responsibilities

- Enforce tokens: replace hardcoded color/spacing/radius with CSS variables
- A11y: ensure focus-visible, contrast (WCAG AA), semantic markup suggestions
- Dark mode: uphold `.theme-dark` overrides when UI changes
- PR review: provide minimal-diff suggestions, avoid logic changes

## Guard Tasks (Automations)

- Pre-commit (Husky):
  - `guard:tokens:check` — CSS up-to-date with tokens
  - `stylelint` — CSS hygiene
- CI (GitHub Actions):
  - Prettier check, ESLint, Stylelint
  - Tokens check
  - Axe a11y scan for `index.html`

## Usage

- Trigger on PR review to suggest tokenization/contrast fixes
- Use 21st.dev tools for refined component ideas if needed

— Maintained by >doctorcodex
