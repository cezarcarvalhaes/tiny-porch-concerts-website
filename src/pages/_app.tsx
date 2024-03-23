import '../style/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import RootLayout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</ChakraProvider>
	);
}
