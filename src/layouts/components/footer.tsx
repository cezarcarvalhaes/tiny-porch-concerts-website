import {
	Box,
	Flex,
	Heading,
	Link,
	Icon,
	Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

import FooterLink from './FooterLink';

const links = [
	{ href: '/#about', text: 'About' },
	{ href: '/faq', text: 'FAQ' },
	// { href: '', text: 'Our Artists (Coming Soon)' },
	{ href: '/#get-involved', text: 'Get Involved' },
	{ href: '/press', text: 'Press' },
	// { href: '', text: 'Sponsors (Coming Soon)' },
];

function Footer() {
	return (
		<>
			<Flex
				p={8}
				backgroundColor='brand.limegreen'
				flexDir={{ base: 'column', md: 'row' }}
				justifySelf='flex-end'
			>

				<Box w='full' textAlign={{ base: 'center', md: 'left' }}>
					<Link
						as={NextLink}
						href='/'
						fontSize='4xl'
						fontFamily='BobbyJones, sans-serif'
					>
          Tiny Porch Concerts
					</Link>
					<Text>
						<Icon as={FaEnvelope} />
						{' '}
						<Link
							href='mailto:tinyporchrichmond@gmail.com'
						>
            tinyporchrichmond@gmail.com
						</Link>
					</Text>
				</Box>

				<Box pt={4} w='full' textAlign={{ base: 'center', md: 'left' }}>
					<Heading size='lg' variant='secondary'>Links:</Heading>
					<ul>
						{links.map(({ href, text }) => (<FooterLink key={text} href={href}>{text}</FooterLink>))}
					</ul>
				</Box>
			</Flex>
		</>
	);
}

export default Footer;
