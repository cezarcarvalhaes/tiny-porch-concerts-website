import {
	Flex,
	Heading,
	Image,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react';

import { EventInfo } from '@util/importDateFiles';
import PorchInfo from './PorchInfo';
import FoodVendors from './FoodVendors';

const dateOptions: Intl.DateTimeFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	timeZone: 'UTC',
};

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', dateOptions);

function MonthTabs({ dates }: { dates: EventInfo[] }) {
	const info = dates.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());

	// Find the next upcoming event based on today's date.
	const defaultIndex = info.findIndex(({ date }) => {
		const endOfDate = new Date(date);
		endOfDate.setHours(23, 59, 59, 999);
		return endOfDate.valueOf() > Date.now();
	}) || 0;
	return (
		<Tabs
			mt={8}
			display='flex'
			flexDirection='column'
			defaultIndex={defaultIndex}
		>
			<TabList
				flexDirection={{ base: 'row' }}
				border='none'
				flexWrap='wrap'
				justifyContent='space-evenly'
			>
				{info.map(({ date, month }) => (
					<Tab
						key={date}
					>
						<Heading
							variant='secondary'
							color='inherit'
						>
							{month}
						</Heading>
					</Tab>
				))}
			</TabList>

			<TabPanels>
				{info.map(({
					date,
					image,
					alt,
					porches,
					food_vendors,
				}) => (
					<TabPanel key={date}>
						<Heading
							variant='secondary'
							my={8}
							textAlign='center'
							borderRadius={12}
							backgroundColor='brand.blue'
							py={8}
						>
							{formatDate(date)}
						</Heading>
						<Flex
							w='full'
							flexDir={{ base: 'column', md: 'row' }}
							alignItems='center'
						>
							<PorchInfo porchInfo={porches} />
							<Flex
								w='full'
								flexDir='column'
								alignItems='center'
								pt={{ base: 8, md: 0 }}
								pl={{ base: 0, md: 8 }}
							>
								<Heading variant={'secondary'} textAlign='center'>
									Map
								</Heading>
								<Image
									w='full'
									src={image || '/images/uploads/coming-soon.png'}
									alt={alt || 'Map Coming Soon'}
									my='auto'
									p={1}
								/>
							</Flex>
						</Flex>
						<FoodVendors vendors={food_vendors} />
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
}

export default MonthTabs;
