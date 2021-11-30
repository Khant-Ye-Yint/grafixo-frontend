import Navbar from '../Navbar';
import Footer from '../sections/Footer';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
			<ScrollToTopButton />
		</div>
	);
};

export default Layout;
