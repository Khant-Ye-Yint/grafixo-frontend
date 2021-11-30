import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

const NavDropdown = () => {
	return (
		<Menu>
			<Menu.Button className='flex flex-row justify-center items-center'>
				Services <ChevronDownIcon className='w-5 h-5 text-gray-400' />
			</Menu.Button>
			<Menu.Items className='absolute flex flex-col mt-3 p-2 bg-black bg-opacity-40'>
				<Menu.Item>
					{({ active }) => (
						<MyLink
							href='/services/3d-modeling-and-rendering'
							className={`${active && 'bg-black '} px-2 py-1`}
						>
							3D Modeling and Rendering
						</MyLink>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<MyLink
							href='/services/3d-commercial-animation'
							className={`${active && 'bg-black '} px-2 py-1`}
						>
							3d commercial animation
						</MyLink>
					)}
				</Menu.Item>
				<Menu.Item>
					{({ active }) => (
						<MyLink
							href='/services/promotional-animation'
							className={`${active && 'bg-black '} px-2 py-1`}
						>
							2d/3d promotional animation
						</MyLink>
					)}
				</Menu.Item>
			</Menu.Items>
		</Menu>
	);
};

export default NavDropdown;
