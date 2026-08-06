import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import PressView from '@sections/press';

function Press() {
	return (
		<>
			<Head>
				<title>Press | Porch</title>
				<meta property="og:title" content="Press | Porch Night"/>
				<meta name="twitter:title" content="Press | Porch Night" />
			</Head>
			<Flex
				background='brand.orange'
				flexDirection='column'
				flexGrow={1}
			>
				<PressView />
			</Flex>
		</>
	);
}

export default Press;
