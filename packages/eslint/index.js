require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'vue', 'nuxt'],
    rules: {
        'import/named': 'off',
        'import/order': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        'vue/no-multiple-template-root': 'off',
    },
};
