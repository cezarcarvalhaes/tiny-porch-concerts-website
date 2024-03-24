import Image from 'next/image';
import {
	Box,
	Center,
	Stack,
	Link,
} from '@chakra-ui/react';

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
					<Link
						href="#about"
						fontSize='2xl'
					>
					Who We Are
					</Link>
					<Link
						href="#dates"
						fontSize='2xl'
					>
					2024 Dates
					</Link>
					<Link
						href="#contact"
						fontSize='2xl'
					>
					Contact
					</Link>
				</Stack>
			</Center>
		</Box>
	);
}

export default NavSections;
