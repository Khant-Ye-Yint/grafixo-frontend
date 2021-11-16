import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../shared/Button';

const Service = ({ reverse, bgColor, propImg }) => {
	const bgGradi = bgColor === 'red' ? 'bg-redGradi' : 'blue' && 'bg-blueGradi';
	const propImgUrl =
		propImg === 'laptop'
			? '/images/laptop.png'
			: 'camera' && '/images/camera.png';

	const { ref, inView } = useInView();

	const variants = {
		view: { x: 0, opacity: 1 },
		notInView: { x: -100, opacity: 0 },
	};

	return (
		<div
			ref={ref}
			className={`h-section w-full px-contain ${bgGradi} bg-cover bg-no-repeat flex ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} justify-start items-center`}
		>
			<motion.div
				className={`flex flex-col ${
					reverse ? 'items-end' : 'items-start'
				} space-y-5 w-1/2`}
				variants={variants}
				animate={inView ? 'view' : 'notInView'}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<h1 className='text-larger text-primary font-bree'>
					3D Modeling and Rendering
				</h1>
				<p
					className={`text-small font-montserrat ${
						reverse ? 'text-right' : 'text-left'
					} text-white`}
				>
					We offer high quality and photorealistic 3D modeling and rendering
					services for commercial and 3D printing.
				</p>
				<Button text='Learn more' />
			</motion.div>
			<div
				className={`absolute h-section w-sectionImg ${
					reverse ? 'left-0' : 'right-0'
				}`}
			>
				<Image src={propImgUrl} layout='fill' objectFit='contain' />
			</div>
		</div>
	);
};

export default Service;
