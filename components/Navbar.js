import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='h-vh10 w-full bg-transparent px-contain flex flex-row justify-between items-center sticky top-0 z-20'>
			<div className='cursor-pointer relative h-10 w-56'>
				<Link href='/'>
					<Image
						src='/images/GrafixoLogo.png'
						layout='fill'
						objectFit='contain'
					/>
				</Link>
			</div>
			<ul className='flex flex-row justify-between w-1/3'>
				<li className='navLink'>
					<Link href='/services'>services</Link>
				</li>
				<li className='navLink'>
					<Link href='/pricing'>pricing</Link>
				</li>
				<li className='navLink'>
					<Link href='/works'>our works</Link>
				</li>
				<li className='navLink'>
					<Link href='/aboutus'>about us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
