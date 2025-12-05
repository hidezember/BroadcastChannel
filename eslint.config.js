<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: ['src/assets/style.css'],
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
})
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
