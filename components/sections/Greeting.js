import Image from 'next/image';
import UnderlineImg from '../../public/images/underline.png';
import { Parallax } from 'react-parallax';

const Greeting = () => {
	return (
		<Parallax bgImage='/images/constellation.png' strength={500}>
			<div
				className='p-contain flex flex-row-reverse justify-start items-center'
				name='greeting'
			>
				<div className='flex flex-col justify-center items-center'>
					<h1 className='font-bree text-medium text-primary border-red-400 text-center mb-5 w-1/2'>
						Are you finding the way to show your product details or properly
						explain how it works? There is no easier way than a perfect 3d
						animation to show your product to the world.
					</h1>
					<Image src={UnderlineImg} />
				</div>
			</div>
		</Parallax>
	);
};

export default Greeting;
