/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        semi: [2, "always"],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "quote-props": [
            "error",
            "consistent-as-needed"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                }
            }
        ],
        "max-len": [
            "error",
            {
                "code": 140,
                "tabWidth": 4,
                "ignoreComments": true,
                "ignoreUrls": true
            }
        ],
    }
};
