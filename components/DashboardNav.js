import Logo from '../public/images/logo/GrafixoLogo.png';
import Link from 'next/link';
import Image from 'next/image';

const DashboardNav = () => {
	return (
		<div
			className={`h-vh10 w-full bg-gray-900 tablet:px-tabletContain laptop:px-contain phone:px-5 flex flex-row justify-between items-center sticky top-0 z-40 `}
		>
			<div className='cursor-pointer relative h-12 w-1/4 phone:w-2/5'>
				<Link href='/'>
					<Image
						priority
						src={Logo}
						layout='fill'
						objectFit='contain'
						objectPosition='left'
					/>
				</Link>
			</div>
			<h1 className='text-white font-bree text-3xl'>Dashboard</h1>
		</div>
	);
};

export default DashboardNav;
