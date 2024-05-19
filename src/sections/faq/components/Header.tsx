import {
	Box,
	BoxProps,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/faq/top-section.md';

function FaqHeader(props: BoxProps) {
	const { attributes, html } = content;
	const { title = 'FAQ' } = attributes;

	return (
		<Box {...props }>
			<Heading as="h1" size="4xl" textAlign="center">
				{title}
			</Heading>
			<Box>
				<div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
			</Box>
		</Box>
	);
}

export default FaqHeader;
