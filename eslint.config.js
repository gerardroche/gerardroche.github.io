import globals from "globals";
import tailwind from "eslint-plugin-tailwindcss";
import vue from "eslint-plugin-vue";

export default [
    {
        ignores: [
            ".vitepress/cache",
            ".vitepress/dist",
        ],
    },
    ...tailwind.configs["flat/recommended"],
    ...vue.configs['flat/recommended'],
    {
        files: ["**/*.js", "**/*.vue", "**/*.mts"],
        plugins: {
            tailwind,
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

            "vue/max-attributes-per-line": ["error", {
                singleline: {
                    max: 7,
                },

                multiline: {
                    max: 1,
                },
            }],

            "vue/multi-word-component-names": ["error", {
                ignores: ["Checkbox"],
            }],
            "tailwindcss/classnames-order": "error",
            "tailwindcss/enforces-negative-arbitrary-values": "error",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/migration-from-tailwind-2": "off",
            "tailwindcss/no-arbitrary-value": "error",
            "tailwindcss/no-contradicting-classname": "error",
            "tailwindcss/no-custom-classname": "off",
        },
    },
];
