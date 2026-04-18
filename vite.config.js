import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:                    resolve(__dirname, 'index.html'),
        leistungen:              resolve(__dirname, 'leistungen.html'),
        referenzen:              resolve(__dirname, 'referenzen.html'),
        faq:                     resolve(__dirname, 'faq.html'),
        impressum:               resolve(__dirname, 'impressum.html'),
        datenschutz:             resolve(__dirname, 'datenschutz.html'),
        architekten:             resolve(__dirname, 'architekten.html'),
        bautraeger:              resolve(__dirname, 'bautraeger.html'),
        industrie:               resolve(__dirname, 'industrie.html'),
        gastronomie:             resolve(__dirname, 'gastronomie.html'),
        raumakustik:             resolve(__dirname, 'raumakustik.html'),
        schallschutz:            resolve(__dirname, 'schallschutz.html'),
        schallimmissionsschutz:  resolve(__dirname, 'schallimmissionsschutz.html'),
        'projekt-wieselthaler':  resolve(__dirname, 'projekt-wieselthaler.html'),
        'projekt-cop':           resolve(__dirname, 'projekt-cop.html'),
        'projekt-evva':          resolve(__dirname, 'projekt-evva.html'),
        'projekt-schueller':     resolve(__dirname, 'projekt-schüller.html'),
      },
    },
  },
})
