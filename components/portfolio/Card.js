import Image from 'next/image';
import { useState } from 'react';
import Media from 'react-media';

import Badge from './Badge';

const Card = ({ attributes, openModel }) => {
	const [hover, setHover] = useState(false);

	return (
		<Media
			queries={{
				small: '(max-width: 599px)',
				medium: '(min-width: 600px) and (max-width: 1199px)',
				large: '(min-width: 1200px)',
			}}
		>
			{(matches) => (
				<div onClick={() => openModel(attributes)}>
					<div
						className='w-full laptop:h-96 tablet:h-72 phone:h-48 cursor-pointer relative flex justify-center items-center'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<div
							className={`w-full h-full z-20 text-white flex flex-col justify-center items-center space-y-5 ${
								(matches.small || matches.medium) && 'bg-black bg-opacity-50'
							} ${
								matches.large && 'bg-none hover:bg-black  hover:bg-opacity-50'
							} transition ease-in-out duration-500 opacity-100 bg-opacity-40`}
						>
							<h1
								className={`text-white text-center font-montserrat font-bold laptop:text-2xl tablet:text-2xl phone:text-lg p-5 ${
									!hover && 'opacity-0'
								} ${
									hover && 'opacity-100'
								} transition ease-in-out duration-700 `}
							>
								{attributes.name}
							</h1>

							<div
								className={`absolute bottom-3 right-3 flex flex-row justify-end items-center space-x-3 flex-wrap `}
							>
								{attributes.category.map((cat) => (
									<Badge>
										{cat === 'promoAni' ? 'promotional animation' : cat}
									</Badge>
								))}
							</div>
						</div>
						<Image
							src={attributes.thumbnailUrl}
							alt={attributes.name}
							layout='fill'
							objectPosition='center'
							objectFit='cover'
							className={`${
								hover && matches.large && 'scale-125  transition duration-500'
							} transition duration-500 `}
							placeholder='blur'
							priority
						/>
					</div>
				</div>
			)}
		</Media>
	);
};

export default Card;
