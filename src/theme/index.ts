import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import globalStyles from './globalStyles';

const theme = extendTheme({
	styles: {
		global: globalStyles,
	},
	colors,
});

export default theme;
