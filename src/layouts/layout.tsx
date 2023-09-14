import {
	Box,
} from '@chakra-ui/react';

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<Box w="full">{children}</Box>
	);
}
