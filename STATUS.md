# STATUS — Coustiq Website

_Zuletzt aktualisiert: 2026-09-25. Vorgänger (bis April 2026): [docs/archive/STATUS-2026-04.md](docs/archive/STATUS-2026-04.md)_

**Live:** https://coustiq.com — Cloudflare Pages, Deploy bei Push auf `master`.
**Plan:** [ROADMAP.md](ROADMAP.md) (SEO- & Design-Audit 2026-09)

## Session-Log

### 2026-09-25 — Audit + kritische SEO-Fixes (live seit 2026-09-25, Commit 2fa6731)
- Live-Audit: Lighthouse Mobile 95/94/100/100, Desktop 100/94/100/100; Probleme strukturell → ROADMAP K/H/M/D
- **K1** Clean URLs: alle internen Links root-absolut ohne `.html`; Canonical, `og:url`, JSON-LD, Sitemap (+ `lastmod`) auf Clean URLs
- **K3** `404.html` (noindex, Build-Input `notfound`) beendet Soft-404-Fallback; `public/_redirects` für alte WordPress-URLs (301 nur bei inhaltlicher Entsprechung)
- **K4** OG-Bild `public/og/coustiq-og.jpg` (1200×630) für 6 generische Seiten; Vite-Plugin `absolute-og-image` macht alle `og:image` absolut
- Getestet mit `wrangler pages dev dist`: 404-Status, 301-Redirects, 308 `.html`→Clean, Linkcheck 667 Referenzen ohne Fehler
- Preview-Deploys: `https://<branch>.coustiqwebsite.pages.dev` (Projektname ohne Bindestrich)
- **Offen K2:** www→Apex-Redirect im Cloudflare-Dashboard (manuell), danach Sitemap in Search Console neu einreichen

## Technischer Stand
```
Stack:     Vite 8 + Tailwind CSS 4 + Vanilla JS, Multi-Page (18 HTML inkl. 404)
Hosting:   Cloudflare Pages (Clean URLs automatisch, _redirects, _headers)
Links:     immer root-absolut ohne .html (/leistungen, /#contact) — nötig, weil 404.html unter beliebigen Pfaden ausgeliefert wird
Fonts:     Inter + Manrope self-hosted; Material Symbols noch Google-CDN (ROADMAP M1)
Formular:  Web3Forms
```
