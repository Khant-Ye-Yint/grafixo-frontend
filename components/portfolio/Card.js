import Image from 'next/image';

const Card = ({ imgSrc, imgAlt }) => {
	return (
		<div className='w-full h-96 cursor-pointer relative flex justify-center items-center'>
			<div className='w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5 backdrop-filter transition ease-in duration-500 hover:backdrop-grayscale hover:backdrop-blur-sm opacity-0 hover:opacity-100'>
				<h1 className='text-white font-montserrat font-bold text-3xl'>
					Polaroid
				</h1>
				<p className=' text-lightGray font-montserrat '>{imgAlt}</p>
			</div>
			<Image
				src={imgSrc}
				alt={imgAlt}
				layout='fill'
				objectPosition='center'
				objectFit='cover'
			/>
		</div>
	);
};

export default Card;
