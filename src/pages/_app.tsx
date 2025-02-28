import '../style/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
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
	const title = 'Tiny Porch Concerts | Richmond, VA';
	const description = 'Tiny Porch Concerts is a local grassroots concert series hosted in the Woodland Heights Neighborhood of Richmond, VA. Featuring 3 Host Porches, 6 incredible groups of performers, and promising an evening filled with neighborhood camaraderie, this event embodies the spirit of unity and togetherness.';
	const imageHref = 'https://tinyporchconcerts.org/tinyporchbanner-yellow.png';
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<title>{title}</title>
				<meta property="og:title" content={title}/>
				<meta name="twitter:title" content={title} />
				<meta name={title} content="Home page" />
				<meta name="description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta name="og:description" content={description}/>
				<meta name="twitter:image" content={imageHref}/>
				<meta property="og:image" content={imageHref}/>
				<meta property='og:type' content="website" />
				<meta name="twitter:card" content="summary_large_image"/>
			</Head>
			<Script
				defer
				src="https://cloud.umami.is/script.js"
				data-website-id="51769f39-97ab-42b2-9353-601026a6a271"
			/>
			{component}
		</ChakraProvider>
	);
}
