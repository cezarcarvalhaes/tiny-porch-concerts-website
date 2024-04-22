const globalStyles = {
	'html, body': {
		fontSize: '16px',
		fontFamily: 'Roboto Condensed, sans-serif',
		fontWeight: 400,
		color: 'neutral.800',
		lineHeight: 1.5,
		'@media(min-width: 768px)': {
			fontSize: '18px',
		},
	},
	h1: {
		fontSize: '2.875rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.18,
		WebkitTextFillColor: '#ffffff', /* Will override color (regardless of order) */
		WebkitTextStroke: '1px #0E0F11',
	},
	h2: {
		fontSize: '2.25rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.22,
	},
	h3: {
		fontSize: '1.875rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.286,
	},
	h4: {
		fontSize: '1.5rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.333,
	},
	h5: {
		fontSize: '1.25rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.556,
	},
	h6: {
		fontSize: '1rem',
		fontFamily: 'BobbyJones, sans-serif',
		fontWeight: 500,
		color: 'neutral.900',
		lineHeight: 1.5,
	},
};

export default globalStyles;
