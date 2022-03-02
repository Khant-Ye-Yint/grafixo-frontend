import TestamonialCard from '../shared/TestamonialCard';
import AnimatedLine from '../shared/AnimatedLine';
import { ParallaxBanner } from 'react-scroll-parallax';

import Avatar1 from '../../public/images/testamonial/avatar.png';
import Avatar2 from '../../public/images/testamonial/avatar2.png';
import Avatar3 from '../../public/images/testamonial/avatar3.png';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testamonial = () => {
	return (
		<ParallaxBanner
			layers={[
				{
					image: '/images/background/review.png',
					amount: 0.5,
					expended: true,
				},
			]}
			style={{ height: 'auto' }}
		>
			<div className='w-full  tablet:p-tabletContain  tablet:space-y-10 phone:p-phone phone:space-y-10 flex flex-col justify-center items-center bg-white'>
				<div className='flex flex-col items-center z-10'>
					<h1 className='text-large phone:text-large text-white shadow-2xl font-bree text-center mb-3'>
						Reviews
					</h1>
					<AnimatedLine />
				</div>
				<div className='w-full flex flex-row justify-center items-center'>
					<Swiper
						spaceBetween={30}
						slidesPerView={3}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						//navigation={true}
						style={{
							'--swiper-navigation-color': '#EC6961',
							'--swiper-pagination-color': '#EC6961',
						}}
						breakpoints={{
							// phone
							375: {
								slidesPerView: 1,
							},
							// tablet
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							//laptop
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						<SwiperSlide className='grid place-items-center'>
							<TestamonialCard
								company='J Tech'
								name='James'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
							/>
						</SwiperSlide>
						<SwiperSlide className='grid place-items-center'>
							<TestamonialCard
								company='J Tech'
								name='James'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
							/>
						</SwiperSlide>
						<SwiperSlide className='grid place-items-center'>
							<TestamonialCard
								company='J Tech'
								name='James'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
							/>
						</SwiperSlide>
						<SwiperSlide className='grid place-items-center'>
							<TestamonialCard
								company='J Tech'
								name='James'
								text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet adipiscing quam justo. Felis maecenas sit pharetra, quis nulla diam sit ut id. '
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className='absolute w-full h-full top-0 left-0 bg-gray-500 bg-opacity-5'></div>
		</ParallaxBanner>
	);
};

export default Testamonial;
