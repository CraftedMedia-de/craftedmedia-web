module.exports = {
    root: true,
    extends: [
        '@nuxt/eslint-config',
        'prettier'
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-console': 'off'
    }
}
