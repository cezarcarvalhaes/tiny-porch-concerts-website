import {
	Box,
} from '@chakra-ui/react';
import merchandise from '@content/pages/merch/items.json';

import MerchItem from './MerchItem';

function MerchList() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			mt={8}
		>
			{merchandise.items.map((mediaItem, index) => (
				<MerchItem
					key={mediaItem.title}
					index={index}
					{...mediaItem}
				/>
			))}
		</Box>
	);
}

export default MerchList;
