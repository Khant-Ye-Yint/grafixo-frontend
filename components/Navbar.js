import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useAuth from '../hooks/useAuth';
import useScrollControl from '../hooks/useScrollControl';

import Logo from '../public/images/logo/GrafixoLogo.png';
import NavDropdown from './shared/NavDropdown';
import LogoutButton from './shared/LogoutButton';
import { motion } from 'framer-motion';
import Media from 'react-media';

import { XIcon, MenuAlt3Icon } from '@heroicons/react/solid';

const Navbar = () => {
	const [showBg, setShowBg] = useState(false);
	const [show, setShow] = useState(false);

	const { allowScroll, preventScroll } = useScrollControl();
	const { isAuth } = useAuth();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const changeBg = () => {
				if (window.pageYOffset > 200) {
					setShowBg(true);
				} else {
					setShowBg(false);
				}
			};

			window.addEventListener('scroll', () => changeBg());

			show ? preventScroll() : allowScroll();

			return window.removeEventListener('scroll', () => changeBg());
		}
	}, [show]);

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

	const moboNavbar = (
		<div>
			<MenuAlt3Icon
				width={25}
				height={25}
				color='white'
				className='cursor-pointer'
				onClick={() => setShow(true)}
			/>
			<motion.ul
				className='flex z-40 absolute h-screen justify-around left-0 top-0 w-full flex-col bg-black items-center py-24 bg-opacity-80 list-none'
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
		</div>
	);

	const navBar = (
		<ul className='flex laptop:flex-row tablet:flex-row justify-between items-center z-50 w-1/2 laptop:w-1/2 tablet:w-3/5 list-none'>
			<li>
				{' '}
				<NavDropdown />{' '}
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
			{isAuth && <LogoutButton text='Logout' />}
		</ul>
	);

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
			<Media
				queries={{
					small: '(max-width: 599px)',
					medium: '(min-width: 600px) and (max-width: 1199px)',
					large: '(min-width: 1200px)',
				}}
			>
				{(matches) => (matches.small ? moboNavbar : navBar)}
			</Media>
		</div>
	);
};

export default Navbar;
