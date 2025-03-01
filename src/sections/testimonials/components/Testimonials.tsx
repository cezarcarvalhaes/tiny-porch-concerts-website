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
import If from '@ui/If';

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
	const [isTransitioning, setIsTransitioning] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	// Clear the interval
	const clearCarouselInterval = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	// Function to set up the interval
	const startInterval = useCallback(() => {
		clearCarouselInterval();

		if (isPlaying && testimonials.length > 1) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prev) => (prev + 1) % testimonials.length);
			}, interval);
		}
	}, [isPlaying, testimonials.length, interval, clearCarouselInterval]);

	const changeSlide = useCallback((newIndex: number) => {
		if (isTransitioning) return; // Prevent changing during transition

		setIsTransitioning(true);
		setCurrentIndex(newIndex);

		// Reset the interval
		clearCarouselInterval();
		if (isPlaying) {
			// Delay starting new interval until animation completes
			setTimeout(() => {
				startInterval();
				setIsTransitioning(false);
			}, 500); // Match this with animation duration
		} else {
			setTimeout(() => {
				setIsTransitioning(false);
			}, 500);
		}
	}, [isTransitioning, isPlaying, clearCarouselInterval, startInterval]);

	const handleNext = useCallback(() => {
		const newIndex = (currentIndex + 1) % testimonials.length;
		changeSlide(newIndex);
	}, [currentIndex, testimonials.length, changeSlide]);

	const handlePrev = useCallback(() => {
		const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
		changeSlide(newIndex);
	}, [currentIndex, testimonials.length, changeSlide]);

	const handleDotClick = useCallback((index: number) => {
		if (index !== currentIndex) {
			changeSlide(index);
		}
	}, [currentIndex, changeSlide]);

	const togglePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
	}, []);

	// Set up interval when component mounts or when dependencies change
	useEffect(() => {
		// Only start the interval if playing and not transitioning
		if (isPlaying && !isTransitioning && testimonials.length > 1) {
			startInterval();
		}

		// Clean up on unmount or when dependencies change
		return clearCarouselInterval;
	}, [isPlaying, isTransitioning, testimonials.length, startInterval, clearCarouselInterval]);

	const isMobile = useBreakpointValue({ base: true, md: false });

	if (testimonials.length === 0) {
		return null;
	}

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
				<If condition={testimonials.length > 1}>
					<>
						<Flex justify="center" mt={6} gap={4}>
							<Button
								onClick={handlePrev}
								aria-label="Previous testimonial"
								size={isMobile ? 'sm' : 'md'}
								variant="outline"
								isDisabled={isTransitioning}
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
								isDisabled={isTransitioning}
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
									cursor={isTransitioning ? 'not-allowed' : 'pointer'}
									onClick={() => !isTransitioning && handleDotClick(index)}
								/>
							))}
						</Flex>
					</>
				</If>
			</Box>
		</Box>
	);
};

export default Testimonials;
