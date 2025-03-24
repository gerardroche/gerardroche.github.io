import globals from "globals";
import vue from "eslint-plugin-vue";

export default [
    {
        ignores: [
            ".vitepress/cache",
            ".vitepress/dist",
        ],
    },
    ...vue.configs['flat/recommended'],
    {
        files: ["**/*.js", "**/*.vue", "**/*.mts"],
        plugins: {
            vue,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "space-before-function-paren": ["error", "never"],
            "comma-dangle": ["error", "always-multiline"],
            "vue/max-attributes-per-line": ["error", {singleline: {max: 7}, multiline: {max: 1}}],
            "vue/multi-word-component-names": ["error", {ignores: ["Checkbox"]}],
        },
    },
];
