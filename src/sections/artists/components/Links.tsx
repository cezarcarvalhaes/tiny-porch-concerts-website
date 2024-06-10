import {
	Box,
	Link,
	Icon,
} from '@chakra-ui/react';
import {
	FaFacebook,
	FaLink,
	FaSpotify,
	FaTwitter,
	FaInstagram,
	FaSoundcloud,
} from 'react-icons/fa';
import { IoLogoVenmo } from 'react-icons/io5';
import If from '@ui/If';
import type { ArtistInfo } from '@util/getArtistFiles';

type LinkData = Omit<ArtistInfo['data'], 'image' | 'name'>;
type LinksProps = { links: LinkData };

function LinkItem({ href, icon, label }) {
	return (
		<If condition={Boolean(label)}>
			<Box>
				<Link
					href={href}
					isExternal
				>
					<Icon as={icon} />{label}
				</Link>
			</Box>
		</If>
	);
}

function Links({ links }: LinksProps) {
	const {
		venmo,
		genre,
		website,
		facebook,
		instagram,
		twitter,
		spotify,
		soundcloud,
	} = links ?? {};
	return (
		<Box>
			<LinkItem href={venmo} icon={IoLogoVenmo} label='Venmo' />
			<LinkItem href={genre} icon={FaLink} label='Genre' />
			<LinkItem href={website} icon={FaLink} label='Website' />
			<LinkItem href={facebook} icon={FaFacebook} label='Facebook' />
			<LinkItem href={instagram} icon={FaInstagram} label='Instagram' />
			<LinkItem href={twitter} icon={FaTwitter} label='Twitter' />
			<LinkItem href={spotify} icon={FaSpotify} label='Spotify' />
			<LinkItem href={soundcloud} icon={FaSoundcloud} label='Soundcloud' />
		</Box>
	);
}

export default Links;
