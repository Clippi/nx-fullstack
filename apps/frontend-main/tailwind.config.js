const {createGlobPatternsForDependencies} = require('@nrwl/react/tailwind')
const {join} = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'black': 'var(--raisin-black)',
      'pink': 'var(--blush)',
      'green': 'var(--sea-green)',
      'blue': 'var(--savoy-blue)',
      'white': 'var(--mint-cream)'
    },
    extend: {},
  },
  plugins: [],
}
