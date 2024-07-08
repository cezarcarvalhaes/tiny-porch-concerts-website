import {
	Box,
	BoxProps,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/merch/top-section.md';

function MerchHeader(props: BoxProps) {
	const { attributes, html } = content;
	const { title = 'Merch' } = attributes;

	return (
		<Box {...props }>
			<Heading as="h1" size="4xl" textAlign="right" mr={8}>
				{title}
			</Heading>
			<Box>
				<div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
			</Box>
		</Box>
	);
}

export default MerchHeader;
