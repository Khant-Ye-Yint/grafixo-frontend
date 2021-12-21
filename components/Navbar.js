import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useDevice from '../hooks/useDevice';

import Logo from '../public/images/logo/GrafixoLogo.png';
import NavDropdown from './shared/NavDropdown';
import { motion } from 'framer-motion';

import { XIcon, MenuAlt3Icon } from '@heroicons/react/solid';

const Navbar = () => {
	const [showBg, setShowBg] = useState(false);
	const [show, setShow] = useState(false);

	const device = useDevice();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 200) {
				setShowBg(true);
			} else {
				setShowBg(false);
			}
		});
	}, []);

	const variants = {
		show: {
			marginLeft: '0px',
			transition: {
				duration: 1,
				ease: 'easeOut',
			},
		},
		hidden: {
			marginLeft: '200%',
			transition: {
				duration: 1,
				ease: 'easeIn',
			},
		},
	};

	return (
		<div
			className={`h-vh10 w-full ${
				showBg ? 'bg-black' : 'bg-transparent'
			}  bg-opacity-70 tablet:px-tabletContain laptop:px-contain phone:px-5 flex flex-row justify-between items-center fixed tablet:fixed top-0 z-40 transition duration-1000 ease-in-out`}
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
			{device === 'phone' && (
				<MenuAlt3Icon
					width={25}
					height={25}
					color='white'
					className='cursor-pointer'
					onClick={() => setShow(true)}
				/>
			)}
			{device === 'phone' ? (
				<motion.ul
					className='flex z-50 phone:absolute phone:h-screen phone:justify-around phone:left-0 phone:top-0 phone:w-full phone:flex-col phone:bg-black phone:items-center phone:py-24 phone:bg-opacity-80'
					variants={variants}
					initial='hidden'
					animate={show ? 'show' : 'hidden'}
				>
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
					<XIcon
						width={25}
						height={25}
						color='white'
						className='absolute top-8 right-5 cursor-pointer'
						onClick={() => setShow(false)}
					/>
				</motion.ul>
			) : (
				<ul className='flex laptop:flex-row tablet:flex-row justify-between z-50 w-1/2 laptop:w-1/3 tablet:w-3/5 list-none'>
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
			)}
		</div>
	);
};

export default Navbar;
