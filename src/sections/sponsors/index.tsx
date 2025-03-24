import sponsorData from '@content/pages/sponsors/sponsors.json';
import Sponsors from './components/Sponsors';

function SponsorSection() {
	const { entries, title } = sponsorData;
	return (
		<Sponsors sponsors={entries} title={title} />
	);
}

export default SponsorSection;
