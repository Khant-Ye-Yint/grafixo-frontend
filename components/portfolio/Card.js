import Image from 'next/image';
import { useState } from 'react';

const Card = ({ imgSrc, imgAlt }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className='w-full h-96 cursor-pointer relative flex justify-center items-center'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className='w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5 opacity-0 hover:opacity-100 bg-black bg-opacity-0 hover:bg-opacity-40 transition ease-in-out duration-500'>
				<h1 className='text-white font-montserrat font-bold text-3xl'>
					Polaroid
				</h1>
			</div>
			<div className='z-10'>
				<Image
					src={imgSrc}
					alt={imgAlt}
					layout='fill'
					objectPosition='center'
					objectFit='cover'
					className={`${
						hover && 'scale-125 filter blur-sm transition duration-500'
					} transition duration-500`}
				/>
			</div>
		</div>
	);
};

export default Card;
