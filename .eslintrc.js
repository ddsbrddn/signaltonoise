module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
	'plugin:prettier/recommended',
	'plugin:nuxt/base',
    'plugin:nuxt/recommended'
  ],
  plugins: [
	'prettier',
	// 'prettier/recommended',
	// 'nuxt/base'
  ],
  // add your custom rules here
  rules: {
  }
}
