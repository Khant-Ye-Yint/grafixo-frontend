import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import DashboardNav from '../../../components/DashboardNav';
import PortfolioTable from '../../../components/admin/dashboard/PortfolioTable';

const Tab = ({ text, classN, ...rest }) => {
	return (
		<span
			className={`w-full text-center py-2 text-lg hover:bg-blue-800 cursor-pointer ${classN}`}
			{...rest}
		>
			{text}
		</span>
	);
};

const dashboard = ({ data, SERVER_BASE_URL }) => {
	const Modals = {
		portfolio: 'portfolio',
		testamonial: 'testamonial',
	};

	const [modal, setModal] = useState(Modals.portfolio);

	return (
		<div className='min-h-screen bg-darkGray'>
			<DashboardNav />
			<div className='grid grid-cols-11 w-full'>
				<div className='flex flex-col justify-between items-center bg-gray-900 text-white min-h-vh90  max-h-screen'>
					<div className='w-full col-span-1 flex flex-col items-start sticky top-0 box-border'>
						<Tab
							classN={modal === Modals.portfolio && 'bg-blue-900'}
							text='Portfolio'
							onClick={() => setModal(Modals.portfolio)}
						/>
						<Tab
							classN={modal === Modals.testamonial && 'bg-blue-900'}
							text='Testamonial'
							onClick={() => setModal(Modals.testamonial)}
						/>
					</div>
					<Link href={`/zinzin1999/dashboard/${modal}/add`}>
						<span className='px-3 py-1 bg-green-600 hover:bg-green-700 active:bg-green-800 cursor-pointer mb-20'>
							Add
						</span>
					</Link>
				</div>
				<PortfolioTable data={data} SERVER_BASE_URL={SERVER_BASE_URL} />
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	// Fetch data from external API

	const res = await axios.get(`${process.env.SERVER_BASE_URL}/api/projects`);
	const data = await res.data;

	// Pass data to the page via props
	return { props: { data, SERVER_BASE_URL: process.env.SERVER_BASE_URL } };
}

export default dashboard;
