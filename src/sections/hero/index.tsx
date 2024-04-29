'use client';

import {
	Box,
	Container,
} from '@chakra-ui/react';

import Header from './components/Header';
import NavSections from './components/NavSections';

export default function Hero() {
	return (
		<Box
			backgroundColor='brand.yellow'
			py={16}
		>
			<Container maxW={'3xl'}>
				<Header />
				<NavSections />
			</Container>
		</Box>
	);
}
