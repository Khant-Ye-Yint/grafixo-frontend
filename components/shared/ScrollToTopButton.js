import React, { useEffect, useState } from 'react';

import { ChevronUpIcon } from '@heroicons/react/solid';
import * as Scroll from 'react-scroll';

const ScrollToTopButton = () => {
	const [show, setShow] = useState(false);
	const { animateScroll: scroll } = Scroll;

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 300) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
	}, []);

	return (
		<div
			className={`w-10 h-10 cursor-pointer fixed bottom-10 right-10 z-40 ${
				show ? 'opacity-100' : 'opacity-0'
			}`}
			onClick={scroll.scrollToTop}
		>
			<ChevronUpIcon className='w-full h-full bg-primary opacity-60 hover:opacity-100 transition duration-300 ease-linear text-white  rounded-full' />
		</div>
	);
};

export default ScrollToTopButton;
