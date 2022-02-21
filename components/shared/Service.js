import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Media from 'react-media';

import Button from '../shared/Button';

import LaptopImg from '../../public/images/laptop.png';
import CameraImg from '../../public/images/camera.png';
import SewingMImg from '../../public/images/sewingMachine.png';

const Service = ({ reverse, bgColor, propImg, title, para }) => {
	// const bgGradi = bgColor === 'red' ? 'bg-redGradi' : 'blue' && 'bg-blueGradi';
	const bgGradi =
		bgColor === 'red'
			? 'from-red-600 to-red-800'
			: 'blue' && 'from-blue-600 to-blue-800';
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
			className={` w-full laptop:px-contain laptop:py-5 tablet:p-tabletContain phone:p-phone   bg-gradient-to-l ${bgGradi} bg-cover bg-no-repeat flex  ${
				reverse
					? 'laptop:flex-row-reverse tablet:flex-row-reverse phone:flex-col'
					: 'laptop:flex-row tablet:flex-row phone:flex-col'
			} justify-between items-center laptop:space-y-0 tablet:space-y-10 phone:space-y-10`}
		>
			<div ref={ref} className='w-full tablet:w-full'>
				<motion.div
					className={`flex flex-col  ${
						reverse
							? 'items-end text-right tablet:items-end tablet:text-right phone:text-left phone:items-start'
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
					<p className='laptop:text-normal desktop:text-medium font-montserrat text-white w-2/3 phone:w-full'>
						{para}
					</p>
					<Button text='Learn more' />
				</motion.div>
			</div>
			<Media
				queries={{
					small: '(max-width: 599px)',
					medium: '(min-width: 600px) and (max-width: 1199px)',
					large: '(min-width: 1200px)',
				}}
			>
				{(matches) =>
					matches.small ? null : (
						<div className='w-full tablet:h-60 laptop:h-96 phone:h-52 tablet:w-full relative '>
							<Image
								src={imgSrc}
								layout='fill'
								objectFit='contain'
								objectPosition={`${reverse ? 'left' : 'right'}`}
							/>
						</div>
					)
				}
			</Media>
		</div>
	);
};

export default Service;
