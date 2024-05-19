import {
	Box,
	Flex,
	Heading,
} from '@chakra-ui/react';
import { FoodVendorInfo } from '@util/importDateFiles';
import VendorInfo from './VendorInfo';

function FoodVendors({ vendors = [] }: { vendors: FoodVendorInfo[] }) {
	if (!vendors.length) {
		return null;
	}
	return (
		<Box
			mt={8}
		>
			<Heading
				variant='secondary'
				as='h3'
				textAlign='center'
			>
        Food
			</Heading>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				flexWrap='wrap'
				justifyContent='center'
				alignItems='center'
			>
				{vendors.map((vendor) => (
					<VendorInfo
						key={vendor.name}
						{...vendor}
					/>
				))}
			</Flex>
		</Box>
	);
}

export default FoodVendors;
