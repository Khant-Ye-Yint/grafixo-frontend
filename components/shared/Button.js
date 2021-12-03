import { motion } from 'framer-motion';

const Button = ({ text, ...rest }) => {
	return (
		<motion.button
			{...rest}
			className='py-1 px-3 bg-primary  text-white font-montserrat font-bold text-medium hover:shadow-button'
			whileTap={{
				scale: 0.8,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
			whileHover={{
				backgroundColor: '#e84b41',
				scale: 1.1,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
		>
			{text}
		</motion.button>
	);
};

export default Button;
