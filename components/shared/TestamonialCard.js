import Image from 'next/image';

import Avatar from '../../public/images/avatar.png';
import QuoteImg from '../../public/images/quote.png';

const TestamonialCard = ({ company, name, text }) => {
	return (
		<div className=' w-80 py-10 px-10 shadow-card bg-white'>
			<div className='flex flex-col items-center'>
				<div className='rounded-full ring-4 ring-primary w-24 h-24 relative mb-2'>
					<Image src={Avatar} layout='fill' objectFit='cover' />
				</div>
				<h1 className='font-bree font-bold text-black text-medium'>
					{company}
				</h1>
				<span className='font-montserrat text-small mb-2'>- {name} -</span>
				<div className='w-full h-10 mb-2'>
					<Image src={QuoteImg} />
				</div>
				<p className='text-center font-montserrat text-testamonial text-smoke'>
					{text}
				</p>
			</div>
		</div>
	);
};

export default TestamonialCard;
