import {
	Flex,
	Icon,
	Heading,
	Stack,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

import PorchBox from './PorchBox';

interface PorchInfoProps {
  porch_1_address: string;
  porch_1_performer_1?: string;
  porch_1_performer_1_link?: string;
  porch_1_time_1?: string;
  porch_1_performer_2?: string;
  porch_1_performer_2_link?: string;
  porch_1_time_2?: string;
  porch_2_address?: string;
  porch_2_performer_1?: string;
  porch_2_performer_1_link?: string;
  porch_2_time_1?: string;
  porch_2_performer_2?: string;
  porch_2_performer_2_link?: string;
  porch_2_time_2?: string;
  porch_3_address?: string;
  porch_3_performer_1?: string;
  porch_3_performer_1_link?: string;
  porch_3_time_1?: string;
  porch_3_performer_2?: string;
  porch_3_performer_2_link?: string;
  porch_3_time_2?: string;
}

function PorchInfo(props: PorchInfoProps) {
	const porches = Object.entries(props).reduce((acc, [key, value]) => {
		if (key.startsWith('porch')) {
			const newKey = key.substring(8);
			const destination = key.substring(0, 7).replace('_', '');
			return { ...acc, [destination]: { ...acc[destination], [newKey]: value } };
		}
		return acc;
	}, {} as Record<string, Record<string, string>>);
	return (
		<Flex
			flexDirection='column'
			w='full'
		>
			<Heading variant='secondary' textAlign='center'>
          Host Porches
			</Heading>
			{Object.values(porches).map(({
				address = '',
				performer_1 = '',
				performer_1_link,
				performer_1_time = '',
				performer_2 = '',
				performer_2_link,
				performer_2_time = '',
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
					<PorchBox
						performer={performer_1}
						performerLink={performer_1_link}
						time={performer_1_time}
					/>
					<PorchBox
						performer={performer_2}
						performerLink={performer_2_link}
						time={performer_2_time}
					/>
				</Stack>
			))}
		</Flex>
	);
}

export default PorchInfo;
