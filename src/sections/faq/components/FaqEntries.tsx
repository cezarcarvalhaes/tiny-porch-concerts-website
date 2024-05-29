import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	BoxProps,
} from '@chakra-ui/react';
import Markdown from 'react-markdown';

import type { FaqEntry } from '@util/importFaqEntries';

interface FaqEntriesProps extends BoxProps {
  entries: FaqEntry[];
}

function FaqEntries({ entries = [], ...boxProps }: FaqEntriesProps) {
	return (
		<Box {...boxProps}>
			<Accordion
				defaultIndex={[0]}
				allowMultiple
			>
				{entries.map(({ question, answer }, index) => (
					<AccordionItem key={index}>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									{question}
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							<Markdown className="markdown markdown-subdued">{answer}</Markdown>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Box>
	);
}

export default FaqEntries;
