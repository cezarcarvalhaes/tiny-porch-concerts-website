import {
	Flex,
} from '@chakra-ui/react';
import type { GetStaticProps } from 'next';

import { getArtistFiles, getArtistInfo, ArtistInfo } from '@util/getArtistFiles';
import ArtistContent from '@sections/artists';

function ArtistPage({ data, content }: ArtistInfo) {
	return (
		<Flex
			background='brand.orange'
			flexDirection='column'
			flexGrow={1}
		>
			<ArtistContent data={data} content={content} />
		</Flex>
	);
}

export default ArtistPage;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// This function gets called at build time
export async function getStaticPaths() {
	const artists = await getArtistFiles();

	// Get the paths we want to pre-render based on posts
	const paths = artists.map(({ slug }) => ({
		params: { slug },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { data, content } = getArtistInfo(params?.slug as string);
	return {
		props: {
			data,
			content,
		},
	};
};
