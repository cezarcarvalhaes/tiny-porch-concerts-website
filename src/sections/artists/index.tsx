import {
	Container,
	Heading,
	Image,
} from '@chakra-ui/react';
import Markdown from 'react-markdown';

import If from '@ui/If';
import { ArtistInfo } from '@util/getArtistFiles';
import Links from './components/Links';

function ArtistPage({ data, content }: ArtistInfo) {
	const {
		name,
		image,
		...links
	} = data ?? {};
	return (
		<Container
			maxW="container.lg"
			py={8}
		>
			<Heading as="h1" size="4xl" textAlign="center">
				{name}
			</Heading>
			<If condition={Boolean(image)}>
				<Image
					src={image}
					alt={name}
					my={8}
					w='full'
				/>
			</If>
			<Markdown className="markdown markdown-subdued">
				{content}
			</Markdown>
			<Links links={links} />
		</Container>
	);
}

export default ArtistPage;
