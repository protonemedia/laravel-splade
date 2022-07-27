module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended"
    ],
    rules: {
        "no-undef": 0,
        "vue/multi-word-component-names": 0,
        "vue/no-v-html": 0,
        "vue/require-default-prop": 0,
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "object-curly-spacing": ["error", "always"],
        "semi": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }]
    }
};