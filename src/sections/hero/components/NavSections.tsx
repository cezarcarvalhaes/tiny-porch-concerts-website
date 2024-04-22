import Image from 'next/image';
import {
	Box,
	Center,
	Stack,
	Link,
} from '@chakra-ui/react';

const Sections = [
	{
		href: '#about',
		label: 'About',
	},
	{
		href: '#dates',
		label: '2024 Dates',
	},
	{
		href: '#get-involved',
		label: 'Get Involved',
	},
	{
		href: '#merch',
		label: 'Merch',
	},
];

function NavSections() {
	return (
		<Box>
			<div className="blob-container">
				<div className="blob blob--top-right"></div>
				<div className="blob blob--top-center"></div>
				<div className="blob blob--top-left"></div>
				<div className="blob blob--bottom-left"></div>
				<div className="blob blob--bottom-center"></div>
				<div className="blob blob--bottom-right"></div>
				<Image
					src='./homes.png'
					alt='Homes'
					fill
					unoptimized
				/>
			</div>
			<Center mt={8}>
				<Stack
					direction='row'
					spacing={16}
				>
					{Sections.map(({ label, href }) => (
						<Link
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
		</Box>
	);
}

export default NavSections;
