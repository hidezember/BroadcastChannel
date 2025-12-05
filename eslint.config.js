<<<<<<< Updated upstream
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
})
=======
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: ['src/assets/style.css'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
})
>>>>>>> Stashed changes
