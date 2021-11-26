import Image from 'next/image';

import Button from '../shared/Button';

import TextLoop from 'react-text-loop';

const Hero = () => {
	return (
		<div className='h-vh100 flex flex-row justify-between items-center p-contain bg-heroBg bg-cover bg-no-repeat'>
			<div className=' flex flex-col items-start space-y-5 z-10'>
				<h1 className='text-white font-bree laptop:text-larger desktop:text-largest'>
					We Make 3D{' '}
					<TextLoop
						children={['Animation', 'Modeling', 'Rendering']}
						className='text-primary font-bold break-words text-shadow'
						springConfig={{ stiffness: 180 }}
					/>
				</h1>
				<p className=' text-lightGray text-medium font-montserrat w-1/2'>
					Are you finding the way to show your product details or properly
					explain how it works? There is no easier way than a perfect 3d
					animation to show your product to the world.
				</p>
				<Button text='Hire now' />
			</div>
			<div className='w-full h-full bg-black absolute top-0 left-0 opacity-50'></div>
		</div>
	);
};

export default Hero;
