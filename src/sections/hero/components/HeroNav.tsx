import React, { useEffect } from 'react';
import {
	IconButton,
	Flex,
	Slide,
	useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import NavDrawer from '@layouts/components/NavDrawer';

type NavMenuProps = {
  triggerElementRef: React.RefObject<HTMLDivElement>;
};

const NavMenu: React.FC<NavMenuProps> = ({ triggerElementRef }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [shouldShowButton, setShouldShowButton] = React.useState(false);

	useEffect(() => {
		const element = triggerElementRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				setShouldShowButton(!entry.isIntersecting);
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
			<Slide direction="top" in={shouldShowButton} style={{ zIndex: 10 }}>
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

			<NavDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NavMenu;
