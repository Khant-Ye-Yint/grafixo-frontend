import Image from 'next/image';
import { useState, useEffect } from 'react';
import useScrollControl from '../../hooks/useScrollControl';

import Modal from './Modal';

const Card = ({ data }) => {
	const [hover, setHover] = useState(false);
	const [modalShow, setModalShow] = useState(false);

	const { allowScroll, preventScroll } = useScrollControl();

	useEffect(() => {
		modalShow ? preventScroll() : allowScroll();
	}, [modalShow]);

	return (
		<div>
			<div
				className='w-full laptop:h-96 tablet:h-72 phone:h-48 cursor-pointer relative flex justify-center items-center'
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				onClick={() => setModalShow(true)}
			>
				<div
					className={`w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5  hover:opacity-100 bg-black  hover:bg-opacity-40 transition ease-in-out duration-500 opacity-100 bg-opacity-40`}
				>
					<h1 className='text-white font-montserrat font-bold laptop:text-3xl tablet:text-2xl phone:text-lg'>
						{data.name}
					</h1>
				</div>
				<Image
					src={data.imgUrl}
					alt={data.name}
					layout='fill'
					objectPosition='center'
					objectFit='cover'
					className={`${
						hover && 'scale-125 filter blur-sm transition duration-500'
					} transition duration-500 `}
				/>
			</div>
			<Modal
				modalShow={modalShow}
				onClose={() => setModalShow(false)}
				setModalShow={setModalShow}
				data={data}
			/>
		</div>
	);
};

export default Card;
