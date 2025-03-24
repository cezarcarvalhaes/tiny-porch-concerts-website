import React from 'react';
import {
	Box, Image, Link,
} from '@chakra-ui/react';

export interface SponsorBoxProps {
  image: string;
  name: string;
  url?: string;
}

function SponsorBox({ image, name, url }: SponsorBoxProps) {
	const content = (
		<Box
			p={4}
			maxW="200px"
			height="100px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			transition="transform 0.2s, opacity 0.2s"
			_hover={{
				transform: 'scale(1.05)',
				opacity: 0.9,
			}}
		>
			<Image
				src={image}
				alt={name}
				maxW="100%"
				maxH="100%"
				objectFit="contain"
			/>
		</Box>
	);

	if (url) {
		return (
			<Link href={url} isExternal aria-label={`Visit ${name}'s website`}>
				{content}
			</Link>
		);
	}

	return content;
}

export default SponsorBox;
