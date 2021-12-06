import TestamonialCard from '../shared/TestamonialCard';
import AnimatedLine from '../shared/AnimatedLine';
import { Parallax } from 'react-parallax';

const Testamonial = () => {
	return (
		<Parallax bgImage='/images/constellation.png' strength={500}>
			<div>
				<div className='w-full p-contain space-y-24 flex flex-col justify-center items-center'>
					<div className='flex flex-col items-center z-10'>
						<h1 className='text-large text-primary font-bree text-center mb-3'>
							What Clients Say About Us
						</h1>
						<AnimatedLine />
					</div>
					<div className='w-full flex flex-row justify-around z-10'>
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
				<div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-5'></div>
			</div>
		</Parallax>
	);
};

export default Testamonial;
