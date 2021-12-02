import Button from '../shared/Button';

import TextLoop from 'react-text-loop';

const Hero = () => {
	return (
		<div className='h-vh100 flex flex-row justify-between items-center p-contain bg-cover bg-no-repeat filter relative'>
			<div className=' flex flex-col items-start space-y-5 z-10'>
				<h1 className='text-white font-bree laptop:text-larger desktop:text-largest'>
					We Make 3D{' '}
					<TextLoop
						children={['Animation', 'Modeling', 'Rendering']}
						className='text-primary font-bold break-words text-shadow'
						springConfig={{ stiffness: 180 }}
					/>
				</h1>
				<p className=' text-white text-medium font-montserrat'>
					Turn you vision into life with 3D
				</p>
				<Button text='Get in touch' />
			</div>
			<video
				autoPlay
				muted
				loop
				className='absolute left-0 top-0 w-full h-full object-cover'
			>
				<source src='/video/heroVid.webm' type='video/webm' />
			</video>
			<div className='absolute left-0 top-0 w-full h-full bg-black opacity-50'></div>
		</div>
	);
};

export default Hero;
