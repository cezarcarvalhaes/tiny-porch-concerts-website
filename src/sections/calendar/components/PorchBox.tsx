import {
	Flex,
	Link,
	Text,
} from '@chakra-ui/react';

interface PorchBoxProps {
  performer: string;
  performerLink?: string;
  time: string;
}
const PorchBox = ({
	performer = '',
	performerLink = '',
	time = '',
}: PorchBoxProps) => (
	<Flex>
		<Text
			fontFamily='BobbyJonesSoftCondensed, sans-serif'
		>
			{time.trim()}:
		</Text>
		{' '}
		{performerLink ? (
			<Link
				href={performerLink?.trim()}
				fontFamily='BobbyJones, sans-serif'
				color='brand.green'
				textDecoration='underline'
				ml={2}
				isExternal
			>
				{performer?.trim()}
			</Link>
		) : (
			<Text
				fontFamily='BobbyJones, sans-serif'
			>
				{performer?.trim()}
			</Text>
		)}
	</Flex>
);

export default PorchBox;
