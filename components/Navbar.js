import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../public/images/logo/GrafixoLogo.png';

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
					<Link href='/portfolio'>portfolio</Link>
				</li>
				<li className='navLink'>
					<Link href='/pricing'>pricing</Link>
				</li>
				<li className='navLink'>
					<Link href=''>services</Link>
				</li>
				<li className='navLink'>
					<Link href='/aboutus'>about us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
