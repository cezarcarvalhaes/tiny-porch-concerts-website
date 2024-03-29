'use client';

import {
	Box,
	Heading,
	Stack,
} from '@chakra-ui/react';

export default function Hero() {
	return (
		<Stack
			as={Box}
			textAlign={'center'}
			spacing={0}
			pb={20}
		>
			<Heading
				as='h1'
				fontSize='7xl'
			>
				Tiny Porch
			</Heading>
			<Heading
				as='h2'
				fontSize='xl'
				variant='secondary'
			>
				Neighborhood Concert Series
			</Heading>
			<Heading
				as='h2'
				fontSize='5xl'
				variant='secondary'
				color='#0c5b08'
			>
				Woodland Heights
			</Heading>
		</Stack>
	);
}
