import Image from 'next/image';
import { useState } from 'react';
import useDevice from '../../hooks/useDevice';

const Card = ({ imgSrc, imgAlt }) => {
	const [hover, setHover] = useState(false);
	const device = useDevice();

	return (
		<div
			className='w-full laptop:h-96 tablet:h-72 phone:h-48 cursor-pointer relative flex justify-center items-center'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div
				className={`w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5 opacity-0 hover:opacity-100 bg-black bg-opacity-0 hover:bg-opacity-40 transition ease-in-out duration-500 ${
					device !== 'laptop' && 'opacity-100 bg-opacity-40'
				}`}
			>
				<h1 className='text-white font-montserrat font-bold laptop:text-3xl tablet:text-2xl phone:text-lg'>
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
					} transition duration-500 `}
				/>
			</div>
		</div>
	);
};

export default Card;
