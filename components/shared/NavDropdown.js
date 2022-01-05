import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

import useDevice from '../../hooks/useDevice';

function MyLink(props) {
	let { href, children, ...rest } = props;

	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

const NavDropdown = () => {
	const device = useDevice();

	const variants = {
		show: { rotate: 180 },
		hidden: { rotate: 0 },
	};

	const categories = [
		{
			name: '3D Modeling And Rendering',
			slug: '3D-Modeling-And-Rendering',
		},
		{ name: '3D Animation', slug: '3D-Animation' },
	];

	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className='flex flex-row flex-nowrap justify-center items-center text-lightGray hover:text-white'>
						<h3 className='navLink navLinkDropdown'>Services</h3>
						<motion.div
							initial='hidden'
							animate={open ? 'show' : 'hidden'}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							variants={variants}
						>
							{' '}
							<ChevronDownIcon className='w-5 h-5' />
						</motion.div>
					</Menu.Button>
					<Transition
						show={open}
						enter='transition transform duration-[400ms] ease-in-out'
						enterFrom='opacity-0 scale-50'
						enterTo='opacity-100  scale-100'
						leave='transition transform duration-[300ms] ease-in-out'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-50'
					>
						<Menu.Items
							static
							className={`absolute flex flex-col mt-3 p-2 bg-black bg-opacity-70 border border-gray-500 border-opacity-50 text-lightGray space-y-2 overflow-hidden ${
								device === 'phone' && 'transformCenter'
							} `}
						>
							{categories.map((category) => (
								<Menu.Item>
									{({ active }) => (
										<MyLink
											href={`/services/${category.slug}`}
											className={`${
												active && 'bg-white bg-opacity-20'
											} px-2 py-1 whitespace-nowrap hover:text-white`}
										>
											{category.name}
										</MyLink>
									)}
								</Menu.Item>
							))}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default NavDropdown;
