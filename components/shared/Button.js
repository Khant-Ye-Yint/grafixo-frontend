import { motion } from 'framer-motion';

const Button = ({ text }) => {
	return (
		<motion.button
			className='w-40 h-12 bg-primary text-white font-montserrat font-bold text-medium hover:shadow-button'
			whileTap={{
				scale: 0.8,
				transition: { duration: 0.3 },
			}}
		>
			{text}
		</motion.button>
	);
};

export default Button;
