import {
	Flex,
	Image,
	Link,
	Text,
} from '@chakra-ui/react';
import { FoodVendorInfo } from '@util/importDateFiles';

function VendorInfo({
	name,
	link,
	logo,
	location = 'TBD',
}: FoodVendorInfo) {
	return (
		<Flex
			my={4}
			mx={{ base: 0, md: 4 }}
			backgroundColor='brand.orange'
			p={6}
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			borderRadius='full'
			boxSize='300px'
		>
			<Image
				maxW='200px'
				src={logo}
				alt={`Logo for ${name}`}
				mx='auto'
			/>
			{link ? (
				<Link
					href={link}
					fontFamily='BobbyJones, sans-serif'
					color='brand.green'
					textDecoration='underline'
					isExternal
				>
					{name}
				</Link>
			) : (
				<Text
					fontFamily='BobbyJones, sans-serif'
				>
					{name}
				</Text>
			)}
			<Text
				fontFamily='BobbyJones, sans-serif'
			>
        Location: {location}
			</Text>
		</Flex>
	);
}

export default VendorInfo;
