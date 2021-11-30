import React from 'react';
import { useRouter } from 'next/router';

import CardList from '../../components/portfolio/CardList';
import Navbar from '../../components/Navbar';

const ServicePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<div className=' bg-darkGray w-full min-h-vh100'>
			<Navbar />
			<div className='pt-vh10 bg-bubblePattern'>
				<div className='w-full h-80 flex justify-center items-center'>
					<h1 className='text-white text-5xl font-bree z-10'>{slug}</h1>
					{/* <div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div> */}
				</div>
			</div>
			<CardList />
		</div>
	);
};

export default ServicePage;
