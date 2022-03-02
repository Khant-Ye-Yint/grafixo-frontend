import { useState } from 'react';

import DashboardNav from '../../components/DashboardNav';
import PortfolioTable from '../../components/admin/dashboard/PortfolioTable';

const Tab = (props) => {
	const { text, classname } = props;

	return (
		<span
			className={`w-full text-center py-2 text-lg hover:bg-blue-800 cursor-pointer ${classname}`}
			{...props}
		>
			{text}
		</span>
	);
};

const dashboard = () => {
	const Modals = {
		portfolio: 'portfolio',
		testamonial: 'testamonial',
	};

	const [modal, setModal] = useState(Modals.portfolio);

	return (
		<div className='min-h-screen bg-darkGray'>
			<DashboardNav />
			<div className='grid grid-cols-11 w-full'>
				<div className='bg-gray-900 text-white min-h-vh90 col-span-1 flex flex-col items-start'>
					<Tab
						classname={modal === Modals.portfolio && 'bg-blue-900'}
						text='Portfolio'
						onClick={() => setModal(Modals.portfolio)}
					/>
					<Tab
						classname={modal === Modals.testamonial && 'bg-blue-900'}
						text='Testamonial'
						onClick={() => setModal(Modals.testamonial)}
					/>
				</div>
				<PortfolioTable />
			</div>
		</div>
	);
};

export default dashboard;
