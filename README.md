# Annapurna Pure Veg Restaurant

Tailwind CSS (CDN) static website. Header and footer are shared components.

```
annapurna/
├── index.html
├── pages/            story, menu, specials, gallery, reservations, contact
├── components/       header.html, footer.html   (common, loaded on every page)
├── js/
│   ├── tailwind.config.js   colors, fonts, animations, button/background components
│   ├── boot.js  main.js  components.js  icons.js  sprigs.js  header.js  effects.js
│   └── home.js  filter.js  lightbox.js  faq.js  forms.js   (page-specific)
└── assets/
    ├── logo.svg
    └── img/          all photos (see README.txt inside)
```

## Run
Header/footer are loaded with `fetch`, so open the site through a local server
(double-clicking index.html will NOT show the header/footer):

- VS Code: right click `index.html` -> **Open with Live Server**
- or: `python -m http.server 8000` in this folder, then open http://localhost:8000

Needs internet for the Tailwind CDN, Google Fonts and the Google map.

## Edit
- Header / footer / menu links: `components/header.html`, `components/footer.html`
- Colors, fonts, animations: `js/tailwind.config.js`
- Add a page: copy a file from `pages/`, set `data-page` on `<body>` and add a link in header.html
