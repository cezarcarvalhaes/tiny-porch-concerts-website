import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface ArtistData {
	name: string,
	image?: string,
	venmo?: string,
	genre?: string,
	website?: string,
	facebook?: string,
	instagram?: string,
	twitter?: string,
	spotify?: string,
	soundcloud?: string,
}

export interface ArtistInfo {
	data: ArtistData,
	content: string,
}

const getArtistFiles = async () => {
	const artistFiles = (require as any)
		.context('../../content/pages/artists', false, /\.md$/)
		.keys()
		.filter((pathName: string) => !pathName.includes('content/pages/artists'))
		.map((relativePath: string) => relativePath.substring(2));
	return Promise.all(
		artistFiles.map(async (filename: string) => {
			const markdown = await import(`../../content/pages/artists/${filename}`);
			return { ...markdown.default, slug: filename.substring(0, filename.length - 3) };
		}),
	);
};

function getArtistInfo(slug: string): ArtistInfo {
	const filePath = path.join(process.cwd(), 'content', 'pages', 'artists', `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContents);
	return {
		data: (data as ArtistData),
		content,
	};
}

export {
	getArtistFiles,
	getArtistInfo,
};
