import pluginVue from 'eslint-plugin-vue'
import tailwind from "eslint-plugin-tailwindcss";

export default [
    {
        "ignores": [
            ".vitepress/cache",
            ".vitepress/dist",
        ],
    },
    ...pluginVue.configs["flat/recommended"],
    ...tailwind.configs["flat/recommended"],
    {
        "rules": {
            "comma-dangle": [
                "error",
                "always-multiline",
            ],
            "space-before-function-paren": [
                "error", "never",
            ],
            "vue/max-attributes-per-line": [
                "error", {
                    "singleline": {
                        "max": 7,
                    },
                    "multiline": {
                        "max": 1,
                    },
                },
            ],
            "vue/multi-word-component-names": [
                "error", {
                    "ignores": [
                        "Content",
                        "Checkbox",
                        "Badge",
                    ],
                },
            ],
            "tailwindcss/classnames-order": "error",
            "tailwindcss/enforces-negative-arbitrary-values": "error",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/migration-from-tailwind-2": "off",
            "tailwindcss/no-arbitrary-value": "error",
            "tailwindcss/no-contradicting-classname": "error",
            "tailwindcss/no-custom-classname": "off",
        },
    },
]
