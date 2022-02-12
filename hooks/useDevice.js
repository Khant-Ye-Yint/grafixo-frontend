import { useEffect, useState } from 'react';

const useDevice = () => {
	const [device, setDevice] = useState('');
	let deviceWidth;

	useEffect(() => {
		if (typeof window !== 'undefined') {
			deviceWidth = window.screen.width;
		}

		const guessDevice = () => {
			if (deviceWidth >= 1024) {
				setDevice('laptop');
			} else if (deviceWidth >= 640) {
				setDevice('tablet');
			} else if (deviceWidth >= 375) {
				setDevice('phone');
			}
		};

		guessDevice();
	}, []);

	return device;
};

// // const devices = {
// // 	desktop: 'desktop',
// // 	laptop: 'laptop',
// // 	tablet: 'tablet',
// // 	phone: 'phone',
// // };

export default useDevice;
