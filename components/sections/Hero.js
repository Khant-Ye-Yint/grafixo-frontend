import Image from 'next/image';

import Button from '../shared/Button';

const Hero = () => {
	return (
		<div className='h-vh90 flex flex-row justify-between items-center p-contain'>
			<div className='w-1/2 flex flex-col items-start space-y-5 z-10'>
				<h1 className='text-white font-bree text-larger'>
					We Make 3D <span className='text-primary font-bold'>Animation</span>
				</h1>
				<p className='text-gray-200 text-medium font-montserrat'>
					Build your dreams and imaginations into 3D world
				</p>
				<Button text='Hire now' />
			</div>
			<Image src='/images/tempBg.png' layout='fill' objectFit='cover' />
			<div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
		</div>
	);
};

export default Hero;
