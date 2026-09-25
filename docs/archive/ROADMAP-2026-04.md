# ROADMAP — Coustiq Website

---

## Phase 1: Grundstruktur & Funktionalität ✅
- [x] Hero-Sektion mit Bild, Headline, CTA
- [x] Über uns (About) Sektion
- [x] Leistungen (3 Karten: Bauakustik, Raumakustik, Schallimmissionsschutz)
- [x] Projekte / Referenzen (dunkle Sektion, 3 Featured Cards)
- [x] Dark Mode Toggle (Desktop + Mobile)
- [x] Mobile Menü (Fullscreen Slide-in)
- [x] Navbar Scroll-Effekt (Glassmorphism)
- [x] Scroll-Animationen (Intersection Observer)
- [x] Team-Sektion — Patrick (CTO) + Bernd (CEO) mit echten Fotos
- [x] Kontaktformular — Web3Forms eingebunden

---

## Phase 2: Assets & Branding ✅
- [x] Echtes Logo — SVG mit türkisen Balken (`logo-dark.svg`, `logo-white.svg`, `logo-emblem.svg`)
- [x] Favicon — `public/favicon.png` + SVG-Icon
- [x] Hero-Bild — `fullstack-marketer.webp`
- [x] About-Bild — `wieselthaler-aufenthaltsraum.webp`
- [x] Logo-Marquee — 9 echte Referenz-Logos
- [x] Alle Projektfotos lokal — 42 `.webp`-Dateien in `src/assets/`
- [x] SEO: `<meta description>` + OG-Tags auf allen Seiten
- [ ] **Impressum + Datenschutz** — Inhalte rechtlich prüfen lassen

---

## Phase 3: Seitenstruktur ✅
- [x] `leistungen.html` — Bento-Grid aller Leistungen + Prozesssektion
- [x] `referenzen.html` — filterbarer Grid (Alle / Raumakustik / Bauakustik / Gastronomie / Wohnbau / Industrie)
- [x] `projekt-wieselthaler.html` — Featured Detailseite
- [x] `projekt-schüller.html` — Featured Detailseite
- [x] `projekt-evva.html` — Featured Detailseite
- [x] Navigation durchgängig verdrahtet (alle Links aktiv)
- [ ] **Projekttexte finalisieren** — echte Beschreibungen, Kennwerte, Jahre für alle 3 Detailseiten

---

## Phase 4: Lyzer-Integration
- [x] Nav-Eintrag "Lyzer" mit Beta-Badge (Desktop + Mobile)
- [x] Lyzer-Section (`#lyzer`) als Placeholder
- [x] Lyzer als Leistungskarte auf `leistungen.html` eingebunden
- [ ] App-Screenshot einbauen
- [ ] CTA-Button auf echte URL setzen
- [ ] Entscheiden: Embed (iframe) oder externer Link?

---

## Phase 5: Inhalte verfeinern
- [x] Wieselthaler Galerie: alle 4 Fotos eingebaut
- [x] "Weitere Projekte"-Links auf allen 3 Detailseiten korrekt verdrahtet
- [x] Dead links in Projekt-Detailseiten beseitigt
- [ ] Projekt-Kategorien in `referenzen.html` überprüfen und ggf. korrigieren
- [ ] Private Kunden im Grid: echte Namen oder anonymisieren?
- [ ] **About-Sektion: Standort / Adresse ergänzen** ← wartet auf Input
- [ ] **About-Sektion: Gründungsjahr bestätigen** (aktuell "Seit 2018") ← wartet auf Input
- [ ] **Team: LinkedIn-URLs für Patrick und Bernd** ← wartet auf Input
- [ ] Weitere COP-Fotos für Galerie ← wartet auf Fotos
- [ ] Foto vom Impedanzrohr für Materialprüfungs-Karte (`leistungen.html#impedanzrohr`) ← wartet auf Foto

---

## Phase 6: SEO & Qualität
- [ ] OG-Bilder: eigene Vorschaubilder pro Seite (aktuell generische Fotos)
- [ ] Performance: `loading="lazy"` auf alle Bilder unterhalb des Folds
- [ ] Accessibility: ARIA-Labels, Keyboard-Navigation, Kontrastprüfung
- [ ] Cross-Browser Testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile Testing (iOS, Android)

---

## Phase 7: Launch
- [ ] `npm run build` → `dist/`-Ordner prüfen
- [ ] Domain + Hosting einrichten
- [ ] Analytics einbinden (Matomo oder Plausible — kein Google Analytics)
- [ ] Kontaktformular Bestätigungsmail testen (Web3Forms)
- [ ] Impressum + Datenschutz rechtlich finalisieren

---

## Backlog / Ideen
- Akustik-Visualisierung / Animation im Hero
- Interaktiver Vorher/Nachher-Vergleich (Schallpegel)
- Blog / Wissensartikel zu Akustik-Themen
- Mehrsprachigkeit (DE/EN)
- Kundenstimmen / Testimonials-Sektion
- Downloadbereich (Referenzliste PDF, Norm-Übersicht)

---

---

# AUDIT-UMSETZUNG — Coustiq Website
_Basis: Vollständiger UX/SEO/Conversion-Audit vom 2026-04-14_
_Ziel: Qualifizierte B2B-Projektanfragen, Vertrauensaufbau, organische Sichtbarkeit in Österreich_

---

## A1 — Quick Wins ✅ abgeschlossen

### A1.1 — Statistiken korrigieren und vereinheitlichen ✅
- [x] `leistungen.html` — „500+" auf „150+" korrigiert (konsistent mit `index.html`)
- [x] `index.html` — „100% Zufriedene Kunden" → „100% Abnahmemessung inklusive" (Icon: thumb_up → verified)

### A1.2 — EVVA Meta-Description korrigieren ✅
- [x] `projekt-evva.html` — Title + Meta-Description + OG korrigiert auf Industrieakustik/Produktionshalle
- [x] Neuer Title: „EVVA Produktionshalle — Industrieakustik Wien | Coustiq."
- [x] Neue Description: „Industrieakustik in der EVVA Produktionshalle Wien — Dauerschallpegel um 3,66 dB gesenkt, Nachhallzeit 2,5-fach reduziert. TRLV-3 konform."

### A1.3 — OG-Image auf Homepage ✅ kein Handlungsbedarf
- [x] `fullstack-marketer.webp` ist ein echtes Projektfoto — Fullstack Marketer, eine Marketing-Agentur, die ihr Tonstudio akustisch behandeln ließ
- [ ] **Projekt zur `referenzen.html` hinzufügen** (← auf Fotos + Details warten): Tonstudio / Raumakustik, Auftraggeber: Fullstack Marketer

### A1.4 — Testimonial ersetzen ✅
- [x] Ersetzt durch echtes Zitat von Elihay Berliner, Gründer C.O.P. Vienna
- [x] Avatar: Initialen-Placeholder „EB" (kein Foto vorhanden)
- [ ] Optional: Foto von Elihay Berliner einbauen sobald verfügbar

### A1.5 — Lyzer in Navigation ✅ kein Handlungsbedarf
- [x] Lyzer ist kurz vor Launch — Beta-Label ist nur während Entwicklung. Bleibt in Nav.

### A1.6 — Footer mit Kontaktdaten ergänzen ✅
- [x] Alle 9 Seiten — Adresse, Telefon (klickbar), E-Mail in Footer eingefügt
- [x] Konsistentes Design: Dark Footer (7 Seiten) + Light Footer (Impressum, Datenschutz)

### A1.7 — Click-to-Call auf mobilen Geräten ✅
- [x] Telefonnummer im Footer auf allen Seiten als `tel:+436691224957` verlinkt

---

## A2 — Kurzfristige Optimierungen ✅ abgeschlossen

### A2.1 — Sitemap.xml und Robots.txt ✅
- [x] `public/sitemap.xml` angelegt — alle 9 Seiten mit Priorities (1.0 / 0.9 / 0.8 / 0.7 / 0.2)
- [x] `public/robots.txt` angelegt — `User-agent: * Allow: /` + Sitemap-Verweis
- [ ] Sitemap in Google Search Console einreichen (nach Launch)

### A2.2 — Google Fonts selbst hosten ✅
- [x] Inter Variable + Manrope Variable (Latin) als woff2 in `public/fonts/`
- [x] `@font-face` mit `font-display: swap` in `style.css` (nach `@import "tailwindcss"`)
- [x] Google Fonts CDN-Links für Inter/Manrope aus allen 16 HTML-Dateien entfernt
- [ ] Material Symbols Outlined — noch CDN (Icon-Subsetting erforderlich, separater Schritt)

### A2.3 — Team-Qualifikationen ausbauen ✅
- [x] Patrick: Titel → „Toningenieur & Co-Founder", Badges „MSc TU Graz" + „AES Member", Bio überarbeitet
- [x] Bernd: Badges „Projektleitung" + „Industrie", Bio neu formuliert — industrieller Background als Kompetenz-Signal
- [ ] LinkedIn-URLs für Patrick und Bernd eintragen sobald verfügbar

### A2.4 — Hero-Bereich überarbeiten ✅
- [x] Headline: „Stille ist kein Zufall. Akustik ist planbar." → **„Akustik, die messbar funktioniert."** — Akzent auf „messbar funktioniert."
- [x] Hero-Bild: `fullstack-marketer.webp` bleibt (Tonstudio-Projekt, Option C)
- [ ] **Option B — Split-Layout (Foto rechts / Text links)** für spätere Adaption (im Code kommentiert)
- [ ] Trust-Badge erweitern: „ÖNORM B 8115-3 · ISO 3382 · Seit 2018 · Wien"

### A2.5 — Seitentitel optimieren ✅
- [x] `index.html` → „Akustik-Ingenieurbüro Wien — Raumakustik & Schallschutz | Coustiq"
- [x] `leistungen.html` → „Raumakustik, Schallschutz & Schallimmissionsschutz — Leistungen | Coustiq"
- [x] `referenzen.html` → „Akustik-Projekte & Referenzen Österreich | Coustiq"
- [x] `projekt-evva.html` → „EVVA Produktionshalle — Industrieakustik Wien | Coustiq."
- [x] Alle Detailseiten mit spezifischen, keyword-reichen Titeln versehen

### A2.6 — Interne Verlinkung systematisieren ✅ (inkl. index.html)
- [x] Alle Case Studies → je 1 kontextueller Link zur passenden Leistungsseite ergänzt
  - `projekt-wieselthaler.html` → `leistungen.html#raumakustik`
  - `projekt-cop.html` → `leistungen.html#raumakustik`
  - `projekt-evva.html` → `leistungen.html#schallimmissionsschutz`
  - `projekt-schüller.html` → `leistungen.html#raumakustik`
- [x] `leistungen.html` — „Mehr erfahren"-Links von den 3 Haupt-Leistungskarten zu den Detailseiten
- [x] `leistungen.html` — neuer Zielgruppen-Block (3 Karten) → `architekten.html`, `bautraeger.html`, `industrie.html`
- [x] **`index.html` Service-Kacheln** → direkt auf `raumakustik.html`, `schallschutz.html`, `schallimmissionsschutz.html`

### A2.7 — Kontaktformular mit qualifizierenden Feldern ✅
- [x] Dropdown „Projektbereich" (required) — inkl. Industrieakustik, Gutachten
- [x] Placeholder „Max Mustermann" → „Ihr Name", E-Mail-Placeholder angepasst
- [x] Button-Text → „Projekt besprechen"
- [x] Subtext: „Wir melden uns innerhalb von 1 Werktag."

---

## A3 — Mittelfristige Verbesserungen (laufend)

### A3.1 — Schema.org Markup ✅
- [x] `index.html` — `ProfessionalService`-JSON-LD (Name, Adresse, Tel, E-Mail, URL, serviceArea, employees)
- [x] `leistungen.html` — `ItemList` + `Service`-JSON-LD (4 Leistungen)
- [x] `projekt-wieselthaler.html` — `BreadcrumbList` + `Article`-JSON-LD
- [x] `projekt-cop.html` — `BreadcrumbList` + `Article`-JSON-LD
- [x] `projekt-evva.html` — `BreadcrumbList` + `Article`-JSON-LD
- [x] `projekt-schüller.html` — `BreadcrumbList` + `Article`-JSON-LD
- [x] Alle 6 neuen Seiten (Zielgruppen + Leistungen) — `BreadcrumbList` + `WebPage`/`Service`-JSON-LD

### A3.2 — Zielgruppen-Seiten aufbauen ✅ (Dummy-Content)
- [x] `architekten.html` — „Akustik von Anfang an. Für Architekten & Planer."
  - Sections: Pain Points, Prozess (4 Schritte), Passende Leistungen (3 Cards), Referenz-Teasers
  - Cross-Links: → `leistungen.html#raumakustik`, `leistungen.html#schallschutz`, `leistungen.html#digitale-tools`, `projekt-cop.html`, `projekt-wieselthaler.html`
- [x] `bautraeger.html` — „Schallschutz, der standhält."
  - Sections: Pain Points, Prozess (4 Schritte), Passende Leistungen, Trust-Strip (3 Punkte)
  - Cross-Links: → `leistungen.html#schallschutz`, `leistungen.html#schallimmissionsschutz`, `leistungen.html#raumakustik`
- [x] `industrie.html` — „Arbeitslärm messbar senken."
  - Sections: Key-Metrics-Strip (EVVA-Zahlen), Pain Points, Prozess (4 Schritte), Passende Leistungen, EVVA Case Study Detail
  - Cross-Links: → `leistungen.html#schallimmissionsschutz`, `leistungen.html#raumakustik`, `leistungen.html#impedanzrohr`, `projekt-evva.html`
- [ ] **Inhalte finalisieren** — echte Texte, Fotos, spezifische Details sobald verfügbar

### A3.3 — Dedizierte Leistungsseiten ✅ (Dummy-Content)
- [x] `raumakustik.html` — „Raumakustik. Messbar. Planbar."
  - Sections: Key-Metrics-Strip (−58%, −36%), Leistungsumfang (6 Cards), Prozess, Normen (ÖNORM B 8115-3 / ISO 3382 / OIB-RL5 / ISO 10534-2), Anwendungsbereiche (6 Kacheln), 3 Case Study Teasers
- [x] `schallschutz.html` — „Schallschutz, der sich beweist."
  - Sections: Bento-Grid (Luftschall-Hero + Trittschall + Holzbau + Anlagenlärm), Normen (ÖNORM B 8115 / ISO 16283 / OIB-RL5), Prozess, Cross-Links → Architekten & Bauträger
- [x] `schallimmissionsschutz.html` — „Lärm erfassen, bewerten, belegen."
  - Sections: Leistungsumfang (6 Cards), Prozess, Normen (ÖAL-RL3 / ÖNORM S 5021 / TRLV-3 / GewO), Use-Cases (4 typische Anlässe), EVVA-Referenz-Highlight
- [ ] **Inhalte finalisieren** — echte Texte, Fotos, spezifische Details sobald verfügbar

### A3.4 — Referenzseite inhaltlich ausbauen ✅
- [x] Featured-Reihenfolge: EVVA → Wieselthaler → COP (stärkste Kennzahl zuerst)
- [x] Featured-Cards: Beschreibungstext + Metrik-Chips (−3,66 dB / −60% RT60 / −36% Nachhall)
- [x] Alle 13 Grid-Karten mit kurzem Beschreibungstext
- [x] Büro-Filter ergänzt
- [x] Heuriger Schüller → Link zu `projekt-schüller.html`
- [x] BreadcrumbList + ItemList Schema.org

### A3.5 — FAQ-Seite ✅
- [x] `faq.html` — 11 Fragen in 4 Kategorien (Grundlagen, Ablauf, Behörden, Kosten)
- [x] Accordion (Vanilla JS), nur eine Frage gleichzeitig offen
- [x] FAQPage Schema.org JSON-LD
- [x] FAQ-Link im Footer aller 16 Seiten

### A3.6 — Lokale SEO stärken ✅
- [x] `<link rel="canonical">` auf allen 16 Seiten (Schüller percent-encoded)
- [x] Schema.org `index.html`: areaServed + NÖ/Steiermark, openingHoursSpecification Mo–Fr 09–18
- [x] `sitemap.xml` auf alle 16 Seiten erweitert, kommentiert, Schüller URL korrekt
- [x] Telefonnummer in Schema.org `index.html` korrigiert
- [ ] Google Business Profile anlegen/vervollständigen ← nach Launch

---

## A4 — Strategische Maßnahmen (langfristig)

### A4.1 — Fachbeitrags-Bereich einrichten
- [ ] Verzeichnisstruktur `/themen/` oder `/blog/` anlegen
- [ ] 5 Startartikel (Themenvorschläge aus Audit):
  - „Raumakustik im Büro: Was gilt nach ÖNORM B 8115-3?"
  - „Holzdecken und Schallschutz — häufige Fehler und Lösungen"
  - „Gastronomieakustik: Warum zu viel Hall Umsatz kostet"
  - „Lärmschutz am Arbeitsplatz: TRLV-3 und Gehörschutzpflicht"
  - „Schallschutzplanung im Neubau: Was Bauherren wissen müssen"

### A4.2 — Echte Kundenstimmen einpflegen
- [ ] Mindestens 2–3 Testimonials mit: Foto, vollständiger Name, Unternehmen, Projektreferenz
- [ ] Idealerweise: je eine Stimme aus Architektur, Industrie und Gastronomie
- [ ] `Review`-Schema (JSON-LD) implementieren

### A4.3 — Case Studies als vollständige Case Studies ausbauen
- [ ] Jeder Case Study: Problem → Analyse → Lösung → Messergebnis → Kundenstimme → CTA
- [ ] Weitere Projekte als vollständige Case Studies (Hypo NOE, LongTone, Fullstack Marketer als nächste Kandidaten)

### A4.4 — Performance & Accessibility
- [x] `loading="lazy"` auf alle Bilder unterhalb des Folds (alle 16 Seiten)
- [x] `loading="eager"` + `fetchpriority="high"` auf alle Hero-Bilder (LCP-Optimierung)
- [x] `<link rel="preload">` für Hero-Bilder auf allen Projekt-Detailseiten + index.html
- [x] ARIA-Labels: `theme-toggle-mobile`, `mobile-menu-btn` (+ `aria-expanded`/`aria-controls`), `close-menu-btn`
- [x] FAQ-Accordion: `aria-expanded`, `aria-controls`, `role="region"` dynamisch via JS
- [x] `aria-expanded` in `main.js` beim Mobile-Menu-Toggle synchronisiert
- [x] Google Fonts selbst hosten — Inter + Manrope als variable woff2 in `public/fonts/`, DSGVO-konform
- [x] Vite Security-Patch: 8.0.0 → 8.0.8 (`npm audit fix`)
- [ ] Kontrastcheck `#45C8A6` auf weißem Hintergrund (WCAG AA) ← nach Launch mit echtem Tool prüfen
- [ ] Core Web Vitals nach Launch messen

---

## Reihenfolge auf einen Blick

| Phase | Aufwand | Status |
|---|---|---|
| A1 — Quick Wins | 1–2 Tage | ✅ Abgeschlossen |
| A2 — Kurzfristig | 1–2 Wochen | ✅ Abgeschlossen (außer A2.2 deferred) |
| A3 — Mittelfristig | 1–2 Monate | ✅ Abgeschlossen (Content-Finalisierung wartet auf Input) |
| A4 — Strategisch | laufend | ⏳ Pending |
