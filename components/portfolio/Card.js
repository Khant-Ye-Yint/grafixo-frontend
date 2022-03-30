import Image from 'next/image';
import { useState, useEffect } from 'react';
import useScrollControl from '../../hooks/useScrollControl';
import Media from 'react-media';

import Modal from './Modal';

const Card = ({ attributes, currentCategory }) => {
	const [hover, setHover] = useState(false);
	const [modalShow, setModalShow] = useState(false);

	const { allowScroll, preventScroll } = useScrollControl();

	useEffect(() => {
		modalShow ? preventScroll() : allowScroll();
	}, [modalShow]);

	return (
		<Media
			queries={{
				small: '(max-width: 599px)',
				medium: '(min-width: 600px) and (max-width: 1199px)',
				large: '(min-width: 1200px)',
			}}
		>
			{(matches) => (
				<div>
					<div
						className='w-full laptop:h-96 tablet:h-72 phone:h-48 cursor-pointer relative flex justify-center items-center'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={() => setModalShow(true)}
					>
						<div
							className={`w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5 ${
								(matches.small || matches.medium) && 'bg-black bg-opacity-40'
							} ${
								matches.large && 'bg-none hover:bg-black  hover:bg-opacity-40'
							} transition ease-in-out duration-500 opacity-100 bg-opacity-40`}
						>
							<h1
								className={`text-white text-center font-montserrat font-bold laptop:text-2xl tablet:text-2xl phone:text-lg p-5 ${
									matches.large && !hover && 'opacity-0'
								} ${
									matches.large && hover && 'opacity-100'
								} transition ease-in-out duration-700 `}
							>
								{attributes.name}
							</h1>
						</div>
						<Image
							src={attributes.thumbnailUrl}
							alt={attributes.name}
							layout='fill'
							objectPosition='center'
							objectFit='cover'
							className={`${
								hover &&
								matches.large &&
								'scale-125 filter blur-sm transition duration-500'
							} transition duration-500 `}
							priority
						/>
					</div>
					<Modal
						modalShow={modalShow}
						onClose={() => setModalShow(false)}
						setModalShow={setModalShow}
						attributes={attributes}
						currentCategory={currentCategory}
					/>
				</div>
			)}
		</Media>
	);
};

export default Card;
