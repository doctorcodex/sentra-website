# MCP Setup — sentra-website

Ensure all MCP servers are enabled so agents (codex uix, codex guard, Sentra Engineer) work 100%.

## 1\) 21st.dev (Components)

* Purpose: fetch/refine UI components and inspiration
* In Cursor: Settings → MCP Servers → Add 21st.dev
* Verify: run “/21 inspiration button compact” in agent prompt

## 2\) Magic Logos

* Purpose: fetch brand logos in SVG/JSX/TSX
* In Cursor: Settings → MCP Servers → Add Magic Logos
* Verify: “/logo GitHub (SVG)” returns an SVG/component

## 3\) Vercel

* Purpose: docs search, deploys, logs
* In Cursor: Settings → MCP Servers → Add Vercel, authenticate
* Verify: Ask agent to “Search vercel docs: routing” or list projects

## 4\) Context7 (Library Docs)

* Purpose: up-to-date docs for libraries/frameworks
* In Cursor: Settings → MCP Servers → Add Context7
* Verify: “Resolve library: next.js”, then “get docs: routing”

## Troubleshooting

* Ensure internet access
* Re-auth where necessary (Vercel)
* Restart Cursor after adding servers

## Agents linked

* codex uix: 21st.dev + logos
* codex guard: 21st.dev refiner/inspiration
* codex architect: 21st.dev + logos + Vercel + Context7
