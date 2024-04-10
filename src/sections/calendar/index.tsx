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
			backgroundColor='brand.lightblue'
			p={8}
		>
			<Heading
				size='3xl'
			>
				{currentYear} Calendar
			</Heading>
			<MonthTabs dates={dates}/>
		</Box>
	);
}

export default Calendar;
