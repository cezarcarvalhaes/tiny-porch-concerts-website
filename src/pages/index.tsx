'use client';

import Head from 'next/head';
import Script from 'next/script';

import About from '@sections/about';
import Hero from '@sections/hero';
import Calendar from '@sections/calendar';
import GetInvolved from '@sections/get-involved';
import Merch from '@sections/merch';
import importMarkdownFiles, { MarkdownData } from '@util/importMarkdownFiles';

type WindowWithNetlifyIdentity = Window & { netlifyIdentity?: any };

export default function Home({ dates }: { dates: MarkdownData[] }) {
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
	return (
		<>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
			<Head>
				<title>Tiny Porch Concerts</title>
				<meta name="description" content="Home page" />
			</Head>
			<main className="">
				<Hero />
				<About />
				<Calendar dates={dates}/>
				<Merch />
				<GetInvolved />
			</main>
		</>
	);
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	const dates = await importMarkdownFiles();

	// By returning { props: { dates } }, the Page component
	// will receive `dates` as a prop at build time
	return {
		props: {
			dates,
		},
	};
}
