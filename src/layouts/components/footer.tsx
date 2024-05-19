import {
	Box,
	Flex,
	Link,
	Icon,
	Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
	return (
		<>
			<Flex
				p={8}
				backgroundColor='brand.limegreen'
				flexDir='column'
				justifySelf='flex-end'
			>
				<Box w='full' textAlign='center'>
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
			</Flex>
			{/* Turn on below when we have page links to add */}
			{/* <Box
				p={8}
				backgroundColor='brand.green'
			>
				<Flex
					w='full'
					maxW='container.xl'
					mx='auto'
				>
					<Box pt={1} w='full'>
						<Heading size='md' variant='secondary'>Links</Heading>
						<ul>
							<li></li>
						</ul>
					</Box>
				</Flex>
			</Box> */}
		</>
	);
}

export default Footer;
