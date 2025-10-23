// Developed by doctorcodex
// Generate CSS variables from sentra/ui tokens JSON with dark mode overrides.

import fs from 'node:fs';
import path from 'node:path';

const TOKENS_PATH = path.resolve('docs/brand/sentra-ui-tokens.json');
const OUTPUT_PATH = path.resolve('public/styles/sentra-brand.css');
const CHECK_ONLY = process.argv.includes('--check');

function readJson(filePath) {
  const json = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(json);
}

function toCssVars(tokens) {
  const lines = [];
  lines.push('/* Developed by doctorcodex — generated from docs/brand/sentra-ui-tokens.json */');
  lines.push('');
  lines.push(':root {');

  // brand colors
  const brand = tokens.tokens?.color?.brand ?? {};
  if (brand.oxford?.value) lines.push(`  --brand-oxford: ${brand.oxford.value};`);
  if (brand.red?.value) lines.push(`  --brand-red: ${brand.red.value};`);
  if (brand.yellow?.value) lines.push(`  --brand-yellow: ${brand.yellow.value};`);
  if (brand.blue?.value) lines.push(`  --brand-blue: ${brand.blue.value};`);

  // roles
  const surface = tokens.tokens?.color?.surface ?? {};
  if (surface.bg?.value) lines.push(`  --bg: ${surface.bg.value};`);
  if (surface.bgAlt?.value) lines.push(`  --bg-alt: ${surface.bgAlt.value};`);
  if (surface.fg?.value) lines.push(`  --fg: ${resolveRef(surface.fg.value, tokens)};`);
  if (surface.muted?.value) lines.push(`  --muted: ${surface.muted.value};`);
  if (surface.border?.value) lines.push(`  --border: ${surface.border.value};`);

  const semantic = tokens.tokens?.color?.semantic ?? {};
  if (semantic.accent?.value)
    lines.push(`  --accent: ${resolveRef(semantic.accent.value, tokens)};`);
  if (semantic.accentAlt?.value)
    lines.push(`  --accent-alt: ${resolveRef(semantic.accentAlt.value, tokens)};`);
  if (semantic.warning?.value)
    lines.push(`  --warning: ${resolveRef(semantic.warning.value, tokens)};`);

  // typography
  const font = tokens.tokens?.font ?? {};
  if (font.family?.value) lines.push(`  --font-family: ${font.family.value}, sans-serif;`);
  const size = font.size ?? {};
  const lh = tokens.tokens?.font?.lineHeight ?? {};
  if (size.meta?.value && lh.meta?.value)
    lines.push(`  --fs-12: ${size.meta.value}; --lh-12: ${lh.meta.value};`);
  if (size.body?.value && lh.body?.value)
    lines.push(`  --fs-14: ${size.body.value}; --lh-14: ${lh.body.value};`);
  if (size.h2?.value && lh.h2?.value)
    lines.push(`  --fs-20: ${size.h2.value}; --lh-20: ${lh.h2.value};`);
  if (size.h1?.value && lh.h1?.value)
    lines.push(`  --fs-36: ${size.h1.value}; --lh-36: ${lh.h1.value};`);

  // spacing
  const space = tokens.tokens?.space ?? {};
  Object.entries(space).forEach(([k, v]) => {
    lines.push(`  --space-${k}: ${v.value};`);
  });

  // controls
  const control = tokens.tokens?.control ?? {};
  if (control.height?.sm?.value) lines.push(`  --control-h-sm: ${control.height.sm.value};`);
  if (control.height?.md?.value) lines.push(`  --control-h-md: ${control.height.md.value};`);
  if (control.padX?.value) lines.push(`  --control-pad-x: ${control.padX.value};`);

  // radius
  const radius = tokens.tokens?.radius ?? {};
  if (radius.xs?.value) lines.push(`  --radius-xs: ${radius.xs.value};`);
  if (radius.sm?.value) lines.push(`  --radius-sm: ${radius.sm.value};`);
  if (radius.md?.value) lines.push(`  --radius-md: ${radius.md.value};`);

  // shadows & easing
  const shadow = tokens.tokens?.shadow ?? {};
  if (shadow.sm?.value) lines.push(`  --shadow-sm: ${shadow.sm.value};`);
  if (shadow.md?.value) lines.push(`  --shadow-md: ${shadow.md.value};`);
  const easing = tokens.tokens?.easing ?? {};
  if (easing.standard?.value) lines.push(`  --easing-standard: ${easing.standard.value};`);

  lines.push('}');
  lines.push('');

  // dark mode overrides
  const dark = tokens.modes?.dark ?? {};
  const dSurface = dark.color?.surface ?? {};
  const dShadow = dark.shadow ?? {};
  lines.push('.theme-dark {');
  if (dSurface.bg?.value) lines.push(`  --bg: ${dSurface.bg.value};`);
  if (dSurface.bgAlt?.value) lines.push(`  --bg-alt: ${dSurface.bgAlt.value};`);
  if (dSurface.fg?.value) lines.push(`  --fg: ${dSurface.fg.value};`);
  if (dSurface.muted?.value) lines.push(`  --muted: ${dSurface.muted.value};`);
  if (dSurface.border?.value) lines.push(`  --border: ${dSurface.border.value};`);
  if (dShadow.sm?.value) lines.push(`  --shadow-sm: ${dShadow.sm.value};`);
  if (dShadow.md?.value) lines.push(`  --shadow-md: ${dShadow.md.value};`);
  lines.push('}');
  lines.push('');

  // base & small utilities to match hand-written file
  lines.push('html, body {');
  lines.push('  background: var(--bg);');
  lines.push('  color: var(--fg);');
  lines.push('  font-family: var(--font-family);');
  lines.push('}');
  lines.push('');
  lines.push('h1 { font-size: var(--fs-36); line-height: var(--lh-36); font-weight: 600; }');
  lines.push('h2 { font-size: var(--fs-20); line-height: var(--lh-20); font-weight: 600; }');
  lines.push(
    'small, .meta { font-size: var(--fs-12); line-height: var(--lh-12); letter-spacing: 0.02em; text-transform: uppercase; }',
  );
  lines.push('');
  lines.push('.btn {');
  lines.push('  display: inline-flex; align-items: center; justify-content: center;');
  lines.push('  height: var(--control-h-md); padding: 3px var(--control-pad-x);');
  lines.push('  border-radius: var(--radius-sm); border: 1px solid var(--border);');
  lines.push('  background: var(--bg); color: var(--fg);');
  lines.push('  box-shadow: var(--shadow-sm);');
  lines.push(
    '  transition: transform .15s var(--easing-standard), box-shadow .2s var(--easing-standard), background-color .2s;',
  );
  lines.push('}');
  lines.push('.btn:hover { transform: translateY(-1px); background: var(--bg-alt); }');
  lines.push('.btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }');
  lines.push(
    '.btn--primary { background: var(--accent); color: #fff; border-color: transparent; }',
  );
  lines.push('.btn--ghost { background: transparent; border-color: transparent; }');
  lines.push('.btn[disabled], .btn--disabled { opacity: .5; pointer-events: none; }');
  lines.push('');
  lines.push(
    '.tag { display: inline-flex; align-items: center; gap: 6px; border-radius: var(--radius-sm); padding: 2px 8px; background: var(--bg-alt); border: 1px solid var(--border); font-size: var(--fs-12); line-height: var(--lh-12); }',
  );
  lines.push(
    '.tag .dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }',
  );
  lines.push('.tag--error { color: var(--accent); }');
  lines.push('.tag--info { color: var(--accent-alt); }');
  lines.push('.tag--warn { color: var(--warning); }');
  lines.push('');
  lines.push(
    '.input, input[type="text"], select { height: var(--control-h-md); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0 var(--control-pad-x); background: var(--bg); color: var(--fg); }',
  );
  lines.push('.input::placeholder { color: color-mix(in srgb, var(--muted) 70%, transparent); }');
  lines.push('.select { padding-right: calc(var(--control-pad-x) + 16px); }');
  lines.push('');
  lines.push(
    '.container { width: min(1100px, 100%); margin-inline: auto; padding-inline: var(--space-4); }',
  );
  lines.push(
    '.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-3); }',
  );
  lines.push('table.sticky thead th { position: sticky; top: 0; background: var(--bg); }');

  return lines.join('\n') + '\n';
}

function resolveRef(value, root) {
  if (typeof value !== 'string') return value;
  if (!value.startsWith('{') || !value.endsWith('}')) return value;
  // simple token reference resolver like {color.brand.red}
  const pathStr = value.slice(1, -1);
  const keys = pathStr.split('.');
  let cur = root.tokens;
  for (const k of keys) {
    if (!cur) return value;
    cur = cur[k];
  }
  return cur?.value ?? value;
}

function main() {
  const tokens = readJson(TOKENS_PATH);
  const css = toCssVars(tokens);

  if (CHECK_ONLY) {
    if (!fs.existsSync(OUTPUT_PATH)) {
      console.error(`[guard] Missing ${OUTPUT_PATH}`);
      process.exit(2);
    }
    const existing = fs.readFileSync(OUTPUT_PATH, 'utf8');
    if (normalize(existing) !== normalize(css)) {
      console.error('[guard] CSS is out-of-sync with tokens. Run: npm run guard:tokens');
      process.exit(1);
    }
    console.log('[guard] CSS up-to-date.');
    return;
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, css, 'utf8');
  console.log(`[guard] Wrote ${OUTPUT_PATH}`);
}

function normalize(s) {
  return s.replace(/\r\n/g, '\n').trim();
}

main();
