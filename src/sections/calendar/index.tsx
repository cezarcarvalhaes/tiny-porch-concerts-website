import {
	Box,
	Heading,
	Flex,
	Text,
} from '@chakra-ui/react';
import { EventInfo } from '@util/importDateFiles';
import MonthTabs from './components/MonthTabs';

function Calendar({ dates }: { dates: EventInfo[] }) {
	const currentYear = new Date().getFullYear();
	return (
		<Box
			backgroundColor='brand.lightblue'
			py={16}
			id='dates'
		>
			<Flex
				px={{ base: 4, md: 8 }}
				justifyContent='center'
			>
				<Box
					w='full'
					maxW='container.xl'
					flexDir={{ base: 'column', md: 'row-reverse' }}
				>
					<Heading
						size='3xl'
						textAlign='center'
					>
						{currentYear} Calendar
					</Heading>
					<MonthTabs dates={dates}/>
				</Box>
			</Flex>
			<Flex
				justifyContent='center'
				px={{ base: 4, md: 8 }}
			>
				<Box
					my={8}
					borderRadius={12}
					backgroundColor='brand.yellow'
					p={8}
					maxW='50em'
				>
					<Text>
						<b>NOTE:</b> Our artists are volunteering their time and skills to put on this amazing event. If you can, please plan on tipping the performers via cash or Venmo. Your support is much appreciated!
					</Text>
				</Box>
			</Flex>
		</Box>
	);
}

export default Calendar;
