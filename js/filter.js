/* Tab filter (menu categories + gallery): <div data-filter=".selector"> with <button data-k="key"> tabs; items carry data-cat */
document.querySelectorAll('[data-filter]').forEach((box) => {
  const items = document.querySelectorAll(box.dataset.filter);
  const tabs = box.querySelectorAll('[data-k]');
  tabs.forEach((tab) => tab.onclick = () => {
    tabs.forEach((t) => t.dataset.on = false);
    tab.dataset.on = true;
    const k = tab.dataset.k;
    items.forEach((it) => {
      const show = k === 'all' || it.dataset.cat === k;
      it.dataset.off = !show;
      if (show) { it.classList.remove('animate-rise'); void it.offsetWidth; it.classList.add('animate-rise'); }
    });
  });
});
