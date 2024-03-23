'use client';

import Head from 'next/head';
import Main from '@sections/Main';
import Hero from '@sections/hero';

type WindowWithNetlifyIdentity = Window & { netlifyIdentity?: any };

export default function Home() {
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
			<Head>
				<title>Tiny Porch Concerts</title>
				<meta name="description" content="Home page" />
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async></script>
			</Head>
			<main className="">
				<Hero />
				<Main />
			</main>
		</>
	);
}
