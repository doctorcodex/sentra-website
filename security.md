# Security Policy

## Reporting a Vulnerability

If you discover a security issue, please responsibly disclose it by emailing:

- security@doctorcodex.dev (preferred)

Please include:
- A clear description of the issue and potential impact
- Steps to reproduce or a proof-of-concept (if available)
- Affected versions/commit hash

We aim to acknowledge reports within 72 hours and provide regular status updates until resolution. Do not publicly disclose vulnerabilities before a fix is released.

## Scope & Principles
- No secrets in repo; use environment variables and secret managers
- Dependencies pinned; periodic audits (`npm audit`)
- Input validation at boundaries; output encoding to prevent XSS/SSTI
- Authentication via signed JWT/OIDC; authorization via RBAC/ABAC
- Rate limiting on public endpoints; circuit breakers for external calls

Thank you for helping keep this project and its users safe.


