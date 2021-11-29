import { motion } from 'framer-motion';

const Button = ({ text }) => {
	return (
		<motion.button
			className='py-1 px-3 bg-primary transition-colors hover:bg-red-500 text-white font-montserrat font-bold text-medium hover:shadow-button'
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
