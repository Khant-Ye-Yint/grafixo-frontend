import { useEffect, useRef } from 'react';

const ConfirmModal = ({ setShow, name, del }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (typeof window !== null && modalRef.current !== null) {
			let handler = (event) => {
				if (!modalRef.current.contains(event.target)) {
					setShow(false);
				}
			};

			document.addEventListener('mousedown', handler);

			return () => {
				document.removeEventListener('mousedown', handler);
			};
		}
	});

	return (
		<div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black  z-50 bg-opacity-80 '>
			<div
				className={
					'bg-darkGray text-white tracking-wide w-1/4 border-b-2 border-red-500 px-3 py-4 flex flex-col justify-center items-start space-y-5'
				}
				ref={modalRef}
			>
				<span>
					Are you sure to delete{' '}
					<span className='font-bold text-primary'>{name}</span> ?
				</span>
				<div className='space-x-3'>
					<button
						className='px-3 py-1 bg-red-600 hover:bg-red-700 active:bg-red-800 cursor-pointer'
						onClick={() => del()}
					>
						Yes
					</button>
					<button
						className='px-3 py-1 bg-gray-700 hover:bg-gray-800 active:bg-gray-900  cursor-pointer'
						onClick={() => setShow(false)}
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
