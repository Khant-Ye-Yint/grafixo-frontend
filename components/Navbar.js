import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../public/images/logo/GrafixoLogo.png';
import NavDropdown from './shared/NavDropdown';

const Navbar = () => {
	const router = useRouter();
	const path = router.pathname;

	return (
		<div
			className={`h-vh10 w-full bg-black bg-opacity-30 px-contain flex flex-row justify-between items-center absolute top-0 z-40`}
		>
			<div className='cursor-pointer relative h-9 w-1/4'>
				<Link href='/'>
					<Image
						src={Logo}
						layout='fill'
						objectFit='contain'
						objectPosition='left'
					/>
				</Link>
			</div>
			<ul className='flex flex-row justify-between w-1/3'>
				<li className='navLink'>
					<NavDropdown />
				</li>
				<li className='navLink'>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li className='navLink'>
					<Link href='/about'>About us</Link>
				</li>
				<li className='navLink'>
					<Link href='/contact'>Contact us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
