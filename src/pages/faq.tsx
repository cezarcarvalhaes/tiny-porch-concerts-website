import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import FaqView from '@sections/faq';
import importFaqEntries, { FaqEntry } from '@util/importFaqEntries';

function Faq({ entries }: { entries: FaqEntry[] }) {
	return (
		<>
			<Head>
				<title>FAQ | Tiny Porch Concerts</title>
				<meta property="og:title" content="FAQ | Tiny Porch Concerts"/>
				<meta name="twitter:title" content="FAQ | Tiny Porch Concerts" />
			</Head>
			<Flex
				background='brand.blue'
				flexDirection='column'
				flexGrow={1}
			>
				<FaqView entries={entries}/>
			</Flex>
		</>
	);
}

export default Faq;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
	const entries = await importFaqEntries();
	// By returning { props: { entries } }, the Page component
	// will receive `entries` as a prop at build time
	return {
		props: {
			entries,
		},
	};
}
