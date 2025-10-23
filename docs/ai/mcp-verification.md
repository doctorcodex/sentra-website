# MCP Server Verification Guide

Developed by doctorcodex / drferdiiskandar

## Configuration Location

`.cursor/mcp.json` - MCP server configuration for Cursor

## Installed Servers

1. **21st.dev** - UI component builder/refiner/inspiration
2. **Context7** - Library documentation resolver
3. **Magic Logos** - Brand logo search (SVG/JSX/TSX)

## Verification Steps

### 1. Restart Cursor

**Required after adding/modifying MCP config:**

- Close all Cursor windows completely
- Reopen workspace: sentra-website
- Wait for MCP servers to initialize (check status bar)

### 2. Check MCP Status

**In Cursor:**

- Look for MCP indicator in status bar (bottom)
- Should show server count or connection status
- Click to see individual server status

### 3. Test Each Server

#### Test 21st.dev

In any agent chat:

```
/21 inspiration button compact
```

Expected: Returns component examples or confirms connection

#### Test Context7

```
Resolve library: next.js
```

Expected: Returns library ID for Next.js

#### Test Magic Logos

```
/logo GitHub
```

Expected: Returns GitHub logo in SVG/component format

### 4. Troubleshooting

**If servers don't connect:**

1. Check internet connection
2. Verify package names (might differ from config)
3. Check Cursor logs: Help → Show Logs
4. Try manual install: `npx -y @21st-dev/mcp-server --version`

**Common Issues:**

- Package names might be incorrect (check actual npm package names)
- Network firewall blocking npx downloads
- Cursor version doesn't support MCP fully
- Need to authenticate for certain servers

### 5. Manual Package Verification

Run in terminal to verify packages exist:

```bash
npx -y @21st-dev/mcp-server --help
npx -y @context7/mcp-server --help
npx -y @magic-mcp/logos --help
```

If any fail, package name is wrong - need to find correct npm package.

## Alternative: Use Cursor MCP Marketplace

If manual config fails:

1. Cursor Settings → MCP
2. Browse marketplace
3. Install from GUI
4. Verify in `.cursor/mcp.json` auto-updated

---

**Status:** MCP config file created. Restart Cursor required.
