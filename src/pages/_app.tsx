import '../style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import theme from '../theme';
import BaseLayout from '../layouts/BaseLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const { getLayout } = Component;

	const component = getLayout
		? getLayout(<Component {...pageProps} />)
		: (
			<BaseLayout><Component {...pageProps} /></BaseLayout>
		);
	return (
		<ChakraProvider theme={theme}>
			<Script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="51769f39-97ab-42b2-9353-601026a6a271"
			/>
			{component}
		</ChakraProvider>
	);
}
