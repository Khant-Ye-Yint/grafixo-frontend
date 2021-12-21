import AnimatedLine from '../shared/AnimatedLine';

import { ParallaxBanner } from 'react-scroll-parallax';

const Greeting = () => {
	return (
		<ParallaxBanner
			layers={[
				{
					image: '/images/darkBg.png',
					amount: 0.8,
					expended: true,
				},
			]}
			style={{
				height: '25rem',
			}}
		>
			<div className='absolute tablet:p-tabletContain laptop:p-contain phone:py-20 phone:px-phone grid place-items-center z-10 transformYCenter'>
				<h1 className='font-bree text-medium text-white border-red-400 text-center text-shadow mb-5 w-1/3 tablet:w-2/3 phone:w-full '>
					Are you finding the way to show your product details or properly
					explain how it works? There is no easier way than a perfect 3D
					animation to show your product to the world.
				</h1>
				<AnimatedLine />
			</div>
		</ParallaxBanner>
	);
};

export default Greeting;
