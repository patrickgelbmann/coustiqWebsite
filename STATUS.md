# STATUS — Coustiq Website

_Zuletzt aktualisiert: 2026-04-12_

## Aktueller Stand

**Phase 1 + 2 weitgehend fertig.** Team-Fotos, Rollen, Logos alle real. Lyzer-Section als Placeholder angelegt. Kontaktformular live.

## Was zuletzt gemacht wurde (Session 2026-04-12 — Teil 2)

- Team-Rollen korrigiert: Patrick = CTO, Bernd = CEO
- Echte Team-Fotos eingebaut (`src/assets/patrick-coustiq.webp`, `bernd-coustiq.webp`)
- Lyzer-Section (`#lyzer`) + Nav-Eintrag mit Beta-Badge angelegt
- Logo-Marquee komplett neu: 9 echte Referenz-Logos aus Google Drive
- Marquee-Animation korrekt implementiert (war vorher nicht definiert), pausiert bei Hover
- Dark-Mode-Fix für Logos (`mix-blend-multiply` / `mix-blend-screen`)
- HYPO NOE Logo via CSS-Clip auf korrekte Anzeigehöhe gebracht

## Was als nächstes ansteht

1. **SEO / Meta-Tags** — kein `<meta description>`, kein OG-Tags (WhatsApp/LinkedIn Vorschau) → sofort machbar
2. **Favicon** — fehlt noch, Coustiq-Logo ist im Drive vorhanden
3. **Projektbilder** — alle 3 Projektkarten noch Unsplash/Google-Placeholder
4. **Lyzer** — Screenshot + echte URL für den CTA-Button
5. **Hero-Bild** — `src/assets/hero.png` liegt schon lokal, noch nicht eingebunden

## Offene Fragen

- Projektbilder: echte Fotos vorhanden oder weiter Placeholder bis Launch?
- Lyzer: Embed (iframe) oder externer Link?
- Hero-Bild: `hero.png` verwenden oder anderes?
