# STATUS — Coustiq Website

_Zuletzt aktualisiert: 2026-09-25. Vorgänger (bis April 2026): [docs/archive/STATUS-2026-04.md](docs/archive/STATUS-2026-04.md)_

**Live:** https://coustiq.com — Cloudflare Pages, Deploy bei Push auf `master`.
**Plan:** [ROADMAP.md](ROADMAP.md) (SEO- & Design-Audit 2026-09)

## Session-Log

### 2026-09-25 — Keyword-H1s (live, Commit 8186f65)
- **H1** auf 10 Seiten Suchbegriff in die erste Slogan-Zeile (Raumakustik in Wien, Bauakustik & Schallschutz, Lärmgutachten, …); Startseite behält Markenzeile, Badge „Ingenieurbüro für Akustik · Wien"
- EVVA-Badge „Industrieakustik"; Mobile-Fixes: EVVA-Hero-Überlauf, Impressum-E-Mail
- Neuer Prüfschritt: Overflow-Check aller Seiten bei 390/360 px
- Marketing (Google-Profil-Anleitung, LinkedIn, Instagram) zurückgestellt → eigener Ordner geplant, siehe ROADMAP H4

### 2026-09-25 — Quick Wins (Branch `seo-quickwins`)
- **H2** Startseite „Für wen wir arbeiten" (4 Zielgruppen); Footer-Linkraster auf allen Seiten; Links `/leistungen#…` → Detailseiten; Leistungen-Zielgruppen-Grid 2/4 Spalten
- **H3** Schema: Organisation mit `@id`, Logo (PNG), Bild, `sameAs` (LinkedIn, Facebook, firmenabc); Case-Study-Article mit Datum + funktionierendem Bild (vorher 404 auf `/src/assets/`); feste OG-Bilder `public/og/projekt-*.jpg`
- **M3** Datenschutz: Cloudflare + Web3Forms ergänzt (rechtliche Prüfung weiterhin empfohlen)
- **M4** Footer-Kontrast, Heading-Reihenfolge → Lighthouse Accessibility 100
- **M6** `projekt-detail.html` + `stitch template/` entfernt; `/home` → `/`
- Google-Unternehmensprofil: Einrichtungs-Paket in `docs/google-business-profile.md`

### 2026-09-25 — Audit + kritische SEO-Fixes (live seit 2026-09-25, Commit 2fa6731)
- Live-Audit: Lighthouse Mobile 95/94/100/100, Desktop 100/94/100/100; Probleme strukturell → ROADMAP K/H/M/D
- **K1** Clean URLs: alle internen Links root-absolut ohne `.html`; Canonical, `og:url`, JSON-LD, Sitemap (+ `lastmod`) auf Clean URLs
- **K3** `404.html` (noindex, Build-Input `notfound`) beendet Soft-404-Fallback; `public/_redirects` für alte WordPress-URLs (301 nur bei inhaltlicher Entsprechung)
- **K4** OG-Bild `public/og/coustiq-og.jpg` (1200×630) für 6 generische Seiten; Vite-Plugin `absolute-og-image` macht alle `og:image` absolut
- Getestet mit `wrangler pages dev dist`: 404-Status, 301-Redirects, 308 `.html`→Clean, Linkcheck 667 Referenzen ohne Fehler
- Preview-Deploys: `https://<branch>.coustiqwebsite.pages.dev` (Projektname ohne Bindestrich)
- **K2** www→Apex: Cloudflare Redirect Rule (301, Pfad + Query erhalten), per curl geprüft, keine Schleife
- **Offen:** Sitemap in Search Console neu einreichen; in 2–6 Wochen `site:coustiq.com` auf www-/WP-Reste prüfen

## Technischer Stand
```
Stack:     Vite 8 + Tailwind CSS 4 + Vanilla JS, Multi-Page (18 HTML inkl. 404)
Hosting:   Cloudflare Pages (Clean URLs automatisch, _redirects, _headers)
Links:     immer root-absolut ohne .html (/leistungen, /#contact) — nötig, weil 404.html unter beliebigen Pfaden ausgeliefert wird
Fonts:     Inter + Manrope self-hosted; Material Symbols noch Google-CDN (ROADMAP M1)
Formular:  Web3Forms
```
