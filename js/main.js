/* Entry point for every page: shared header/footer, icons, sprigs, scroll effects */
import { loadComponents } from './components.js';
import { injectSprite, hydrateIcons } from './icons.js';
import { renderSprigs } from './sprigs.js';
import { initHeader } from './header.js';
import { initReveal, initCounters } from './effects.js';

injectSprite();
await loadComponents(document.body.dataset.root || '');
renderSprigs();
hydrateIcons();
initHeader();
initReveal();
initCounters();
