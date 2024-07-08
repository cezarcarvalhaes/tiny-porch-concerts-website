import {
	Box,
	Flex,
} from '@chakra-ui/react';

import MerchHeader from './components/Header';
import Items from './components/Items';

function Merch() {
	return (
		<Flex
			id='merch'
			py={16}
			backgroundColor='brand.blue'
			justifyContent='center'
		>
			<Box
				w='full'
				maxW='container.xl'
			>
				<MerchHeader />
				<Items />
			</Box>
		</Flex>
	);
}

export default Merch;
