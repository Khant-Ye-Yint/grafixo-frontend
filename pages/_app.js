import '../global.css';

require('typeface-montserrat');
require('typeface-bree-serif');
import '@fontsource/dosis/800.css';

import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }) {
	return (
		<ParallaxProvider>
			<Component {...pageProps} />
		</ParallaxProvider>
	);
}

export default MyApp;
