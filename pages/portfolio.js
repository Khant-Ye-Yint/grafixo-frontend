import { useState } from 'react';

import CardList from '../components/portfolio/CardList';
import Layout from '../components/shared/Layout';

const portfolio = () => {
	const Categories = {
		all: 'all',
		rendering: '3D Rendering',
		animation: '3D Animation',
	};

	const [currentCategory, setCurrentCategory] = useState(Categories.all);

	const List = ({ text, category }) => (
		<li
			className={`cursor-pointer hover:text-white ${
				category === currentCategory && 'text-gray-50'
			}`}
			onClick={() => setCurrentCategory(category)}
		>
			{text}
		</li>
	);

	return (
		<Layout>
			<div className=' bg-darkGray w-full min-h-vh100'>
				<div className='pt-vh10 bg-bubblePattern'>
					<div className='w-full h-80 phone:h-58 flex justify-center items-center'>
						<h1 className='text-white laptop:text-5xl phone:text-2xl tablet:text-3xl font-bree z-10'>
							Portfolio
						</h1>
						{/* <div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div> */}
					</div>
					<div className='w-full flex justify-center items-center h-10 '>
						<ul className='text-gray-400 text-lg flex flex-row space-x-4 px-2 py-1 justify-between items-center bg-gray-200 bg-opacity-10'>
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
