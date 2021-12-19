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
			className={` w-full laptop:px-contain laptop:py-16 tablet:p-tabletContain phone:p-phone  ${bgGradi} bg-cover bg-no-repeat flex ${
				reverse
					? 'laptop:flex-row-reverse tablet:flex-col phone:flex-col'
					: 'laptop:flex-row tablet:flex-col phone:flex-col'
			} justify-between items-center tablet:space-y-10 phone:space-y-10`}
		>
			<div ref={ref} className='w-full tablet:w-full'>
				<motion.div
					className={`flex flex-col  ${
						reverse
							? 'items-end text-right phone:text-left phone:items-start'
							: 'items-start text-left'
					} space-y-5 w-full z-10 `}
					variants={variants}
					initial='notInView'
					animate={inView && 'view'}
					transition={{ duration: 1.5 }}
				>
					<h1 className='text-larger phone:text-large text-primary font-bree text-shadow'>
						{title}
					</h1>
					<p className='laptop:text-normal desktop:text-medium font-montserrat text-lightGray w-2/3 phone:w-full'>
						{para}
					</p>
					<Button text='Learn more' />
				</motion.div>
			</div>
			<div className='w-full tablet:h-72 laptop:h-80 phone:h-52 relative'>
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
