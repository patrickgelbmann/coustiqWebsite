# STATUS — Coustiq Website

_Zuletzt aktualisiert: 2026-04-15 (Performance, Fonts, Accessibility, Verlinkung)_

## Aktueller Stand

**A1 + A2 + A3 vollständig abgeschlossen. A4.4 Performance & Accessibility abgeschlossen.**
Google Fonts selbst gehostet (DSGVO). Hero-Bilder optimiert (LCP). ARIA-Labels gesetzt. index.html → Leistungsdetailseiten verlinkt. Website ist technisch launch-bereit — offen: Content-Finalisierung der 6 Dummy-Seiten, Lyzer-URL, Rechtscheck Impressum/Datenschutz.

---

## Seitenübersicht (aktuell 15 HTML-Seiten)

| Datei | Typ | Status |
|---|---|---|
| `index.html` | Startseite | ✅ Final |
| `leistungen.html` | Leistungsübersicht | ✅ Final + Zielgruppen-Block + "Mehr erfahren"-Links |
| `referenzen.html` | Referenz-Grid | ✅ Final (Ausbau geplant A3.4) |
| `projekt-wieselthaler.html` | Case Study | ✅ Final |
| `projekt-cop.html` | Case Study | ✅ Final |
| `projekt-evva.html` | Case Study | ✅ Final |
| `projekt-schüller.html` | Case Study | ✅ Final |
| `architekten.html` | Zielgruppe | 🔄 Dummy-Content |
| `bautraeger.html` | Zielgruppe | 🔄 Dummy-Content |
| `industrie.html` | Zielgruppe | 🔄 Dummy-Content |
| `raumakustik.html` | Leistung Detail | 🔄 Dummy-Content |
| `schallschutz.html` | Leistung Detail | 🔄 Dummy-Content |
| `schallimmissionsschutz.html` | Leistung Detail | 🔄 Dummy-Content |
| `faq.html` | FAQ | ✅ Final (Inhalte adaptierbar) |
| `impressum.html` | Legal | ✅ (rechtlich noch zu prüfen) |
| `datenschutz.html` | Legal | ✅ (rechtlich noch zu prüfen) |

---

## Session-Log

### 2026-04-12
- Team-Rollen korrigiert: Patrick = CTO, Bernd = CEO
- Echte Team-Fotos eingebaut (`patrick-coustiq.webp`, `bernd-coustiq.webp`)
- Lyzer-Section (`#lyzer`) + Nav-Eintrag mit Beta-Badge
- Logo-Marquee: 9 echte Referenz-Logos

### 2026-04-13 — Teil 1
- Hero-Bild → `fullstack-marketer.webp`, About-Bild → `wieselthaler-aufenthaltsraum.webp`
- Projektfotos aus Drive in `src/assets/`
- `leistungen.html` erstellt (Bento-Grid + Prozesssektion)

### 2026-04-13 — Teil 2
- Echtes Logo eingebunden: `logo-dark.svg`, `logo-white.svg`
- Favicon: `public/favicon.png` + `logo-emblem.svg`
- SEO: `<meta description>` + OG-Tags auf allen Seiten

### 2026-04-13 — Teil 3
- Alle 34 Projektfotos aus Drive eingebaut
- `projekt-wieselthaler.html`, `projekt-schüller.html`, `projekt-evva.html` erstellt
- `referenzen.html` — filterbarer Grid (13 Projekte)

### 2026-04-14 — Session 3
- `leistungen.html`: Bento-Grid überarbeitet, neue Karten Materialprüfung + Lyzer/Digitale Tools

### 2026-04-14 — Session 4
- Wieselthaler Galerie: alle 4 Fotos eingebaut
- Dead links auf allen 3 Detailseiten beseitigt

### 2026-04-14 — Session 5
- `projekt-evva.html`: korrekte Inhalte (Produktionshalle, TRLV-3, −3,66 dB, RT60 2,5×)
- `projekt-cop.html` ersetzt `projekt-schüller.html` im Featured-Slot

### 2026-04-15 — Audit-Umsetzung A1
- EVVA: Title + Meta-Description + OG auf Industrieakustik korrigiert
- Footer: Adresse, Telefon (klickbar), E-Mail auf allen 9 Seiten ergänzt
- Testimonial: ersetzt durch echtes Zitat von Elihay Berliner (C.O.P. Vienna)
- Statistiken: „500+" → „150+" auf `leistungen.html`
- Hero-Stat: „100% Zufriedene Kunden" → „100% Abnahmemessung inklusive"
- Headline: → „Akustik, die messbar funktioniert."
- Team: Patrick „MSc TU Graz" + „AES Member", Bernd Industrie-Background
- Kontaktformular: Dropdown „Projektbereich", qualifizierende Felder, Subtext
- `public/sitemap.xml` + `public/robots.txt` angelegt

### 2026-04-15 — Performance, Fonts, Accessibility
- `loading="eager"` + `fetchpriority="high"` + `<link rel="preload">` auf allen Hero-Bildern
- `loading="lazy"` auf allen Below-fold-Bildern nachgezogen (inkl. EVVA war fälschlich lazy auf Hero)
- Bugfix: `og:url` in `projekt-wieselthaler.html` zeigte auf `projekt-detail.html`
- Google Fonts selbst hosten: Inter Variable + Manrope Variable in `public/fonts/`, CDN-Links entfernt
- Vite 8.0.0 → 8.0.8 (Security-Patch via `npm audit fix`)
- ARIA: `aria-label` auf `theme-toggle-mobile`, `mobile-menu-btn`, `close-menu-btn`
- ARIA: `aria-expanded`/`aria-controls` auf Mobile-Menu-Button + sync in `main.js`
- ARIA: FAQ-Accordion mit `aria-expanded`, `aria-controls`, `role="region"` (dynamisch via JS)
- `index.html` Service-Kacheln → direkt auf `raumakustik.html`, `schallschutz.html`, `schallimmissionsschutz.html`

### 2026-04-15 — A3.6 Lokale SEO
- `<link rel="canonical">` auf allen 16 Seiten ergänzt (Schüller: percent-encoded)
- Schema.org `index.html`: Telefon korrigiert, `areaServed` + NÖ/Steiermark, `openingHoursSpecification` Mo–Fr 09–18
- `sitemap.xml`: alle 16 Seiten (vorher 9), kommentiert nach Typ, Schüller URL percent-encoded

### 2026-04-15 — A3.5 FAQ-Seite erstellt
- `faq.html` neu erstellt — 11 Fragen in 4 Kategorien (Grundlagen, Ablauf, Behörden, Kosten)
- Accordion-Interaktion (Vanilla JS, add/remove Icon)
- Schema.org FAQPage JSON-LD mit allen 10 Fragen als Question/Answer
- FAQ-Link im Footer aller 15 Seiten ergänzt
- Telefonnummer auf allen Seiten: → +43 664 807 887 14

### 2026-04-15 — A3.4 Referenzseite ausgebaut
- Featured-Reihenfolge: EVVA → Wieselthaler → COP (stärkste Kennzahl zuerst)
- Featured-Cards: Beschreibungstext + Metrik-Chips (−3,66 dB / TRLV-3 / −60% RT60 / −36% Nachhall)
- Grid-Cards: alle 13 Karten mit kurzem Beschreibungstext ergänzt
- Filter-Bar: Büro-Filter hinzugefügt
- Heuriger Schüller: Grid-Karte → Link zu `projekt-schüller.html` (mit Hover-Overlay)
- Schema.org BreadcrumbList + ItemList bereits in Vorseession ergänzt

### 2026-04-15 — Audit-Umsetzung A2 + A3
- Seitentitel + OG-Titles auf allen Seiten auf keyword-reiche Versionen aktualisiert
- Case Studies: je 1 kontextueller Link zur passenden Leistungsseite (A2.6)
- Schema.org JSON-LD auf allen Seiten (ProfessionalService, Service, BreadcrumbList, Article, WebPage)
- **6 neue Seiten erstellt** (alle mit Schema.org, konsistenter Navbar/Footer, `animate-on-scroll`):
  - `architekten.html` — Zielgruppe Architekten & Planer
  - `bautraeger.html` — Zielgruppe Bauträger & Entwickler
  - `industrie.html` — Zielgruppe Industrie & Produktion (inkl. EVVA-Case-Study-Detail)
  - `raumakustik.html` — Leistungsdetailseite Raumakustik (Normen, Anwendungsbereiche, 3 Teasers)
  - `schallschutz.html` — Leistungsdetailseite Schallschutz (Bento-Grid, Holzbau-Expertise)
  - `schallimmissionsschutz.html` — Leistungsdetailseite Immissionsschutz (Gutachten, GewO, TRLV-3)
- `leistungen.html`: „Mehr erfahren"-Links von 3 Leistungskarten zu Detailseiten hinzugefügt
- `leistungen.html`: neuer Zielgruppen-Block (3 Cards → architekten/bautraeger/industrie)
- **Offen/deferred**: Verlinkung von `index.html` auf neue Seiten — bewusst noch nicht entschieden (Homepage-Flow)

---

## Offene Punkte (warten auf Input von Coustiq)

| Punkt | Wartet auf |
|---|---|
| Foto Elihay Berliner (Testimonial) | Foto von Elihay Berliner |
| LinkedIn-URLs Patrick + Bernd | URLs von Patrick/Bernd |
| Fullstack Marketer → `referenzen.html` | Projektfotos + Details |
| Inhalte `architekten.html`, `bautraeger.html`, `industrie.html` | Texte + Fotos |
| Inhalte `raumakustik.html`, `schallschutz.html`, `schallimmissionsschutz.html` | Texte + Fotos |
| Foto Impedanzrohr für `leistungen.html#impedanzrohr` | Foto |
| COP-Galerie (weitere Fotos) | Fotos |
| Lyzer-Screenshot + URL | App-Launch |

---

## Entscheidungen offen

- **`index.html` → neue Seiten verlinken?** Deferred. Frage: wirkt die Homepage überladen wenn Services direkt auf Detailseiten zeigen? Alternativ: nur Leistungen-Link bleibt, Nutzer gelangt über `leistungen.html` zu den Detailseiten.
- **Google Fonts selbst hosten (A2.2):** Aufwand ~1–2h, DSGVO-Aspekt relevant vor Launch. Spätestens dann umsetzen.
- **FAQ:** Eigene Seite `/faq.html` oder Sektion auf `index.html`?
- **Lyzer:** Embed (iframe) oder externer Link nach Launch?
- **Private Kunden in `referenzen.html`:** echte Namen oder anonymisieren?

---

## Technischer Stand

```
Stack:         Vite v8.0.8 + Tailwind CSS v4.2.2 + Vanilla JS
Seiten:        16 HTML-Dateien (alle mit canonical, Schema.org, OG-Tags, ARIA-Labels)
Fonts:         Self-hosted woff2 in public/fonts/ (Inter Variable, Manrope Variable)
Assets:        42 .webp-Dateien in src/assets/
Fonts:         Google Fonts CDN (Inter, Manrope, Material Symbols)
Kontakt:       Web3Forms
Schema.org:    Alle relevanten Seiten vollständig
Sitemap:       public/sitemap.xml (15 Seiten → nach Launch auf 15 aktualisieren)
Robots:        public/robots.txt
```
