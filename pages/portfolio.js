import CardList from '../components/portfolio/CardList';
import Layout from '../components/shared/Layout';

const portfolio = () => {
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
				</div>
				<CardList />
			</div>
		</Layout>
	);
};

export default portfolio;
