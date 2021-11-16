import Image from 'next/image';

import Button from '../shared/Button';

import TextLoop from 'react-text-loop';

const Hero = () => {
	return (
		<div className='h-vh100 flex flex-row justify-between items-center p-contain bg-heroBg bg-cover bg-no-repeat'>
			<div className=' flex flex-col items-start space-y-5 z-10'>
				<h1 className='text-white font-bree text-larger'>
					We Make 3D{' '}
					<TextLoop
						children={['Animation', '3D Modeling and Rendering']}
						className='text-primary font-bold break-words'
						springConfig={{ stiffness: 180, damping: 8 }}
					/>
				</h1>
				<p className='text-gray-200 text-medium font-montserrat'>
					Build your dreams and imaginations into 3D world
				</p>
				<Button text='Hire now' />
			</div>
			<div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
		</div>
	);
};

export default Hero;
