import testimonialData from '@content/pages/testimonials/testimonials.json';
import Testimonials from './components/Testimonials';

const { entries } = testimonialData;
function TestimonialSection() {
	return (
		<Testimonials testimonials={entries} />
	);
}

export default TestimonialSection;
