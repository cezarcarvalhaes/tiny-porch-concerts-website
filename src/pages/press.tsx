import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import PressView from '@sections/press';

function Press() {
	return (
		<>
			<Head>
				<title>Press | Tiny Porch Concerts</title>
				<meta property="og:title" content="Press | Tiny Porch Concerts"/>
				<meta name="twitter:title" content="Press | Tiny Porch Concerts" />
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
