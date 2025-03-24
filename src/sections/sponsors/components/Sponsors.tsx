import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

import SponsorBox, { SponsorBoxProps } from './SponsorBox';

interface SponsorsProps {
  sponsors: SponsorBoxProps[];
  title?: string;
}

function Sponsors({ sponsors, title = 'Our Sponsors' }: SponsorsProps) {
	if (!sponsors || sponsors.length === 0) {
		return null;
	}

	return (
		<Box as="section" py={10} px={4}>
			<Box maxW="1200px" mx="auto">
				<Heading
					as="h2"
					textAlign="center"
					mb={8}
					fontSize={{ base: '2xl', md: '3xl' }}
				>
					{title}
				</Heading>

				<SimpleGrid
					columns={{
						base: 2, sm: 3, md: 4, lg: 5,
					}}
					spacing={6}
					justifyContent="center"
					alignItems="center"
				>
					{sponsors.map((sponsor, index) => (
						<SponsorBox
							key={index}
							image={sponsor.image}
							name={sponsor.name}
							url={sponsor.url}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
}

export default Sponsors;
