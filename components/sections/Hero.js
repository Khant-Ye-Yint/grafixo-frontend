import Button from '../shared/Button';
import { ChevronDownIcon } from '@heroicons/react/solid';
import TextLoop from 'react-text-loop';
import * as Scroll from 'react-scroll';

const Hero = () => {
	const { animateScroll } = Scroll;

	const handleScroll = () => {
		animateScroll.scrollTo(500);
	};

	return (
		<div className='h-vh100 flex flex-row justify-between items-center laptop:p-contain tablet:px-tabletContain phone:px-phone relative'>
			<div className=' flex flex-col items-start space-y-5 z-10'>
				<h1 className='text-white font-bree laptop:text-larger desktop:text-largest phone:text-phoneMedium'>
					We Make 3D{' '}
					<TextLoop
						children={['Animation', 'Modeling', 'Rendering']}
						className='text-primary font-bold break-words text-shadow'
						springConfig={{ stiffness: 180 }}
					/>
				</h1>
				<p className=' text-white text-medium font-montserrat'>
					Turn your vision into life with 3D
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
			<div className='absolute left-0 top-0 w-full h-full bg-black opacity-20'></div>
			<ChevronDownIcon
				className='w-10 h-10 text-lightGray hover:text-white cursor-pointer z-10 absolute bottom-10 transformCenter transition-colors duration-300'
				onClick={handleScroll}
			/>
		</div>
	);
};

export default Hero;
