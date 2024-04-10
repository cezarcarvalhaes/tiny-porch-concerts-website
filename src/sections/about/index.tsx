import {
	Box,
	Flex,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/about.md';

function About() {
	const { attributes, html } = content;
	const { title } = attributes;

	return (
		<Flex
			id='about'
			py={8}
			backgroundColor='brand.blue'
			justifyContent='center'
		>
			<Flex
				w='full'
				maxW='container.xl'
				flexDir={{ base: 'column', md: 'row-reverse' }}
			>
				<Flex
					w='full'
					flexDir='column'
					px={4}
					pr={{ base: 4, md: 8 }}
				>
					<Heading
						size='3xl'
						textAlign='right'
						mb={4}
					>
						{title}
					</Heading>
					<Box
						backgroundColor='brand.yellow'
						p={6}
						maxW='35em'
						alignSelf='end'
						borderRadius={12}
					>
						<div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
					</Box>
				</Flex>
				<Flex
					w='full'
					justifyContent='center'
					alignItems='center'
				>
					<Flex
						w={{ base: '50%', md: 'full' }}
						justifyContent='center'
						p={4}
					>
						<img
							src='/images/uploads/tiny-porch-guitar-on-house.png'
							alt='Porch Guitar'
							className='my-auto'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default About;
