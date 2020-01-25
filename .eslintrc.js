// eslint-disable-next-line
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
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
   rules: {
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase"
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error": "off"
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
  parser: 'babel-eslint',
  }
}
