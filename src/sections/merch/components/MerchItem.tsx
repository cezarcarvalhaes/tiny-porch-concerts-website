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
	index: number;
}

function MerchItem(props: MerchItemProps) {
	const {
		title,
		image,
		disabled,
		link = '',
		imageAlt = 'Tiny Porch Merchandise',
		description = '',
		index = 0,
	} = props;

	const isEven = index % 2 === 0;

	return (
		<Box
			w='full'
			px={4}
		>
			<Flex
				w='full'
				maxW='container.xl'
				flexDir={{ base: 'column', md: isEven ? 'row' : 'row-reverse' }}
				mt={index > 0 ? 8 : 4}
				mx='auto'
				background='brand.yellow'
				borderRadius={12}
			>
				<Flex
					w='full'
					flexDir='column'
					px={4}
					pr={{ base: 4, md: 8 }}
					justifyContent='center'
				>
					<Heading
						size='3xl'
						mb={4}
						textAlign={isEven ? 'left' : 'right'}
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
							src={image}
							alt={imageAlt || 'Tiny Porch Merchandise'}
							my='auto'
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}

export default MerchItem;
