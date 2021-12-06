import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedLine = () => {
	const { ref, inView } = useInView({
		rootMargin: '50px 0px 0px 0px',
	});

	const variants = {
		seen: { width: '25rem' },
		hidden: { width: 0 },
	};

	return (
		<div ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={inView ? 'seen' : 'hidden'}
				transition={{ type: 'tween', duration: 1 }}
				className='border-b-4 border-primary'
			></motion.div>
		</div>
	);
};

export default AnimatedLine;
