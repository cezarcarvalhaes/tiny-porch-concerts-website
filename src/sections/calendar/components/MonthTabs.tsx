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
import PorchInfo from './PorchInfo';

function MonthTabs({ dates }: { dates: MarkdownData[] }) {
	const info = dates.map(({ attributes }) => attributes)
		.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
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
					...porchesInfo
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
							The Big Day: {new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })}
						</Heading>
						<Flex
							w='full'
							flexDir={{ base: 'column', md: 'row' }}
							alignItems='center'
						>
							<PorchInfo {...porchesInfo} />
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
