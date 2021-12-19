const useDevice = () => {
	let deviceWidth;

	if (typeof window !== 'undefined') {
		deviceWidth = window.screen.width;
	}

	if (deviceWidth >= 1920) {
		return 'desktop';
	} else if (deviceWidth >= 1024) {
		return 'laptop';
	} else if (deviceWidth >= 640) {
		return 'tablet';
	} else if (deviceWidth >= 375) {
		return 'phone';
	} else return deviceWidth;
};

// const devices = {
// 	desktop: 'desktop',
// 	laptop: 'laptop',
// 	tablet: 'tablet',
// 	phone: 'phone',
// };

export default useDevice;
