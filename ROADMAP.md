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
- [ ] Favicon + Apple Touch Icon für alle Seiten ✓ (erledigt)
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
- [ ] `<meta description>` für neue Seiten prüfen und optimieren
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
