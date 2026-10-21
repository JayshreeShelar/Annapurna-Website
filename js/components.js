/* Loads shared HTML partials: <div data-include="header"></div>  ->  components/header.html
   {{root}} inside a partial is replaced with the page's relative root ("" or "../"). */
export async function loadComponents(root) {
  const slots = [...document.querySelectorAll('[data-include]')];
  await Promise.all(slots.map(async (el) => {
    try {
      const res = await fetch(`${root}components/${el.dataset.include}.html`);
      if (!res.ok) throw new Error(res.status);
      el.outerHTML = (await res.text()).replaceAll('{{root}}', root);
    } catch (err) {
      console.error(`[Annapurna] Could not load component "${el.dataset.include}". Open the site through a local server (e.g. VS Code Live Server), not by double-clicking the file.`, err);
      el.outerHTML = `<p style="position:relative;z-index:99;background:#fff3cd;color:#664d03;padding:10px 16px;font:14px sans-serif">Run this site with a local server (VS Code "Live Server" or <code>python -m http.server</code>) so the shared header/footer can load.</p>`;
    }
  }));
}
