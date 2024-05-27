import { Flex } from '@chakra-ui/react';
import PressView from '@sections/press';

function Press() {
	return (
		<Flex
			background='brand.orange'
			flexDirection='column'
			flexGrow={1}
		>
			<PressView />
		</Flex>
	);
}

export default Press;
