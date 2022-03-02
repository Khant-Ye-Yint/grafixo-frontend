import { useState } from 'react';

import CardList from '../components/portfolio/CardList';
import Layout from '../components/shared/Layout';

const portfolio = () => {
	const Categories = {
		all: 'All',
		rendering: '3D Rendering',
		animation: '3D Animation',
	};

	const [currentCategory, setCurrentCategory] = useState(Categories.all);

	const List = ({ text, category }) => (
		<li
			className={`cursor-pointer text-center w-44 hover:text-white hover:border-2  font-bold px-4 py-2 ${
				category === currentCategory &&
				'text-primary border-primary border-2 hover:text-primary'
			}`}
			onClick={() => setCurrentCategory(category)}
		>
			{text}
		</li>
	);

	return (
		<Layout>
			<div className=' bg-darkGray w-full min-h-vh100'>
				<div className='pt-vh10 bg-portfolioBg pb-6'>
					<div className='w-full h-72 phone:h-58 flex justify-center items-center'>
						<h1 className='text-white tablet:text-5xl phone:text-4xl  font-bree z-10'>
							Portfolio
						</h1>
						{/* <div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div> */}
					</div>
					<div className='w-full flex justify-center items-center h-10'>
						<ul className='text-gray-400 text-xl flex flex-row flex-wrap space-x-7 laptop:mx-contain phone:mx-5 px-3 py-1 justify-between items-center bg-gray-200 bg-opacity-10'>
							<List text='All' category={Categories.all} />
							<List text='3D Rendering' category={Categories.rendering} />
							<List text='3D Animation' category={Categories.animation} />
						</ul>
					</div>
				</div>
				<CardList currentCategory={currentCategory} />
			</div>
		</Layout>
	);
};

export default portfolio;
