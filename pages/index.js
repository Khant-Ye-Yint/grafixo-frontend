import Hero from '../components/sections/Hero';
import Greeting from '../components/sections/Greeting';
import ServiceList from '../components/sections/ServiceList';
import NavBar from '../components/Navbar';
import Testamonial from '../components/sections/Testamonial';
import Footer from '../components/sections/Footer';

const Home = () => {
	return (
		<div className='bg-black bg-opacity-50'>
			<NavBar />
			<Hero />
			<Greeting />
			<ServiceList />
			<Testamonial />
			<Footer />
		</div>
	);
};

export default Home;
