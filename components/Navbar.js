import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../public/images/logo/GrafixoLogo.png';
import NavDropdown from './shared/NavDropdown';

const Navbar = () => {
	const [showBg, setShowBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 600) {
				setShowBg(true);
			} else {
				setShowBg(false);
			}
		});
	}, []);

	return (
		<div
			className={`h-vh10 w-full ${
				showBg ? 'bg-black' : 'bg-transparent'
			}  bg-opacity-70 px-contain flex flex-row justify-between items-center fixed top-0 z-40 transition duration-1000 ease-in-out`}
		>
			<div className='cursor-pointer relative h-11 w-1/4'>
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
				<li>
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
