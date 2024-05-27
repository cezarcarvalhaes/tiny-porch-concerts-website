import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

interface FooterLinkProps {
  href: string;
  children: string;
}

function FooterLink({ href, children }: FooterLinkProps) {
	if (!href) {
		return <li>{children}</li>;
	}
	return (
		<li>
			<Link
				fontFamily='BobbyJones, sans-serif'
				fontSize='lg'
				as={NextLink}
				href={href}
			>
				{children}
			</Link>
		</li>
	);
}

export default FooterLink;
