import {
	Flex,
} from '@chakra-ui/react';
import HeaderNav from './components/HeaderNav';
import Footer from './components/footer';

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<Flex
			w="full"
			flexDirection="column"
			minH="100vh"
		>
			<HeaderNav />
			{children}
			<Footer />
		</Flex>
	);
}
