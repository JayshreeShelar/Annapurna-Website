/* Annapurna - Tailwind (CDN) config: theme tokens, keyframes and reusable components.
   Loaded right after https://cdn.tailwindcss.com in every page. */
const EASE = 'cubic-bezier(.2,.7,.2,1)';

tailwind.config = {
  theme: {
    screens: { sm: '641px', lg: '1021px' },
    extend: {
      colors: {
        brand: { DEFAULT: '#0e3b29', dark: '#082418', mid: '#17503a', light: '#1f6347' },
        gold: { DEFAULT: '#d9b45a', light: '#f0dc9e', dark: '#b8923a' },
        cream: '#f7f1e3',
        sand: '#efe5cc',
        ivory: '#fffdf7',
        ink: '#15332a',
        muted: '#5c6d63',
        line: '#e3d9bd',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        script: ["'Mrs Saint Delafield'", 'Allura', 'cursive'],
      },
      boxShadow: { card: '0 18px 40px -18px rgba(8,36,24,.35)' },
      transitionTimingFunction: { soft: EASE },
      keyframes: {
        sway: {
          '0%,100%': { transform: 'rotate(var(--r,0deg)) translateY(0)' },
          '50%': { transform: 'rotate(calc(var(--r,0deg) + 5deg)) translateY(-8px)' },
        },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        ring: { '0%': { boxShadow: '0 0 0 0 rgba(217,180,90,.55)' }, '100%': { boxShadow: '0 0 0 16px rgba(217,180,90,0)' } },
        kenburns: { '0%': { transform: 'scale(1.04)' }, '100%': { transform: 'scale(1.14) translate(-1.5%,-1%)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        pageIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        rise: { from: { opacity: '0', transform: 'translateY(34px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: {
        sway: 'sway 7s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        floaty6: 'floaty 6s ease-in-out infinite',
        spin18: 'spin 18s linear infinite',
        spin24: 'spin 24s linear infinite',
        spin30: 'spin 30s linear infinite',
        kenburns: 'kenburns 9s ease-out forwards',
        marquee: 'marquee 28s linear infinite',
        rise: `rise .9s ${EASE} both`,
        pageIn: 'pageIn .7s ease both',
        ring: 'ring 1s infinite',
      },
    },
  },

  plugins: [
    function ({ addBase, addComponents }) {
      /* ---- base ---- */
      addBase({
        html: { scrollBehavior: 'smooth' },
        '::selection': { background: '#d9b45a', color: '#082418' },
        'h1,h2,h3,h4,h5': { fontFamily: "'Playfair Display',Georgia,serif", fontWeight: '500', lineHeight: '1.15' },
        '@keyframes shine': { '0%': { left: '-80%' }, '100%': { left: '130%' } },
      });

      /* ---- components ---- */
      addComponents({
        /* icons: <i data-i="leaf"> */
        '.ic': { width: '1em', height: '1em', display: 'inline-block', verticalAlign: 'middle', flex: 'none' },
        '.ic svg': { width: '100%', height: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round' },

        /* textured section backgrounds */
        '.paper-bg': {
          backgroundColor: '#f7f1e3',
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' seed='4'/%3E%3CfeColorMatrix values='0 0 0 0 .55 0 0 0 0 .45 0 0 0 0 .25 0 0 0 .08 0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E"),` +
            'radial-gradient(ellipse at 12% 6%,rgba(226,210,170,.5),transparent 42%),radial-gradient(ellipse at 92% 60%,rgba(226,210,170,.4),transparent 42%)',
        },
        '.dark-bg': { background: 'linear-gradient(160deg,#0f3d2a,#082418 75%)', color: '#fff', overflow: 'hidden' },
        '.leaf-bg::before': {
          content: '""', position: 'absolute', inset: '0', pointerEvents: 'none', opacity: '.55',
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160' fill='none' stroke='%23d9b45a' stroke-opacity='.10' stroke-width='1.2'%3E%3Cpath d='M20 140C30 100 50 70 90 40c-6 30-12 60-70 100z'/%3E%3Cpath d='M20 140C45 105 65 80 90 40'/%3E%3Cpath d='M110 150c8-18 20-30 38-40-3 16-10 30-38 40z'/%3E%3C/svg%3E")`,
        },
        '.leaf-bg > *': { position: 'relative', zIndex: '1' },

        /* scroll-reveal (data-a="up|down|left|right|zoom|flip"); uses individual transform props so hover transforms still work */
        '.js [data-a]': {
          opacity: '0', willChange: 'transform,opacity',
          transitionProperty: 'opacity,translate,scale,rotate', transitionDuration: '.9s',
          transitionTimingFunction: EASE, transitionDelay: 'var(--d,0s)',
        },
        '.js [data-a=up]': { translate: '0 44px' },
        '.js [data-a=down]': { translate: '0 -34px' },
        '.js [data-a=left]': { translate: '-60px 0' },
        '.js [data-a=right]': { translate: '60px 0' },
        '.js [data-a=zoom]': { scale: '.88' },
        '.js [data-a=flip]': { translate: '0 30px', rotate: 'x -18deg' },
        '.js [data-a].in': { opacity: '1', translate: 'none', scale: 'none', rotate: 'none' },

        /* buttons */
        '.btn': {
          position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px',
          borderRadius: '50px', background: '#d9b45a', color: '#082418', fontWeight: '500', fontSize: '14.5px',
          letterSpacing: '.3px', overflow: 'hidden', boxShadow: '0 10px 24px -10px rgba(217,180,90,.7)',
          transition: `translate .35s ${EASE},box-shadow .35s,color .35s,background .35s`,
        },
        '.btn::before': {
          content: '""', position: 'absolute', top: '0', left: '-80%', width: '50%', height: '100%',
          background: 'linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent)', transform: 'skewX(-20deg)',
        },
        '.btn:hover::before': { animation: 'shine .8s' },
        '.btn:hover': { translate: '0 -3px', background: '#f0dc9e', boxShadow: '0 16px 30px -10px rgba(217,180,90,.85)' },
        '.btn .ic': { transition: `transform .35s ${EASE}` },
        '.btn:hover .ic': { transform: 'translateX(5px)' },
        '.btn-sm': { padding: '9px 22px', fontSize: '13.5px' },
        '.btn-dk': { background: '#0e3b29', color: '#f0dc9e', boxShadow: '0 10px 24px -10px rgba(8,36,24,.7)' },
        '.btn-dk:hover': { background: '#d9b45a', color: '#082418' },
        '.btn-ghost': { background: 'transparent', color: '#fff', border: '1.5px solid #d9b45a', boxShadow: 'none' },
        '.btn-ghost:hover': { background: '#d9b45a', color: '#082418', boxShadow: 'none' },
      });
    },
  ],
};
