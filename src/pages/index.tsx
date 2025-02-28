'use client';

import Head from 'next/head';
import Script from 'next/script';
import type { ReactElement } from 'react';

import About from '@sections/about';
import Hero from '@sections/hero';
import Calendar from '@sections/calendar';
import GetInvolved from '@sections/get-involved';
import Merch from '@sections/merch';
import importDateFiles, { EventInfo } from '@util/importDateFiles';
import RootLayout from '../layouts/RootLayout';

type WindowWithNetlifyIdentity = Window & { netlifyIdentity?: any };

function Home({ dates }: { dates: EventInfo[] }) {
	if (typeof window !== 'undefined') {
		const { netlifyIdentity } = window as WindowWithNetlifyIdentity;
		// Redirect to admin page if user is logged in
		if (netlifyIdentity) {
			netlifyIdentity.on('init', (user: any) => {
				if (!user) {
					netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	}
	const title = 'Tiny Porch Concerts | Richmond, VA';
	return (
		<>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Head>
				<title>{title}</title>
				<meta property="og:title" content={title}/>
				<meta name="twitter:title" content={title} />
				<meta name={title} content="Home page" />
			</Head>
			<main className="">
				<Hero />
				<Calendar dates={dates}/>
				<About />
				<GetInvolved />
				<Merch />
			</main>
		</>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Home;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	const dates = await importDateFiles();
	// By returning { props: { dates } }, the Page component
	// will receive `dates` as a prop at build time
	return {
		props: {
			dates,
		},
	};
}
