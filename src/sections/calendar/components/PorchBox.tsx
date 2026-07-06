import {
	Flex,
	Link,
	Text,
	Icon,
	Tooltip,
} from '@chakra-ui/react';
import { SiCashapp } from 'react-icons/si';
import { BiLogoVenmo } from 'react-icons/bi';

interface PorchBoxProps {
  performer: string;
  performerLink?: string;
  time: string;
  venmoLink?: string;
}

const isCashApp = (url: string) => /cash\.app|cashapp/i.test(url);

const PorchBox = ({
	performer = '',
	performerLink = '',
	time = '',
	venmoLink,
}: PorchBoxProps) => (
	<Flex align='center'>
		<Text fontFamily='BobbyJonesSoftCondensed, sans-serif'>
			{time.trim()}:
		</Text>
		{' '}
		{performerLink ? (
			<Link
				href={performerLink.trim()}
				fontFamily='BobbyJones, sans-serif'
				color='brand.green'
				textDecoration='underline'
				ml={2}
				isExternal
			>
				{performer.trim()}
			</Link>
		) : (
			<Text fontFamily='BobbyJones, sans-serif' ml={2}>
				{performer.trim()}
			</Text>
		)}
		{venmoLink && (
			<Tooltip label={isCashApp(venmoLink) ? 'Tip on Cash App' : 'Tip on Venmo'} hasArrow placement='top'>
				<Link
					href={venmoLink}
					isExternal
					ml={2}
					display='inline-flex'
					alignItems='center'
					_hover={{ opacity: 0.75 }}
					aria-label={isCashApp(venmoLink) ? 'Tip on Cash App' : 'Tip on Venmo'}
				>
					{isCashApp(venmoLink) ? (
						<Icon as={SiCashapp} boxSize={4} color='#00D64F' />
					) : (
						<Icon as={BiLogoVenmo} boxSize={5} color='#3D95CE' />
					)}
				</Link>
			</Tooltip>
		)}
	</Flex>
);

export default PorchBox;
