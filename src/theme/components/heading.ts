import { defineStyleConfig } from '@chakra-ui/react';
// import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const Button = defineStyleConfig({
	baseStyle: {
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
	},
	variants: {
		primary: {
			WebkitTextFillColor: '#ffffff', /* Will override color (regardless of order) */
			WebkitTextStroke: '2px #0E0F11',
		},
		// props: StyleFunctionProps
		secondary: {
			fontFamily: 'BobbyJonesSoftCondensed, sans-serif',
			fontWeight: 500,
			color: 'neutral.900',
			lineHeight: 1.22,
		},
	},
	defaultProps: {
		variant: 'primary', // default is solid
	},
});

export default Button;
