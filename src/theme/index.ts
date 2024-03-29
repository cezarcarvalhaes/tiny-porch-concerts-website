import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import components from './components';
import globalStyles from './globalStyles';

const theme = extendTheme({
	styles: {
		global: globalStyles,
	},
	components,
	colors,
});

export default theme;
