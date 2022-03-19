import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
//import ReactPlayer from 'react-player/youtube';
import Moment from 'react-moment';
import Media from 'react-media';
import Image from 'next/image';

import Vimeo from '@u-wave/react-vimeo';

import { CgClose } from 'react-icons/cg';
import { AiOutlineLoading } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';

function Modal({ modalShow, setModalShow, attributes }) {
	const [videoLoading, setVideoLoading] = useState(true);
	const [isBrowser, setIsBrowser] = useState(false);
	const modalRef = useRef(null);

	const { name, price, date, description, vidUrl, category, imgUrls } =
		attributes;

	const imgArray = imgUrls.split(',');

	const modalCloseHandler = () => {
		setModalShow(false);
		setVideoLoading(true);
	};

	useEffect(() => {
		setIsBrowser(true);
		console.log(imgUrls);
	}, []);

	useEffect(() => {
		if (typeof window !== null && modalRef.current !== null) {
			let handler = (event) => {
				if (!modalRef.current.contains(event.target)) {
					modalCloseHandler();
				}
			};

			document.addEventListener('mousedown', handler);

			return () => {
				document.removeEventListener('mousedown', handler);
			};
		}
	});

	// const YoutubePlayer = ({ matches }) =>
	// 	videoRatio === '1:1' ? (
	// 		<ReactPlayer
	// 			url={vidUrl}
	// 			width='full'
	// 			height={matches.large ? '40rem' : matches.medium ? '40rem' : '20rem'}
	// 			controls
	// 			playing
	// 		/>
	// 	) : (
	// 		<ReactPlayer
	// 			url={vidUrl}
	// 			width='full'
	// 			height={matches.large ? '40rem' : matches.medium ? '23rem' : '12rem'}
	// 			controls
	// 			playing
	// 		/>
	// 	);

	const VimeoPlayer = ({ matches, url }) =>
		category !== 'animation' ? (
			<Vimeo
				video={url}
				//height={matches.large ? '640' : matches.medium ? '400' : '350'}
				responsive={true}
				controls
				autoplay
				onLoaded={() => setVideoLoading(false)}
				muted
			/>
		) : (
			<Vimeo
				video={url}
				//height={matches.large ? '640' : matches.medium ? '400' : '200'}
				controls
				autoplay
				onLoaded={() => setVideoLoading(false)}
				muted
				responsive={true}
			/>
		);

	const modalContent = modalShow ? (
		<Media
			queries={{
				small: '(max-width: 599px)',
				medium: '(min-width: 600px) and (max-width: 1199px)',
				large: '(min-width: 1200px)',
			}}
		>
			{(matches) => (
				<div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black z-50 bg-opacity-80'>
					<div
						className={`bg-darkGray text-black tracking-wide ${
							category !== 'animation'
								? 'md:w-vidLg w-vidMd'
								: 'lg:w-vidALg md:w-vidAMd w-vidASm'
						} `}
						ref={modalRef}
					>
						<div className='flex flex-row justify-between items-center px-8 my-4 '>
							<h1 className='text-xl font-bold font-bree text-primary'>
								{name}
							</h1>
							<button
								onClick={modalCloseHandler}
								className='bold text-white hover:text-lightGray text-lg  p-1'
							>
								<CgClose />
							</button>
						</div>
						<Swiper
							slidesPerView={1}
							centeredSlides={true}
							loop={true}
							// pagination={{
							// 	clickable: true,
							// }}
							navigation={true}
							style={{
								'--swiper-navigation-color': '#EC6961',
								'--swiper-pagination-color': '#EC6961',
								'--swiper-navigation-size': '30px',
							}}
						>
							<SwiperSlide>
								<div
									className={`w-full ${
										category !== 'animation'
											? 'md:h-vidLg h-vidMd'
											: 'lg:h-vidALg md:h-vidAMd h-vidASm'
									}  relative`}
								>
									<Vimeo
										video={vidUrl}
										controls
										autoplay
										onLoaded={() => setVideoLoading(false)}
										muted
										responsive={true}
									/>

									{videoLoading && (
										<div className='w-full h-full grid place-items-center'>
											<AiOutlineLoading
												size='2rem'
												color='white'
												className='animate-spin'
											/>
										</div>
									)}
								</div>
							</SwiperSlide>
							{imgArray.map((img) => (
								<SwiperSlide>
									<div
										className={`${
											category !== 'animation'
												? 'md:h-vidLg h-vidMd'
												: 'lg:h-vidALg md:h-vidAMd h-vidASm'
										} relative`}
									>
										<Image
											src={`${img}`}
											layout='fill'
											objectFit='cover'
											objectPosition='center'
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						<div className='px-8 my-5'>
							{/* <h3 className='text-normal  font-bree text-white'>
						Name - <span className='text-primary'>{name}</span>
					</h3> */}
							<span className='text-testamonial font-montserrat text-green-300 font-bold'>
								$ {price}
							</span>
							<br />
							<Moment
								className='text-testamonial font-montserrat text-lightGray'
								format='YYYY/MM/DD'
								date={date}
							/>

							<p className='text-testamonial font-montserrat text-white mt-3'>
								{description}
							</p>
						</div>
					</div>
				</div>
			)}
		</Media>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
}

export default Modal;
