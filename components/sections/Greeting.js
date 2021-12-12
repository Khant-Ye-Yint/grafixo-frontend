import AnimatedLine from '../shared/AnimatedLine';
import { Parallax } from 'react-parallax';
import { useRef } from 'react';

const Greeting = () => {
	const refEl = useRef(null);

	return (
		<Parallax bgImage='/images/darkBg.png' strength={500}>
			<div
				className='p-contain flex flex-row-reverse justify-start items-center relative'
				name='greeting'
			>
				<div
					className='flex flex-col justify-center items-center z-10'
					ref={refEl}
				>
					<h1 className='font-bree text-medium text-white border-red-400 text-center mb-5 w-1/2'>
						Are you finding the way to show your product details or properly
						explain how it works? There is no easier way than a perfect 3D
						animation to show your product to the world.
					</h1>
					<AnimatedLine />
				</div>
				<div className='absolute w-full h-full top-0 left-0 bg-gray-500 bg-opacity-30'></div>
			</div>
		</Parallax>
	);
};

export default Greeting;
