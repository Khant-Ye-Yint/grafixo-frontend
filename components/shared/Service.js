import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../shared/Button';

import LaptopImg from '../../public/images/laptop.png';
import CameraImg from '../../public/images/camera.png';

const Service = ({ reverse, bgColor, propImg }) => {
	const bgGradi = bgColor === 'red' ? 'bg-redGradi' : 'blue' && 'bg-blueGradi';
	const imgSrc = propImg === 'laptop' ? LaptopImg : CameraImg;

	const { ref, inView } = useInView();

	const variants = {
		view: { x: 0, opacity: 1 },
		notInView: { x: -300, opacity: 0 },
	};

	return (
		<div
			ref={ref}
			className={`h-section w-full px-contain ${bgGradi} bg-cover bg-no-repeat flex ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} justify-between items-center`}
		>
			<motion.div
				className={`flex flex-col ${
					reverse ? 'items-end text-right' : 'items-start text-left'
				} space-y-5 w-1/2 z-10 `}
				variants={variants}
				animate={inView ? 'view' : 'notInView'}
				transition={{ duration: 1.5 }}
			>
				<h1 className='text-larger text-primary font-bree text-shadow'>
					3D Modeling and Rendering
				</h1>
				<p className='text-normal font-montserrat text-white'>
					We offer high quality and photorealistic 3D modeling and rendering
					services for commercial and 3D printing.
				</p>
				<Button text='Learn more' />
			</motion.div>
			<div className='w-1/2 h-5/6 relative'>
				<Image
					src={imgSrc}
					layout='fill'
					objectFit='contain'
					objectPosition={`${reverse ? 'left' : 'right'}`}
				/>
			</div>
		</div>
	);
};

export default Service;
