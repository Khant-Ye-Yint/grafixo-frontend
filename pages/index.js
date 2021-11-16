import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Greeding from '../components/sections/Greeding';
import ServiceList from '../components/sections/ServiceList';

const Home = () => {
	return (
		<div className='bg-black bg-opacity-50'>
			<Navbar />
			<Hero />
			<Greeding />
			<ServiceList />
		</div>
	);
};

export default Home;
