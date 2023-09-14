'use client';

import {
	Box,
	Container,
	Flex,
	Image,
	Heading,
	Button,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function CallToActionWithAnnotation() {
	return (
		<>
			<Container maxW={'3xl'}>
				<Stack
					as={Box}
					textAlign={'center'}
					spacing={{ base: 6, md: 10 }}
					py={{ base: 14, md: 25 }}
				>
					<Flex padding='2em'>
						<Image
							w='25%'
							src='./guitar.png'
							fit='contain'
							alt='Presented
							by Woodland Heights'
							fallback={<Text>Presented By Woodland Heights</Text>}
						/>
						<Image
							w='full'
							fit='contain'
							src='./header.png'
							alt='Tiny Porch Concerts'
							fallback={<Heading>Tiny Porch Concerts</Heading>}
						/>
					</Flex>
					<Stack
						direction={'column'}
						spacing={3}
						align={'center'}
						alignSelf={'center'}
						position={'relative'}>
						<Text as='b' fontSize='4xl'>Website Coming Soon!</Text>
						<Button
							as='a'
							// href='https://google.com'
							href='https://docs.google.com/presentation/d/1r71psQlGfY-Sjz05SP9A9ZJBxHXrjkqztbPz3uEoNaE/present?slide=id.g274854fc1bd_0_0'
							target='_blank'
							rel='noopener noreferrer'
							colorScheme={'blue'}
							bg={'blue.400'}
							rounded={'full'}
							px={6}
							_hover={{
								bg: 'blue.500',
							}}
							rightIcon={<FaExternalLinkAlt/>}
						>
              Learn more
						</Button>
						<Text fontSize='2xl' marginTop={'2em'}>Next concert date: <br/> September 24th, 2023</Text>

					</Stack>
				</Stack>
			</Container>
		</>
	);
}
