import Hero from '../components/sections/Hero';
import Greeting from '../components/sections/Greeting';
import ServiceList from '../components/sections/ServiceList';
import NavBar from '../components/Navbar';
import Testamonial from '../components/sections/Testamonial';
import Footer from '../components/sections/Footer';

import Layout from '../components/shared/Layout';

const Home = () => {
	return (
		<Layout>
			<div className='bg-black bg-opacity-50'>
				<Hero />
				<Greeting />
				<ServiceList />
				<Testamonial />
			</div>
		</Layout>
	);
};

export default Home;
