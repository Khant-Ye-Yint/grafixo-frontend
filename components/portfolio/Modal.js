import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ modalShow, setModalShow }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const modalContent = modalShow ? (
		<div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black z-50 bg-opacity-50'>
			<div className='w-80 h-80 bg-white text-black'>
				<h1>Hello From modal {modalShow.toString()}</h1>
				<button
					onClick={() => setModalShow(false)}
					className='bold text-green-300 text-lg bg-black p-1 font-bold'
				>
					<h1>X</h1>
				</button>
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
