import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/shared/Layout';
import CardList from '../../components/portfolio/CardList';

const ServicePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Layout>
			<div className=' bg-darkGray w-full min-h-vh100'>
				<div className='pt-vh10 bg-bubblePattern'>
					<div className='w-full h-80 flex justify-center items-center'>
						<h1 className='text-white text-5xl font-bree z-10'>{slug}</h1>
						{/* <div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div> */}
					</div>
				</div>
				<CardList />
			</div>
		</Layout>
	);
};

export default ServicePage;
