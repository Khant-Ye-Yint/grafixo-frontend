import NavBar from '../components/Navbar';
import CardList from '../components/portfolio/CardList';

const portfolio = () => {
	return (
		<div className=' bg-darkGray w-full min-h-vh100'>
			<NavBar />
			<div className='pt-vh10'>
				<div className='w-full h-80 flex justify-center items-center bg-bubblePattern  relative'>
					<h1 className='text-white text-5xl font-bree z-10'>
						3D Modeling And Rendering
					</h1>
					<div className='absolute w-full h-full backdrop-filter backdrop-blur-sm'></div>
				</div>
			</div>
			<CardList />
		</div>
	);
};

export default portfolio;
