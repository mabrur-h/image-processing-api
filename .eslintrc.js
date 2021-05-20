module.exports = {
    'extends': ['eslint:recommended'],
    'env': {
        'browser': true,
        'commonjs': true,
        'node': true,
        'mocha': true,
        'es2017': true
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'sourceType': 'module',
        'allowImportExportEverywhere': true
    },
    'rules': {
        'quotes': ['error', 'single'],
    }
}
