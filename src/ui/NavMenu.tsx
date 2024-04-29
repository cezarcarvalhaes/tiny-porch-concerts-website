import React, { useEffect } from 'react';
import {
	IconButton,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Link,
	Flex,
	Slide,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import { SECTIONS } from '@sections/dictionary';

type NavMenuProps = {
  triggerElementRef: React.RefObject<HTMLDivElement>;
};

const NavMenu: React.FC<NavMenuProps> = ({ triggerElementRef }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [showButton, setShowButton] = React.useState(false);

	useEffect(() => {
		const element = triggerElementRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setShowButton(!entry.isIntersecting);
			},
			{ threshold: 0 },
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [triggerElementRef]);

	return (
		<>
			<Slide direction="top" in={showButton} style={{ zIndex: 10 }}>
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
			</Slide>

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
		</>
	);
};

export default NavMenu;
