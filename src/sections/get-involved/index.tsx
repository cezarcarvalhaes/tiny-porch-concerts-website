import {
	Box,
	Flex,
	Heading,
} from '@chakra-ui/react';

import content from '@content/pages/home/sections/get-involved.md';

function GetInvolved() {
	const { attributes, html } = content;
	const { title } = attributes;
	return (
		<Box
			id='get-involved'
			backgroundColor='brand.orange'
			p={8}
		>
			<Flex
				w='full'
				maxW='container.lg'
				mx='auto'
			>
				<Flex
					w='full'
					flexDir='column'
					px={4}
					pr={{ base: 4, md: 8 }}
				>
					<Heading
						size='3xl'
						mb={8}
					>
						{title}
					</Heading>
					<div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
				</Flex>
				<Flex
					w='75%'
					justifyContent='center'
					alignItems='center'
					display={{ base: 'none', md: 'flex' }}
				>
					<Flex
						w={{ base: '25%', md: '50%' }}
						justifyContent='center'
						p={4}
					>
						<img
							src='/guitar.png'
							alt='Guitar'
							className='my-auto'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}

export default GetInvolved;
