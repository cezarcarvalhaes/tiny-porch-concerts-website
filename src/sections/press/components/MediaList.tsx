import {
	Box,
} from '@chakra-ui/react';
import mediaLinks from '@content/pages/press/media-links.json';

import MediaItem from './MediaItem';

function MediaList() {
	const info = mediaLinks.entries.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			mt={8}
		>
			{info.map((mediaItem) => (
				<MediaItem
					key={mediaItem.title}
					{...mediaItem}
				/>
			))}
		</Box>
	);
}

export default MediaList;
