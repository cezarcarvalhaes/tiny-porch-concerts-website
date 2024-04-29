type MarkdownModule = {
  default: string;
  [key: string]: any;
};

export type MarkdownData = {
  default: string;
  slug: string;
  [key: string]: any;
};

const importMarkdownFiles = async (): Promise<MarkdownData[]> => {
	const markdownFiles = (require as any)
		.context('../../content/dates', false, /\.md$/)
		.keys()
		.filter((pathName: string) => !pathName.includes('content/dates'))
		.map((relativePath: string) => relativePath.substring(2));
	return Promise.all(
		markdownFiles.map(async (path: string) => {
			const markdown: MarkdownModule = await import(`../../content/dates/${path}`);
			return { ...markdown, slug: path.substring(0, path.length - 3) };
		}),
	);
};

export default importMarkdownFiles;
