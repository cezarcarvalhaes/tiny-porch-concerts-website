module.exports = {
	env: {
		node: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
		'next/core-web-vitals',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// 2021 is the recommended version for Node 16
		// https://stackoverflow.com/questions/67371787/what-typescript-configuration-produces-output-closest-to-node-js-16-capabilities/67371788#67371788
		ecmaVersion: 2021,
		project: './tsconfig.json',
	},
	ignorePatterns: ['out/*'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/indent': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true, peerDependencies: true }],
		'arrow-parens': [2, 'always'],
		'max-len': 0,
		'no-tabs': 0,
		'no-else-return': ['error', { allowElseIf: true }],
		'no-underscore-dangle': 0,
		'no-param-reassign': ['error', { props: false }],
		'operator-linebreak': 0,
		semi: [2, 'always'],
		'import/prefer-default-export': 0,
		'@typescript-eslint/naming-convention': 0,
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': 0,
		'@typescript-eslint/return-await': 0,
		'@typescript-eslint/require-await': 1,
		'@next/next/no-img-element': 0,
	},
	overrides: [
		{
			files: ['__mocks__/**/*'],
			env: {
				jest: true,
			},
		},
	],
};
