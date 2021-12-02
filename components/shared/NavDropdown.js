import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

const NavDropdown = () => {
	const variants = {
		show: { rotate: 180 },
		hidden: { rotate: 0 },
	};

	const dropdownVariant = {
		show: { opacity: 1, scaleY: 1 },
		hidden: { opacity: 0, scaleY: 0 },
	};

	return (
		<Menu>
			{({ open }) => (
				<>
					<Menu.Button className='flex flex-row text-base justify-center items-center font-bold text-lightGray hover:text-white'>
						Services{' '}
						<motion.div
							initial='hidden'
							animate={open ? 'show' : 'hidden'}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
							variants={variants}
						>
							{' '}
							<ChevronDownIcon className='w-5 h-5 ' />
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
						{/* <motion.div
						initial='hidden'
						animate={open ? 'show' : 'hidden'}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						variants={dropdownVariant}
					> */}
						<Menu.Items
							static
							className='absolute flex flex-col mt-3 p-2 bg-black bg-opacity-70 border border-gray-500 border-opacity-50 text-lightGray space-y-2 overflow-hidden'
						>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/services/3d-modeling-and-rendering'
										className={`${
											active && 'bg-white bg-opacity-20'
										} px-2 py-1 whitespace-nowrap hover:text-white`}
									>
										3D Modeling and Rendering
									</MyLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/services/3d-commercial-animation'
										className={`${
											active && 'bg-white bg-opacity-20'
										} px-2 py-1 whitespace-nowrap hover:text-white`}
									>
										3D Commercial Animation
									</MyLink>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<MyLink
										href='/services/promotional-animation'
										className={`${
											active && 'bg-white bg-opacity-20'
										} px-2 py-1 whitespace-nowrap hover:text-white`}
									>
										3D/2D Promotional Animation
									</MyLink>
								)}
							</Menu.Item>
						</Menu.Items>
						{/* </motion.div> */}
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default NavDropdown;
