import Image from 'next/image';
import UnderlineImg from '../../public/images/underline.png';

const Greeting = () => {
	return (
		<div className=' h-36 px-contain flex flex-row-reverse justify-start items-center pattern-bg'>
			<div className='flex flex-col justify-center items-end '>
				<h1 className='font-bree text-larger text-primary border-red-400'>
					What we do
				</h1>
				<Image src={UnderlineImg} />
			</div>
		</div>
	);
};

export default Greeting;
