import React from 'react';
import NextLink from 'next/link';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Link,
	VStack,
} from '@chakra-ui/react';

import { SECTIONS } from '@sections/dictionary';

type NavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => (
	<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
		<DrawerOverlay>
			<DrawerContent
				bgColor='brand.lightblue'
			>
				<DrawerCloseButton />
				<DrawerHeader
					fontFamily='BobbyJones, sans-serif'
					fontSize='2xl'
					textAlign='center'
					my={4}
				>
              Tiny Porch Concerts
				</DrawerHeader>
				<DrawerBody>
					<VStack spacing={4}>
						{SECTIONS.map(({ label, href }) => (
							<Link
								as={NextLink}
								key={href}
								href={href}
								fontSize='2xl'
								fontFamily='BobbyJones, sans-serif'
								color='brand.green'
								onClick={onClose}
							>
								{label}
							</Link>
						))}
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</DrawerOverlay>
	</Drawer>
);

export default NavDrawer;
