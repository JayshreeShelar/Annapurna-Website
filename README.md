# Annapurna Pure Veg Restaurant

Static site, Tailwind CSS (CDN). Header and footer are shared components.

```
annapurna/
├── index.html  story.html  menu.html  specials.html  gallery.html  reservations.html  contact.html
├── components/   header.html, footer.html      (common on every page)
├── js/
│   ├── tailwind.config.js   colors, fonts, animations, buttons/backgrounds
│   ├── icons.js             SVG icon set
│   └── main.js              everything else (header/footer loader, menu, slider, filter, lightbox, FAQ, forms)
└── assets/       logo.svg, img/
```

All links and file paths are relative to the project root (no `../`, no sub-folders for pages).

## Run
Header/footer are loaded with `fetch`, so use a local server:
- VS Code: right click `index.html` -> **Open with Live Server**
- or `python -m http.server 8000` and open http://localhost:8000

## Add a page
Copy any page, change `data-page` on `<body>`, and add one link in `components/header.html`.
