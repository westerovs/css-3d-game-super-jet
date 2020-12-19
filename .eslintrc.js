module.exports = {
    extends: [
        'eslint:recommended',
    ],
    env: {
        'browser': true,
        'node': true,
        'commonjs': true,
        'jest': true,
        'es6': true,
    },
    rules: {
        // 'semi': ['error', 'always'],
        // 'comma-dangle': ['error', 'always-multiline'],
        'comma-dangle': 'off',
        'semi': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'quotes': ['error', 'single'],
        'no-multiple-empty-lines': 'off',
        'eol-last': ['error', 'always'],
    },
};
