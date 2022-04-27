import { useRouter } from 'next/router';

import Layout from '../../components/shared/Layout';

const ServicePage = () => {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Layout>
			<div className=' bg-darkGray w-full min-h-vh100'>
				<div className='pt-vh10 bg-bubblePattern'>
					<div className='w-full h-80 phone:h-58 flex justify-center items-center'>
						<h1 className='text-white laptop:text-5xl phone:text-2xl tablet:text-3xl font-bree z-10'>
							{slug}
						</h1>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ServicePage;
