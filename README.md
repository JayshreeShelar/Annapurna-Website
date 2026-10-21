# Annapurna Pure Veg Restaurant

Static site, Tailwind CSS (CDN). No ordering or booking: every "Enquire" button and form opens WhatsApp.
Works by double-clicking `index.html` (no server needed; internet is needed for Tailwind, fonts and the map).

```
annapurna/
├── index.html  story.html  menu.html  specials.html  gallery.html  enquiry.html  contact.html
├── components/   header.js, footer.js      (common header/footer, edit once, shows on every page)
├── js/
│   ├── tailwind.config.js   colors, fonts, animations, buttons/backgrounds
│   ├── icons.js             SVG icon set
│   └── main.js              everything else (menu, slider, filter, lightbox, FAQ, WhatsApp enquiries)
└── assets/       logo.svg, img/
```

## WhatsApp number
In `js/main.js`: `const WHATSAPP = '919876543210';` (country code + number, digits only).

## Edit header / footer
Edit `components/header.js` or `components/footer.js` (the HTML is inside the backticks).

## Add a page
Copy any page, change `data-page` on `<body>`, add a link in `components/header.js`.
