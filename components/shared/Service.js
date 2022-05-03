import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Media from 'react-media';
import Button from '../shared/Button';

const Service = ({ reverse, img, title, para, bgClass }) => {
	const { ref, inView } = useInView();

	const variants = {
		view: { x: 0, opacity: 1 },
		notInView: { x: -400, opacity: 0 },
	};

	return (
		<div
			className={` w-full laptop:px-contain laptop:py-5 tablet:p-tabletContain phone:p-phone flex bg-gradient-to-r  ${
				reverse
					? 'laptop:flex-row-reverse tablet:flex-row-reverse phone:flex-col'
					: 'laptop:flex-row tablet:flex-row phone:flex-col'
			} justify-between items-center laptop:space-y-0 tablet:space-y-10 phone:space-y-10 ${bgClass}`}
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
					<Link href='/portfolio'>
						<Button text='Learn more' />
					</Link>
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
								src={img}
								layout='fill'
								objectFit='contain'
								objectPosition={`${reverse ? 'left' : 'right'}`}
								priority={true}
							/>
						</div>
					)
				}
			</Media>
		</div>
	);
};

export default Service;
