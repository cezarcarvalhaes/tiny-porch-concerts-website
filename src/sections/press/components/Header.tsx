import {
	Box,
	BoxProps,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/press/top-section.md';

function PressHeader(props: BoxProps) {
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

export default PressHeader;
