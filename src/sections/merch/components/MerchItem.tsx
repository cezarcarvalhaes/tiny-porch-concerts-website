import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
} from '@chakra-ui/react';
import Markdown from 'react-markdown';

import If from '@ui/If';

interface MerchItemProps {
  title: string;
  image: string;
  imageAlt: string;
  link: string;
  disabled: Boolean;
  description: string;
}

function MerchItem(props: MerchItemProps) {
	const {
		title,
		image,
		disabled,
		link = '',
		imageAlt = 'Tiny Porch Merchandise',
		description = '',
	} = props;

	return (
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
				<Markdown className="markdown markdown-subdued">{description}</Markdown>
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
					<Image
						w='full'
						src={`/images/uploads/${image}`}
						alt={imageAlt || 'Tiny Porch Merchandise'}
						my='auto'
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default MerchItem;
