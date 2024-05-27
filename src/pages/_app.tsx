import '../style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
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
			{component}
		</ChakraProvider>
	);
}
