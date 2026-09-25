import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'remove-css-crossorigin',
      enforce: 'post',
      transformIndexHtml(html) {
        // Safari stalls on CORS-mode CSS requests when the server doesn't return
        // Access-Control-Allow-Origin. CSS links don't need crossorigin for
        // same-origin assets — only <script type="module"> requires it.
        return html.replace(/<link rel="stylesheet" crossorigin href/g,
                            '<link rel="stylesheet" href');
      },
    },
    {
      name: 'absolute-og-image',
      enforce: 'post',
      // Social scrapers (LinkedIn, WhatsApp, Facebook) require absolute
      // og:image URLs; Vite emits hashed assets as root-relative paths.
      // Runs on the bundle because asset URLs are resolved after transformIndexHtml.
      generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === 'asset' && file.fileName.endsWith('.html')) {
            file.source = String(file.source).replace(
              /(<meta property="og:image" content=")(\/[^"]+")/g,
              '$1https://coustiq.com$2');
          }
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main:                    resolve(__dirname, 'index.html'),
        leistungen:              resolve(__dirname, 'leistungen.html'),
        referenzen:              resolve(__dirname, 'referenzen.html'),
        faq:                     resolve(__dirname, 'faq.html'),
        impressum:               resolve(__dirname, 'impressum.html'),
        datenschutz:             resolve(__dirname, 'datenschutz.html'),
        notfound:                resolve(__dirname, '404.html'),
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
