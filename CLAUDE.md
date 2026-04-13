# CLAUDE.md — Coustiq Website

## Projekt
Statische Marketing-Website für Coustiq, ein Ingenieurbüro für Akustik.
Stack: **Vite + Tailwind CSS v4 + Vanilla JS** — kein React, kein Framework.

## Struktur
```
index.html          — Einzige HTML-Seite (Single Page, Anchor-Navigation)
src/style.css       — Tailwind + Custom Properties (CSS vars für Theme)
src/main.js         — Vanilla JS: Dark Mode, Mobile Menu, Scroll-Animationen
src/assets/         — Statische Assets
public/             — Direkt kopierte Assets (favicon etc.)
```

## Seiten-Abschnitte (Anchor-IDs)
| ID         | Inhalt                        |
|------------|-------------------------------|
| (hero)     | Hero mit Bild + CTA           |
| `#about`   | Über Coustiq                  |
| `#services`| Leistungskarten (3 Kacheln)   |
| `#projects`| Referenzprojekte (dunkler BG) |
| `#team`    | Team-Sektion                  |
| `#contact` | Kontaktformular               |

## Design-System
- **Farben:** CSS Custom Properties in `style.css`, Light/Dark via `.dark` class auf `<html>`
- **Akzentfarbe:** `text-accent` / `bg-accent`
- **Schriften:** Inter (Body), Manrope (Headlines) — Google Fonts
- **Icons:** Material Symbols Outlined
- **Glassmorphism:** `.glassmorphism` Utility-Klasse in `style.css`

## Dev-Commands
```bash
npm run dev      # Vite Dev-Server
npm run build    # Production Build → dist/
npm run preview  # Build-Vorschau
```

## Arbeitsregeln
- Immer `ROADMAP.md` und `STATUS.md` lesen bevor gearbeitet wird
- Keine externen Abhängigkeiten hinzufügen ohne Absprache
- Bilder aktuell via Unsplash/Google-URLs — später durch echte Assets ersetzen
- `STATUS.md` nach jeder Arbeits-Session aktualisieren
