import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

import { getArtistFiles } from '@util/getArtistFiles';

function Artists({ artists }) {
	return (
		<Box>
			<h1>Artists</h1>
			<ul>
				{artists.map(({ slug, attributes }) => (
					<li key={slug}>
						<Link
							as={NextLink}
							href={`/artists/${slug}`}
						>
							{attributes.name}
						</Link>
					</li>
				))}
			</ul>
		</Box>
	);
}

export default Artists;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// This function gets called at build time

export async function getStaticProps() {
	const artists = await getArtistFiles();
	// By returning { props: { dates } }, the Page component
	// will receive `dates` as a prop at build time
	return {
		props: {
			artists,
		},
	};
}
