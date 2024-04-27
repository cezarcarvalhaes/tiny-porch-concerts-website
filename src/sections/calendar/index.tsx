import {
	Box,
	Heading,
} from '@chakra-ui/react';
import { MarkdownData } from '@util/importMarkdownFiles';
import MonthTabs from './components/MonthTabs';

function Calendar({ dates }: { dates: MarkdownData[] }) {
	const currentYear = new Date().getFullYear();
	return (
		<Box
			id='dates'
			backgroundColor='brand.lightblue'
			py={16}
			px={{ base: 4, md: 8 }}
		>
			<Heading
				size='3xl'
				textAlign='center'
			>
				{currentYear} Calendar
			</Heading>
			<MonthTabs dates={dates}/>
		</Box>
	);
}

export default Calendar;
