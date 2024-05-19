type YamlModule = {
  default: object;
  [key: string]: any;
};

interface FoodVendorInfo {
  name: string;
  link: string;
  logo: string;
}

interface IPerformerInfo {
  name: string;
  link: string;
  time: string;
}

interface PorchInfo {
  address: string;
  performers: IPerformerInfo[];
}

export interface EventInfo {
  month: string;
  date: string;
  image: string;
	alt: string;
	slug: string;
  food_vendors: FoodVendorInfo[];
  porches: PorchInfo[];
}

const importDateFiles = async (): Promise<EventInfo[]> => {
	const yamlFiles = (require as any)
		.context('../../content/dates', false, /\.ya?ml$/)
		.keys()
		.filter((pathName: string) => !pathName.includes('content/dates'))
		.map((relativePath: string) => relativePath.substring(2));
	return Promise.all(
		yamlFiles.map(async (path: string) => {
			const yaml: YamlModule = await import(`../../content/dates/${path}`);
			return { ...yaml.default, slug: path.substring(0, path.length - 3) };
		}),
	);
};

export default importDateFiles;
