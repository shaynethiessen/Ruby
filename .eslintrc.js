module.exports = {
	extends: [
		'universe',
		// Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:@typescript-eslint/recommended',
		// Enables eslint-plugin-prettier and eslint-con
		'plugin:prettier/recommended',
	],
	rules: {
		// General
		'no-underscore-dangle': ['warn', {allowAfterThis: true, allow: ['_id']}],
		'class-methods-use-this': 'off',
		'global-require': 'error',
		'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
		'no-return-assign': ['error', 'except-parens'],
		'no-console': ['error'],
		'no-plusplus': 'off',
		'no-unused-vars': ['error', {varsIgnorePattern: 'd', argsIgnorePattern: 'server|context|ctx|type'}],
		'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
		'no-use-before-define': ['off'],

		// Typescript
		'@typescript-eslint/indent': ['off'],
		'@typescript-eslint/no-unused-vars': ['error', {varsIgnorePattern: 'd', argsIgnorePattern: 'server|context|ctx|type'}],
		'@typescript-eslint/no-unused-expressions': ['off'], // This was disabled because some upgrade to airbnb rules.
		'@typescript-eslint/explicit-member-accessibility': ['off'],
		'@typescript-eslint/explicit-function-return-type': ['off', {allowExpressions: true, allowTypedFunctionExpressions: true}],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/ban-ts-ignore': ['off'],
		'@typescript-eslint/interface-name-prefix': ['off'],
		'@typescript-eslint/no-before-define': ['off'], // TODO This was disabled to support optional chaining: https://github.com/typescript-eslint/typescript-eslint/issues/1116
		'@typescript-eslint/explicit-module-boundary-types': ['error'],

		// ES6 Import
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'import/no-named-default': 'off',

		// JSX a11y
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
	},
};
