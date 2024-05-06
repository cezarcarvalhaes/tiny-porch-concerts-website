import {
	Box,
	Button,
	Flex,
	Heading,
} from '@chakra-ui/react';

import If from '@ui/If';
import content from '@content/pages/home/sections/merch.md';

function Merch() {
	const { attributes, html } = content;
	const {
		title,
		image,
		imageAlt,
		link,
		disabled,
	} = attributes;

	return (
		<Flex
			id='merch'
			py={16}
			backgroundColor='brand.blue'
			justifyContent='center'
		>
			<Flex
				w='full'
				maxW='container.xl'
				flexDir={{ base: 'column', md: 'row' }}
			>
				<Flex
					w='full'
					flexDir='column'
					px={4}
					pr={{ base: 4, md: 8 }}
				>
					<Heading
						size='3xl'
						mb={4}
					>
						{title}
					</Heading>
					<div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
					<Box
						textAlign='center'
					>
						<If condition={!disabled}>
							<Button
								as='a'
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								color='brand.green'
								size='lg'
								fontFamily='BobbyJones, sans-serif'
							>
								Order Now
							</Button>
						</If>
					</Box>
				</Flex>
				<Flex
					w='full'
					justifyContent='center'
					alignItems='center'
				>
					<Flex
						w='full'
						justifyContent='center'
						p={4}
					>
						<img
							src={`/images/uploads/${image}`}
							alt={imageAlt || 'Tiny Porch Merchandise'}
							className='my-auto'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Merch;
