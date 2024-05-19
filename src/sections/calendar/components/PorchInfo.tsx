import {
	Flex,
	Icon,
	Heading,
	Stack,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

import type { EventInfo } from '@util/importDateFiles';
import PorchBox from './PorchBox';

function PorchInfo({ porchInfo = [] }: { porchInfo: EventInfo['porches'] }) {
	return (
		<Flex
			flexDirection='column'
			w='full'
		>
			<Heading variant='secondary' textAlign='center'>
          Host Porches
			</Heading>
			{porchInfo.map(({
				address = '',
				performers = [],
			}) => (
				<Stack
					key={address}
					mb={4}
					backgroundColor='brand.yellow'
					p={6}
					maxW='30em'
					borderRadius={12}
				>
					<Heading variant='secondary'>
						{address}
						<Icon
							as={FaHome}
							ml={2}
						/>
					</Heading>
					{performers.map(({
						name,
						link,
						time,
					}) => (
						<PorchBox
							key={name}
							performer={name}
							performerLink={link}
							time={time}
						/>
					))}
				</Stack>
			))}
		</Flex>
	);
}

export default PorchInfo;
