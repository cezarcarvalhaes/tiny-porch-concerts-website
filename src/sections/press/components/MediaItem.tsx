import {
	Box,
	Heading,
	Flex,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';

interface MediaItemProps {
    title: string;
    publisher: string;
    date: string;
    url: string;
    image: string;
    snippet: string;
}

function MediaItem(props: MediaItemProps) {
	return (
		<Flex
			mb={8}
			w="100%"
			maxW="800px"
			backgroundColor='brand.yellow'
			borderRadius='12'
			p={6}
		>
			<Image
				src={props.image}
				alt={props.publisher}
				boxSize='100px'
				objectFit='contain'
				borderRadius='md'
				mr={4}
			/>
			<Box>
				<Link
					href={props.url}
					isExternal
				>
					<Heading
						as="h3"
						variant='secondary'
						size='md'
						textDecor='underline'
						color='brand.green'
					>
						{props.title}
					</Heading>
				</Link>
				<Text as='b'>
					{props.publisher}
				</Text>
				<Text>
					&quot;{props.snippet}&quot;
				</Text>
			</Box>
		</Flex>
	);
}

export default MediaItem;
