import { Container } from '@chakra-ui/react';
import type { FaqEntry } from '@util/importFaqEntries';
import Header from './components/Header';
import Entries from './components/FaqEntries';

function FaqView({ entries = [] }: { entries: FaqEntry[] }) {
	return (
		<Container
			maxW="container.lg"
			py={8}
		>
			<Header my={8}/>
			<Entries
				entries={entries}
			/>
		</Container>
	);
}

export default FaqView;
