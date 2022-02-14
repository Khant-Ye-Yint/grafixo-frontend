import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';
import Media from 'react-media';

import { CgClose } from 'react-icons/cg';

function Modal({ modalShow, setModalShow }) {
	const [isBrowser, setIsBrowser] = useState(false);
	const modalRef = useRef(null);
	const squareModal = true;

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	useEffect(() => {
		if (typeof window !== null && modalRef.current !== null) {
			let handler = (event) => {
				if (!modalRef.current.contains(event.target)) {
					setModalShow(false);
				}
			};

			document.addEventListener('mousedown', handler);

			return () => {
				document.removeEventListener('mousedown', handler);
			};
		}
	});

	const YoutubePlayer = ({ matches }) =>
		squareModal ? (
			<ReactPlayer
				url={'https://www.youtube.com/watch?v=_xKCwzgI68s'}
				width='full'
				height={matches.large ? '40rem' : matches.medium ? '40rem' : '20rem'}
				controls
				playing
			/>
		) : (
			<ReactPlayer
				url={'https://www.youtube.com/watch?v=34Ig3X59_qA'}
				width='full'
				height={matches.large ? '40rem' : matches.medium ? '23rem' : '12rem'}
				controls
				playing
			/>
		);

	const modalContent = modalShow ? (
		<div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black z-50 bg-opacity-80'>
			<div
				className={`bg-darkGray text-black tracking-wide ${
					squareModal ? 'lg:w-mlg md:w-mmd w-80' : 'lg:w-mlg md:w-mmd w-80'
				}`}
				ref={modalRef}
			>
				<div className='flex flex-row justify-between items-center px-8 my-4'>
					<h1 className='text-xl font-bold font-bree text-primary'>Polaroid</h1>
					<button
						onClick={() => setModalShow(false)}
						className='bold text-white hover:text-lightGray text-lg  p-1'
					>
						<CgClose />
					</button>
				</div>
				<Media
					queries={{
						small: '(max-width: 599px)',
						medium: '(min-width: 600px) and (max-width: 1199px)',
						large: '(min-width: 1200px)',
					}}
				>
					{(matches) => <YoutubePlayer matches={matches} />}
				</Media>
				<div className='px-8 my-5'>
					<h3 className='text-normal  font-bree text-white'>
						Company - Astra Shark
					</h3>
					<span className='text-testamonial font-montserrat text-green-300 font-bold'>
						$ 300
					</span>
					<br />
					<span className='text-testamonial font-montserrat text-lightGray'>
						3 June, 2021
					</span>
					<p className='text-testamonial font-montserrat text-white mt-3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						laoreet a massa, risus. At felis, posuere eu pretium. Aliquet mauris
						massa mattis id. Sed vitae felis ac vestibulum. Mattis velit
						sagittis pulvinar at ante ultricies. Molestie metus non vitae leo
						leo consectetur consequat. Non aenean eget volutpat turpis.
					</p>
				</div>
			</div>
		</div>
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
