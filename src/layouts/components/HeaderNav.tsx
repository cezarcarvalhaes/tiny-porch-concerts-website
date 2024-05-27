import React from 'react';
import {
	IconButton,
	Flex,
	useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import NavDrawer from './NavDrawer';

function HeaderNav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Flex
				backgroundColor='brand.mediumGreen'
				w='full'
				p={2}
			>
				<IconButton
					aria-label="Navigation Menu"
					variant='ghost'
					color='#ffffff'
					icon={<FaBars />}
					onClick={onOpen}
				/>
			</Flex>

			<NavDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default HeaderNav;
