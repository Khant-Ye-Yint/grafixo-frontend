import { useState } from 'react';

import { createClient } from 'contentful';

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
		promoAni: 'promoAni',
	};

	const [currentCategory, setCurrentCategory] = useState(Categories.all);

	const List = ({ text, category }) => (
		<li
			className={`cursor-pointer text-center hover:text-white hover:border-2  font-bold px-1 py-2 ${
				category === currentCategory &&
				'text-primary border-primary border-2 hover:text-primary'
			}`}
			onClick={() => setCurrentCategory(category)}
			style={{
				textShadow: '1px 1px 2px black',
			}}
		>
			{text}
		</li>
	);

	return (
		<Layout>
			<div className=' bg-darkGray w-full min-h-vh100'>
				<div className='pt-vh10 bg-black bg-center bg-no-repeat bg-cover pb-6'>
					<div className='w-full h-72 phone:h-48 phone:h-58 flex justify-center items-center'>
						<h1 className='text-white tablet:text-5xl phone:text-4xl  font-bree z-10'>
							Portfolio
						</h1>
						{/* <div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div> */}
					</div>
					<div className='w-full flex justify-center items-center'>
						<ul className='text-gray-200 text-xl phone:text-lg laptop:mx-contain phone:mx-5 bg-gray-200 bg-opacity-10 grid phone:grid-cols-2 laptop:grid-cols-5'>
							<List text='All' category={Categories.all} />
							<List text='3D Modeling' category={Categories.modeling} />
							<List text='3D Rendering' category={Categories.rendering} />
							<List text='3D Animation' category={Categories.animation} />
							<List
								text='Promotional Animation'
								category={Categories.promoAni}
							/>
						</ul>
					</div>
				</div>
				<CardList currentCategory={currentCategory} data={data} />
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		ssrMode: true,
	});

	const res = await client.getEntries({
		content_type: 'portfolio',
		order: '-fields.date',
		limit: 8,
	});

	return { props: { data: res.items } };

	// Fetch data from external API

	// const res = await axios.get(`${process.env.PORTFOLIO_ENDPOINT}`);
	// const { data } = await res.data;

	// Pass data to the page via props
	// return { props: { data } };
}

export default portfolio;
