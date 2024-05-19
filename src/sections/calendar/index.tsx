import {
	Box,
	Heading,
	Flex,
} from '@chakra-ui/react';
import { EventInfo } from '@util/importDateFiles';
import MonthTabs from './components/MonthTabs';

function Calendar({ dates }: { dates: EventInfo[] }) {
	const currentYear = new Date().getFullYear();
	return (
		<Flex
			id='dates'
			backgroundColor='brand.lightblue'
			py={16}
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
	);
}

export default Calendar;
