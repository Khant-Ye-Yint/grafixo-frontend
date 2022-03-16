import { useState } from 'react';
import axios from 'axios';

import CardList from '../components/portfolio/CardList';
import Layout from '../components/shared/Layout';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolio = ({ data }) => {
	const Categories = {
		all: 'all',
		modeling: 'modeling',
		rendering: 'rendering',
		animation: 'animation',
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
							<List text='3D Modeling' category={Categories.modeling} />
							<List text='3D Rendering' category={Categories.rendering} />
							<List text='3D Animation' category={Categories.animation} />
						</ul>
					</div>
				</div>
				<CardList currentCategory={currentCategory} data={data} />
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	// Fetch data from external API

	const res = await axios.get('http://localhost:5000/api/projects');
	const data = await res.data;

	// Pass data to the page via props
	return { props: { data } };
}

export default portfolio;
