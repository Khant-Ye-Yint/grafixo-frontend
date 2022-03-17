import Image from 'next/image';
import QuoteImg from '../../public/images/quote.png';

const TestamonialCard = ({ company, name, text }) => {
	return (
		<div className=' w-80 py-10 px-10 shadow-card bg-white'>
			<div className='flex flex-col items-center'>
				<h1 className='font-bree font-bold text-black text-medium mb-4'>
					{company}
				</h1>

				<p className='text-center font-montserrat text-testamonial text-smoke'>
					{text}
				</p>
			</div>
		</div>
	);
};

export default TestamonialCard;
