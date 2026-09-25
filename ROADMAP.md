# ROADMAP — Coustiq Website (SEO- & Design-Audit 2026-09)

_Erstellt: 2026-09-25 auf Basis eines Audits der **Live-Seite** coustiq.com.
Vorgänger (Aufbau-Phase bis Launch): [docs/archive/ROADMAP-2026-04.md](docs/archive/ROADMAP-2026-04.md)_

**Ausgangslage:** Lighthouse Mobile Perf 95 / SEO 100, Desktop 100/100 — Geschwindigkeit ist kein Thema.
Die Probleme sind strukturell (URLs, Duplikate, Soft-404) und inhaltlich (dünne Seiten, Slogan-H1s).

## Risiko-Legende

| Stufe | Bedeutung |
|---|---|
| 🟢 niedrig | additiv oder trivial rückgängig zu machen; kein sichtbarer Effekt bei Fehler |
| 🟡 mittel | berührt viele Dateien oder das Routing; Fehler wären sichtbar (kaputter Link, Layout), aber per Revert sofort behebbar |
| 🔴 hoch | viele visuelle Stellen gleichzeitig oder schwer testbar; eigener Branch + Preview-Deploy Pflicht |

**Ranking-Risiko** ist separat angegeben: Titel/H1/URL-Änderungen können Rankings für 2–6 Wochen schwanken lassen.

---

## K — Kritisch: technische SEO ✅ live seit 2026-09-25

### K1 — Clean URLs überall · Risiko 🟡 mittel · Ranking-Risiko 🟢
Cloudflare Pages leitet `*.html` per 308 auf `/seite` um, aber Canonicals, `og:url`, Sitemap, Schema.org und alle internen Links zeigen noch auf `.html`.
- [x] Alle internen Links root-absolut ohne `.html` (`/leistungen`, `/#contact`, `/`)
- [x] Canonical + `og:url` + JSON-LD-URLs auf Clean URLs
- [x] `sitemap.xml` auf Clean URLs + `lastmod`
- **Warum mittel:** ~400 Link-Stellen in 17 Dateien, mechanisch per Skript. Absicherung: Linkcheck gegen `dist/` + `vite preview`.

### K2 — www → Apex-Redirect · Risiko 🟢 niedrig · Ranking-Risiko 🟢
`www.coustiq.com` und `coustiq.com` liefern beide 200; Google indexiert www, Canonical sagt Apex.
- [x] Cloudflare Dashboard → Rules → Redirect Rule: `www.coustiq.com/*` → `https://coustiq.com/${1}` (301, Query behalten) — **erledigt 2026-09-25** (Template „Redirect from WWW to root", DNS-Warnung ignoriert — www ist proxied)
- [x] Danach Search Console: Domain-Property prüfen, Sitemap neu einreichen
- **Warum niedrig:** eine Regel, per Klick deaktivierbar. Einziges Risiko: Redirect-Loop bei Fehlkonfiguration → direkt nach Anlage mit `curl -I` prüfen.

### K3 — Echte 404-Seite + Redirects für alte WordPress-URLs · Risiko 🟡 mittel · Ranking-Risiko 🟢
Jede unbekannte URL liefert die Startseite mit Status 200 (Soft-404). Google hat noch alte WP-URLs im Index (`/kontakt/`, `/faq-items/…`, `/shop-sidebar/` …).
- [x] `404.html` (noindex, Navigation + Links zu Leistungen/Referenzen/Kontakt)
- [x] `public/_redirects`: inhaltlich passende alte URLs → 301 auf neue Seiten (Liste aus Wayback-CDX); Demo-/Shop-Reste bewusst 404
- **Warum mittel:** Mit `404.html` endet der „alles zeigt die Startseite"-Fallback. Jeder Link, der heute nur zufällig funktioniert (alte Drucksachen, QR-Codes, Signaturen), zeigt danach 404 → vorher gegen bekannte Links prüfen.

### K4 — OG-/Social-Vorschau · Risiko 🟢 niedrig · Ranking-Risiko 🟢
- [x] `og:image` / `twitter:image` als absolute URL (`https://coustiq.com/...`)
- [x] Eigenes 1200×630 OG-Bild (ohne Fremdlogo) statt `fullstack-marketer.webp` auf 7 Seiten
- **Warum niedrig:** betrifft nur Meta-Tags, keine sichtbare Seite.

---

## H — Hoch: Inhalte & interne Verlinkung (braucht Input von Coustiq)

### H1 — Keyword-H1s · Risiko 🟢 technisch · Ranking-Risiko 🟡
- [ ] H1 = Suchbegriff + Ort, Slogan wird Subline (z. B. „Raumakustik in Wien — messbar geplant")
- [ ] Referenzen-H1 ist Duplikat der Startseiten-H2 → eigene H1
- Seitenweise Vorschläge vorbereiten, Freigabe durch Patrick/Bernd

### H2 — Interne Verlinkung · Risiko 🟢
- [ ] Startseite: Block „Für wen wir arbeiten" → Architekten / Bauträger / Industrie / Gastronomie
- [ ] Footer: Spalten Leistungen + Zielgruppen + Projekte
- [ ] Case Studies verlinken auf Detailseiten (`/raumakustik`) statt `leistungen#anker`

### H3 — Schema.org vervollständigen · Risiko 🟢
- [ ] `sameAs` (LinkedIn, Google-Unternehmensprofil, WKO, firmenabc), `logo`, `image`
- [ ] Article: `datePublished`, `image`; OfferCatalog-URLs auf Detailseiten
- Validierung: Google Rich Results Test

### H4 — Google-Unternehmensprofil · Risiko 🟢 (außerhalb der Website)
- [ ] Profil prüfen/anlegen, Kategorien, Fotos, Leistungen; Bewertungen aktiv einholen (nach jeder Abnahmemessung)

### H5 — Leistungsseiten ausbauen (500 → 1.000–1.500 Wörter) · Risiko 🟢
- [ ] Je Seite: Kostenrahmen, Dauer, Beispiel-Messergebnis, 3–4 seitenspezifische FAQs (+ FAQPage-Schema)
- Reihenfolge: Raumakustik → Schallschutz → Schallimmissionsschutz → Zielgruppenseiten

### H6 — Wissensbereich `/wissen` · Risiko 🟢 (rein additiv)
- [ ] Alte WP-Themen neu aufsetzen: DIN 18041, Schröderfrequenz, Absorptionsgrad, Strömungswiderstand, Raumakustik in der Gastronomie, Raumakustik & Gesundheit
- [ ] Redirects aus K3 danach auf die neuen Artikel umhängen
- [ ] Querverlinkung zu Lyzer (Rechner) und Leistungsseiten

### H7 — Weitere Case Studies · Risiko 🟢
- [ ] 4 von 13 Projekten haben eine eigene Seite — nächste Kandidaten mit Messwerten auswählen

---

## M — Mittel: Performance, Recht, Aufräumen

### M1 — Material Symbols durch Inline-SVG ersetzen · Risiko 🔴 hoch · Ranking-Risiko 🟢
Google-CDN-Iconfont = 1,1 MB (größte Einzeldatei) + IP-Übermittlung an Google (DSGVO).
- [ ] Verwendete Icons inventarisieren, als SVG-Sprite einbinden, CDN-Links entfernen
- [ ] Datenschutz-Absatz „Google Fonts" danach streichen
- **Warum hoch:** Icons auf allen 17 Seiten, Light + Dark Mode, Mobile-Menü, FAQ-Accordion (JS tauscht Icons). Nur mit Preview-Deploy und Seiten-für-Seiten-Sichtprüfung.

### M2 — Bilder responsiv · Risiko 🟡 mittel
- [ ] `srcset`/`sizes` + `width`/`height` für Content-Bilder; `wieselthaler-aufenthaltsraum.webp` (1,1 MB) neu komprimieren
- **Warum mittel:** `width/height` kann Seitenverhältnisse bei `object-cover`-Containern verändern.

### M3 — Datenschutz ergänzen · Risiko 🟢
- [ ] Web3Forms (Kontaktformular) und Cloudflare (Hosting/CDN, E-Mail-Schutz) als Auftragsverarbeiter nennen

### M4 — Barrierefreiheit · Risiko 🟢
- [ ] Footer-Kontrast (#6a7282 auf Dunkel = 2,9:1 → ≥ 4,5:1)
- [ ] Heading-Reihenfolge (h4 ohne h3)

### M5 — Umlaut-URL `/projekt-schüller` → `/projekt-schueller` · Risiko 🟡 mittel · Ranking-Risiko 🟡
- [ ] Datei umbenennen, 301 von alter URL; Redirect-Match mit Nicht-ASCII-Pfad auf Cloudflare vorher testen

### M6 — Aufräumen · Risiko 🟢
- [ ] `projekt-detail.html` (Vorlage, nicht im Build) und `stitch template/` entfernen oder nach `docs/` verschieben
- [ ] `CLAUDE.md` aktualisieren (beschreibt noch Single-Page)

---

## D — Design (kleine Eingriffe)

| # | Maßnahme | Risiko |
|---|---|---|
| D1 | Hero-Bild ersetzen: Projektfoto mit sichtbarer Akustik, ohne Fremdlogo, breiter | 🟢 (LCP-Preload mit anpassen) |
| D2 | Erfahrungszahlen vereinheitlichen („Seit 2018" / „15+" / „30+") | 🟢 |
| D3 | Teamfotos im gleichen Stil | 🟢 (wartet auf Fotos) |
| D4 | Kontaktformular: Eingabefelder heller / stärkerer Rahmen | 🟢 |
| D5 | Testimonial mit Foto oder NENI-Logo | 🟢 (wartet auf Asset) |
| D6 | Zielgruppen-Block auf Startseite (= H2) | 🟢 |

---

## Reihenfolge

1. **K1–K4** (dieser Branch `seo-audit-2026-09`) → Preview-Deploy → Merge → K2 im Dashboard → Search Console
2. **H2, H3, M3, M4, M6** — schnelle, risikoarme Code-Themen
3. **H1 + D1/D2** — nach Freigabe der Texte/Bilder
4. **M1** — eigener Branch, Preview-Pflicht
5. **H5, H6, H7** — laufend, Inhaltsarbeit
6. **M2, M5** — wenn Zeit

## Erfolgsmessung
- Search Console: indexierte Seiten = Sitemap-Seiten; keine „Soft 404"/„Alternative Seite mit Canonical"-Meldungen mehr
- `site:coustiq.com` zeigt nur noch Apex-URLs, keine WP-Reste (4–8 Wochen)
- Rankings: „Raumakustik Wien", „Akustiker Wien", „Schallschutz Gutachten Wien", „Lärmgutachten Wien"
