import Hero from '../components/sections/Hero';
import Greeding from '../components/sections/Greeding';
import ServiceList from '../components/sections/ServiceList';
import NavBar from '../components/Navbar';

const Home = () => {
	return (
		<div className='bg-black bg-opacity-50'>
			<NavBar />
			<Hero />
			<Greeding />
			<ServiceList />
		</div>
	);
};

export default Home;
