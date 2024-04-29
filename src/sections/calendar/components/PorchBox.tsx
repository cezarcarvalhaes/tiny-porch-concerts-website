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
	performer,
	performerLink,
	time,
}: PorchBoxProps) => (
	<Flex>
		<Text
			fontFamily='BobbyJonesSoftCondensed, sans-serif'
		>
			{time}:
		</Text>
		{' '}
		{performerLink ? (
			<Link
				href={performerLink}
				fontFamily='BobbyJones, sans-serif'
				color='brand.green'
				textDecoration='underline'
			>
				{performer}
			</Link>
		) : (
			<Text
				fontFamily='BobbyJones, sans-serif'
			>
				{performer}
			</Text>
		)}
	</Flex>
);

export default PorchBox;
