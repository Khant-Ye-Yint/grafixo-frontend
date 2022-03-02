import Navbar from '../components/Navbar';
import Layout from '../components/shared/Layout';
import Image from 'next/image';

import ContactImg from '../public/images/contact/contact.png';

const contact = () => {
	return (
		<Layout>
			<div className='bg-black'>
				<Navbar />
				<div className='w-full min-h-vh90 pt-vh10 laptop:px-contain tablet:px-tabletContain phone:px-phone flex justify-between items-center'>
					<div className='w-full'>
						<div className='h-96 w-20 bg-darkGray'>
							<h1>Hello</h1>
						</div>
					</div>
					{/* <div className='w-full laptop:h-lg tablet:h-lg phone:h-52 tablet:w-full relative bg-white'> */}
					<Image width={2520} height={2158} src={ContactImg} alt='Contact Us' />
					{/* </div> */}
				</div>
			</div>
		</Layout>
	);
};

export default contact;
