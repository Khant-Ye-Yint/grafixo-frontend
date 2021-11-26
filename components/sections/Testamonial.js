import Image from 'next/image';

import UnderlineImg from '../../public/images/underline.png';
import TestamonialCard from '../shared/TestamonialCard';

import { Parallax } from 'react-parallax';

const Testamonial = () => {
	return (
		<Parallax bgImage='/images/constellation.png' strength={500}>
			<div className='w-full p-contain space-y-24 flex flex-col justify-center items-center'>
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
		</Parallax>
	);
};

export default Testamonial;
