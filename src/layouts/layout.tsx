import {
	Box,
} from '@chakra-ui/react';
import Footer from './components/footer';

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<Box w="full">
			{children}
			<Footer />
		</Box>
	);
}
