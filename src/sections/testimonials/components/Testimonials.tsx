import {
	useState, useEffect, useCallback, useRef,
} from 'react';
import {
	Box, Text, Flex, Button, Icon, useBreakpointValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	FaChevronRight, FaChevronLeft, FaPause, FaPlay,
} from 'react-icons/fa';

const MotionBox = motion(Box);

interface TestimonialProps {
  text: string;
  author: string;
  role?: string;
}

interface TestimonialsProps {
  testimonials: TestimonialProps[];
  interval?: number; // Time in ms between testimonials
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, interval = 5000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Function to set up the interval
	const startInterval = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		if (isPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
			}, interval);
		}
	}, [isPlaying, testimonials.length, interval]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

		// Reset the interval to prevent jarring transitions
		if (isPlaying) {
			startInterval();
		}
	}, [testimonials.length, isPlaying, startInterval]);

	const handlePrev = useCallback(() => {
		setCurrentIndex((prevIndex) => (
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		));

		// Reset the interval to prevent jarring transitions
		if (isPlaying) {
			startInterval();
		}
	}, [testimonials.length, isPlaying, startInterval]);

	const togglePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	// Set up interval when component mounts or when dependencies change
	useEffect(() => {
		startInterval();

		// Clean up on unmount or when dependencies change
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isPlaying, startInterval]);

	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Box py={10} px={4}>
			<Box position="relative" maxW="800px" mx="auto" textAlign="center">
				<AnimatePresence mode="wait">
					<MotionBox
						key={currentIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						minH={{ base: '200px', md: '180px' }}
						display="flex"
						flexDirection="column"
						justifyContent="center"
					>
						<Text fontSize="xl" fontStyle="italic" mb={4}>
              &quot;{testimonials[currentIndex].text}&quot;
						</Text>
						<Text fontWeight="bold">
							{testimonials[currentIndex].author}
						</Text>
						{testimonials[currentIndex].role && (
							<Text fontSize="sm" color="gray.600">
								{testimonials[currentIndex].role}
							</Text>
						)}
					</MotionBox>
				</AnimatePresence>

				<Flex justify="center" mt={6} gap={4}>
					<Button
						onClick={handlePrev}
						aria-label="Previous testimonial"
						size={isMobile ? 'sm' : 'md'}
						variant="outline"
					>
						<Icon as={FaChevronLeft} />
					</Button>

					<Button
						onClick={togglePlayPause}
						aria-label={isPlaying ? 'Pause' : 'Play'}
						size={isMobile ? 'sm' : 'md'}
						variant="outline"
					>
						<Icon as={isPlaying ? FaPause : FaPlay} />
					</Button>

					<Button
						onClick={handleNext}
						aria-label="Next testimonial"
						size={isMobile ? 'sm' : 'md'}
						variant="outline"
					>
						<Icon as={FaChevronRight} />
					</Button>
				</Flex>

				<Flex justify="center" mt={4}>
					{testimonials.map((_, index) => (
						<Box
							key={index}
							h="8px"
							w="8px"
							borderRadius="50%"
							bg={index === currentIndex ? 'blue.500' : 'gray.300'}
							mx={1}
							cursor="pointer"
							onClick={() => {
								setCurrentIndex(index);
								if (isPlaying) {
									startInterval();
								}
							}}
						/>
					))}
				</Flex>
			</Box>
		</Box>
	);
};

export default Testimonials;
