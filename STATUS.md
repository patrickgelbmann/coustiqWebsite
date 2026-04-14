# STATUS — Coustiq Website

_Zuletzt aktualisiert: 2026-04-14 (Session 3)_

## Aktueller Stand

**Phase 1–3 weitgehend abgeschlossen.** Vollständige Seitenstruktur steht: Startseite, Leistungsübersicht, 3 Featured Detailseiten, Referenz-Grid. Alle Fotos lokal, echtes Logo mit Türkis-Balken, Favicon und SEO-Tags auf allen Seiten.

---

## Session-Log

### 2026-04-12
- Team-Rollen korrigiert: Patrick = CTO, Bernd = CEO
- Echte Team-Fotos eingebaut (`patrick-coustiq.webp`, `bernd-coustiq.webp`)
- Lyzer-Section (`#lyzer`) + Nav-Eintrag mit Beta-Badge
- Logo-Marquee: 9 echte Referenz-Logos
- Marquee-Animation + Dark-Mode-Fix für Logos

### 2026-04-13 — Teil 1
- Hero-Bild → `fullstack-marketer.webp`, About-Bild → `wieselthaler-aufenthaltsraum.webp`
- Projektfotos aus Drive in `src/assets/` (best/webp-Ordner)
- `leistungen.html` erstellt (Bento-Grid + Prozesssektion)
- `projekt-detail.html` als erster Template-Entwurf

### 2026-04-13 — Teil 2
- Echtes Logo eingebunden: `logo-dark.svg`, `logo-white.svg` (Balken türkis `#45C8A6`)
- Favicon: `public/favicon.png` + `logo-emblem.svg`
- SEO: `<meta description>` + OG-Tags auf allen Seiten
- Navbar in allen Seiten auf echtes SVG-Logo umgestellt

### 2026-04-14 — Teil 2
- `projekt-wieselthaler.html`: echte RT60-Werte aus REW-Messdaten (1,35→0,54 s @ 500 Hz, −60%), Beschreibung korrigiert (Resonanzdecke MDF, Wände frei, Tischlerei Griessler), Jahr 2020
- `projekt-evva.html`: komplett neu — war falsch (Büro/DIN4109). Jetzt korrekt: Produktionshalle, Baffle 30-30, −3,66 dB SPL (83→80 dBA), RT60 2,5× reduziert, TRLV-3, 2024
- `referenzen.html`: EVVA-Tags korrigiert (Schallimmissionsschutz / Industrie)
- Memory-Datei angelegt: alle Drive-Quellpfade gespeichert für künftige Sessions

### 2026-04-14
- `projekt-schüller.html` → durch `projekt-cop.html` ersetzt (Featured-Slot #2)
- COP-Links überall nachgezogen: `index.html`, `referenzen.html`, `projekt-evva.html`
- Lyzer-Section: CTA auf "Demnächst verfügbar" (pulsierender Dot), App-Preview als blurred Coming-Soon-Card

### 2026-04-14 — Session 4
- Wieselthaler Galerie: alle 4 vorhandenen Fotos eingebaut (aufenthaltsraum, besprechungsraum, schulungsraum-1, schulungsraum-2)
- Wieselthaler Sidebar: Duplikat-Foto durch `wieselthaler-besprechungsraum.webp` ersetzt
- "Weitere Projekte"-Links korrigiert auf allen 3 Detailseiten:
  - Wieselthaler → EVVA + COP + Referenzen ✓
  - EVVA → COP + Wieselthaler + Referenzen ✓ (waren 2 tote Links + Duplikat)
  - COP war bereits korrekt verlinkt ✓
- Dead link "Mehr über unsere Philosophie" → jetzt `leistungen.html`
- Inhaltliche Lücken identifiziert (warten auf Input): Standort, Gründungsjahr bestätigen, LinkedIn-URLs Patrick & Bernd, weitere COP-Fotos

### 2026-04-14 — Session 3
- `leistungen.html` überarbeitet: Raumakustik zur großen Hero-Karte (col-8, dunkel, Badge "Kerngeschäft") mit 4 Bullet-Points + Anwendungsbereich-Tags
- Schallschutz bleibt inhaltlich gleich, jetzt col-4 mit Foto
- Schallimmissionsschutz auf col-4 angepasst
- Neue Karte: **Materialprüfung / Impedanzrohr** (ISO 10534-2, col-4)
- Neue Karte: **Digitale Akustik-Tools / Lyzer** (Beta-Badge, Link zu #lyzer, col-4)
- Individuelle Anforderungen auf col-12 (volle Breite) erweitert
- `index.html` Leistungsreihenfolge: Raumakustik → Schallschutz → Schallimmissionsschutz
- Link-Anker in index.html von `#bauakustik` auf `#schallschutz` korrigiert

### 2026-04-13 — Teil 3
- Alle 34 Projektfotos aus Drive-Ordner `first sort/webp/` in `src/assets/` kopiert (42 Dateien gesamt)
- Projekt-Struktur auf 2 Ebenen umgestellt:
  - **Featured (3 Detailseiten):** Wieselthaler, Heuriger Schüller, EVVA
  - **Referenz-Grid:** alle weiteren Projekte
- `projekt-wieselthaler.html` — Raumakustik, 4 Fotos
- `projekt-schüller.html` — Gastronomieakustik, 4 Fotos
- `projekt-evva.html` — Bauakustik + Raumakustik
- `referenzen.html` — filterbarer Grid (13 weitere Projekte, Filter: Alle / Raumakustik / Bauakustik / Gastronomie / Wohnbau / Industrie)
- Projektkarten in `index.html` vollständig auf echte Fotos + Links umgestellt
- "Portfolio öffnen" → `referenzen.html`, "ALLE LEISTUNGEN" → `leistungen.html`

---

## Was als nächstes ansteht

### Inhalte (warten auf Texte von Coustiq)
- [ ] Echte Projekttexte für die 3 Detailseiten (Aufgabe, Vorgehen, Ergebnis, Kennwerte)
- [ ] Kennwerte (Nachhallzeiten, Normen, Jahre) in Detailseiten präzisieren
- [ ] Projektkategorien in `referenzen.html` ggf. korrigieren (tags pro Karte)
- [ ] About-Sektion: Gründungsjahr, Standort, Unternehmensgeschichte

### Assets
- [ ] Lyzer-Screenshot für `#lyzer`-Section
- [ ] Lyzer CTA-URL eintragen sobald App deployed

### Technisch / Launch-vorbereitung
- [ ] Impressum + Datenschutz inhaltlich prüfen
- [ ] `npm run build` testen → `dist/`-Ordner prüfen
- [ ] Domain + Hosting einrichten

---

## Offene Fragen
- Lyzer: Embed (iframe) oder externer Link?
- Sollen private Kunden (Thurner, Zoubek etc.) im Referenz-Grid mit echten Namen bleiben oder anonymisiert werden?
- Wie viele Fotos sollen pro Detailseite in der Galerie erscheinen?
