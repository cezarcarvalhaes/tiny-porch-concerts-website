import { Container } from '@chakra-ui/react';
import Header from './components/Header';
import MediaList from './components/MediaList';

function PressView() {
	return (
		<Container
			maxW="container.lg"
			py={8}
		>
			<Header my={8}/>
			<MediaList />
		</Container>
	);
}

export default PressView;
