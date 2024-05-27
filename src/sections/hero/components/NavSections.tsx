import { useRef } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
	Box,
	Center,
	Stack,
	Link,
	useBreakpointValue,
} from '@chakra-ui/react';

import { SECTIONS } from '@sections/dictionary';
import NavMenu from './HeroNav';

function NavSections() {
	const triggerElementRef = useRef<HTMLDivElement>(null);
	const imageSrc = useBreakpointValue(
		{
			base: './homes-mobile.png',
			md: './homes.png',
		},
		{
			fallback: 'md',
		},
	);
	return (
		<Box>
			<div className="blob-container">
				<div className="blob blob--top-right"></div>
				<div className="blob blob--top-center"></div>
				<div className="blob blob--top-left"></div>
				<div className="blob blob--bottom-left"></div>
				<div className="blob blob--bottom-center"></div>
				<div className="blob blob--bottom-right"></div>
				<Box w='full' height='19rem'>
					<Image
						src={imageSrc!}
						alt='Homes'
						fill
					/>
				</Box>
			</div>
			<Center
				display={{ base: 'none', md: 'flex' }}
				mt={8}
				ref={triggerElementRef}
			>
				<Stack
					direction='row'
					spacing={16}
				>
					{SECTIONS.map(({ label, href }) => (
						<Link
							as={NextLink}
							key={href}
							href={href}
							fontSize='2xl'
							fontFamily='BobbyJones, sans-serif'
							color='brand.green'
						>
							{label}
						</Link>
					))}
				</Stack>
			</Center>
			<NavMenu triggerElementRef={triggerElementRef} />
		</Box>
	);
}

export default NavSections;
