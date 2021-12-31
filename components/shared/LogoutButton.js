import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const LogoutButton = ({ text, ...rest }) => {
	const router = useRouter();

	const handleClick = () => {
		if (typeof window != null) {
			localStorage.removeItem('accessToken');
			router.push('/admin/login');
		}
	};

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
				scale: 1.05,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
			onClick={handleClick}
		>
			{text}
		</motion.button>
	);
};

export default LogoutButton;
