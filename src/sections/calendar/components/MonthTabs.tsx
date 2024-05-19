import {
	Flex,
	Heading,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react';

import { EventInfo } from '@util/importDateFiles';
import PorchInfo from './PorchInfo';

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
	return (
		<Tabs
			mt={8}
			display='flex'
			flexDirection='column'
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
								<img
									src={`/images/uploads/${image || 'coming-soon.png'}`}
									alt={alt || 'Map Coming Soon'}
									className='my-auto'
								/>
							</Flex>
						</Flex>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	);
}

export default MonthTabs;
