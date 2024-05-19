type YamlModule = {
  default: object;
  [key: string]: any;
};

export interface FaqEntry {
  question: string;
  answer: string;
}

const importFaqEntries = async (): Promise<FaqEntry[]> => {
	const yamlFiles = (require as any)
		.context('../../content/pages/faq', false, /\.ya?ml$/)
		.keys()
		.filter((pathName: string) => !pathName.includes('content/pages/faq'))
		.map((relativePath: string) => relativePath.substring(2));
	const [data] = await Promise.all(
		yamlFiles.map(async (path: string) => {
			const yaml: YamlModule = await import(`../../content/pages/faq/${path}`);
			return { ...yaml.default };
		}),
	);
	// only one file is expected
	return data.entries;
};

export default importFaqEntries;
