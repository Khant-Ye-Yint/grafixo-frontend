import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube';

function Modal({ modalShow, setModalShow }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = modalShow ? (
		<div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black z-50 bg-opacity-50 '>
			<div
				className=' bg-darkGray text-black tracking-wide'
				style={{ width: '63rem' }}
			>
				<div className='flex flex-row justify-between items-center px-8 my-4'>
					<h1 className='text-xl font-bold font-bree text-primary'>Polaroid</h1>
					<button
						onClick={() => setModalShow(false)}
						className='bold text-white hover:text-lightGray text-lg  p-1 font-bold'
					>
						<h1>X</h1>
					</button>
				</div>
				{/* <div className='h-56 bg-gray-400'> */}
				<ReactPlayer
					url={'https://www.youtube.com/watch?v=mgRs_Dwu_ZY'}
					width='full'
					height={'35rem'}
					controls
				/>

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
