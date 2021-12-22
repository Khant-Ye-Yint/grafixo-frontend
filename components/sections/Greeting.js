import AnimatedLine from '../shared/AnimatedLine';

import { ParallaxBanner } from 'react-scroll-parallax';
import useDevice from '../../hooks/useDevice';

const Greeting = () => {
	const device = useDevice();

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
				height: '20rem',
			}}
		>
			<div className='absolute w-full grid place-items-center  transformYCenter phone:px-phone'>
				<h1 className='font-bree text-medium text-white border-red-400 text-center text-shadow mb-5  tablet:w-2/3 phone:w-full '>
					Are you finding the way to show your product details or properly
					explain how it works? {device !== 'phone' && <br />} There is no
					easier way than a perfect 3D animation to show your product to the
					world.
				</h1>
				<AnimatedLine />
			</div>
		</ParallaxBanner>
	);
};

export default Greeting;
