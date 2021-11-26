import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Button from '../shared/Button';

import LaptopImg from '../../public/images/laptop.png';
import CameraImg from '../../public/images/camera.png';
import SewingMImg from '../../public/images/sewingMachine.png';

const Service = ({ reverse, bgColor, propImg, title, para }) => {
	const bgGradi = bgColor === 'red' ? 'bg-redGradi' : 'blue' && 'bg-blueGradi';
	let imgSrc;

	switch (propImg) {
		case 'laptop':
			imgSrc = LaptopImg;
			break;
		case 'camera':
			imgSrc = CameraImg;
			break;
		case 'sewingM':
			imgSrc = SewingMImg;
			break;
		default:
			imgSrc = LaptopImg;
	}

	const { ref, inView } = useInView();

	const variants = {
		view: { x: 0, opacity: 1 },
		notInView: { x: -400, opacity: 0 },
	};

	return (
		<div
			className={`h-section w-full px-contain ${bgGradi} bg-cover bg-no-repeat flex ${
				reverse ? 'flex-row-reverse' : 'flex-row'
			} justify-between items-center`}
		>
			<div ref={ref} className='w-1/2'>
				<motion.div
					className={`flex flex-col ${
						reverse ? 'items-end text-right' : 'items-start text-left'
					} space-y-5 w-full z-10 `}
					variants={variants}
					initial='notInView'
					animate={inView && 'view'}
					transition={{ duration: 1.5 }}
				>
					<h1 className='text-larger text-primary font-bree text-shadow'>
						{title}
					</h1>
					<p className='laptop:text-normal desktop:text-medium font-montserrat text-lightGray w-2/3'>
						{para}
					</p>
					<Button text='Learn more' />
				</motion.div>
			</div>
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
