import {
	Flex,
	Heading,
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react';

import { MarkdownData } from '@util/importMarkdownFiles';

function MonthTabs({ dates }: { dates: MarkdownData[] }) {
	const info = dates.map(({ attributes }) => attributes)
		.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
	return (
		<Tabs
			display='flex'
		>
			<TabPanels>
				{info.map(({
					date,
					image,
					alt,
				}) => (
					<TabPanel key={date}>
						<Flex
							w='full'
							justifyContent='center'
							alignItems='center'
						>
							<Flex
								w={{ base: '50%', md: 'full' }}
								justifyContent='center'
								p={4}
							>
								<img
									src={`/images/uploads/${image || 'coming-soon.png'}`}
									alt={alt || 'Coming Soon'}
									className='my-auto'
								/>
							</Flex>
						</Flex>
						<Heading variant='secondary' textAlign='center' my={8}>
							{new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })}
						</Heading>
					</TabPanel>
				))}
			</TabPanels>

			<TabList
				flexDirection='column'
				border='none'
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
		</Tabs>
	);
}

export default MonthTabs;
