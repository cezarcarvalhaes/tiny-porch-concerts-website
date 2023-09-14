import '../globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from '../layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</ChakraProvider>
	);
}
