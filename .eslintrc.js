module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
	},
  parserOptions: {
    parser: 'babel-eslint',
	},
  extends: [
	'@nuxtjs',
	'eslint:recommended',
	'prettier/vue',
	'plugin:vue/recommended',
	'plugin:prettier/recommended',
	'plugin:nuxt/base',
    'plugin:nuxt/recommended'
	],
  plugins: [
	'vue',
	'prettier',
	'prettier/recommended',
	'nuxt/base'
	],
	// add your custom rules here
  rules: {
	  'semi': [
			2, 'never'
		],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error',
			{ 'semi': false
			}
		]
	}
}