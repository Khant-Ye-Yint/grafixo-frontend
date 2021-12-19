import AnimatedLine from '../shared/AnimatedLine';
import { Parallax } from 'react-parallax';
import { useRef } from 'react';

const Greeting = () => {
	const refEl = useRef(null);

	return (
		<Parallax
			bgImage='/images/darkBg.png'
			style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
			strength={600}
		>
			<div name='greeting'>
				<div
					className='tablet:p-tabletContain laptop:p-contain phone:py-20 phone:px-phone grid place-items-center z-10'
					ref={refEl}
				>
					<h1 className='font-bree text-medium text-white border-red-400 text-center text-shadow mb-5 w-1/3 tablet:w-2/3 phone:w-full  z-20'>
						Are you finding the way to show your product details or properly
						explain how it works? There is no easier way than a perfect 3D
						animation to show your product to the world.
					</h1>
					<AnimatedLine />
				</div>
			</div>
		</Parallax>
	);
};

export default Greeting;
