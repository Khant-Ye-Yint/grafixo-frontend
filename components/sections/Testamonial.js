import Image from 'next/image';

import UnderlineImg from '../../public/images/underline.png';

import TestamonialCard from '../shared/TestamonialCard';

const Testamonial = () => {
	return (
		<div className='w-full p-contain bg-white space-y-24 flex flex-col justify-center items-center pattern-bg'>
			<div className='flex flex-col items-center'>
				<h1 className='text-large text-primary font-bree text-center mb-3'>
					What people think about us
				</h1>
				<Image src={UnderlineImg} />
			</div>
			<div className='w-full flex flex-row justify-around'>
				<TestamonialCard
					company='J Tech'
					name='James'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
				/>
				<TestamonialCard
					company='J Tech'
					name='James'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
				/>
				<TestamonialCard
					company='J Tech'
					name='James'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
				/>
			</div>
		</div>
	);
};

export default Testamonial;
