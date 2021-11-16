module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['montserrat'],
				bree: ['bree-serif'],
			},
			fontSize: {
				larger: '4rem',
				large: '2.25rem',
				normal: '2rem',
				medium: '1.5rem',
				small: '1.125rem',
			},
			color: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
			},
			ringColor: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
			},
			backgroundColor: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
			},
			textColor: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
			},
			padding: {
				contain: '10rem',
			},
			width: {
				sectionImg: '950px',
			},
			height: {
				vh10: '10vh',
				vh50: '50vh',
				vh90: '90vh',
				vh100: '100vh',
				section: '500px',
				smallCard: '500px',
				bigCard: '600px',
			},
			boxShadow: {
				button: '8px 8px 24px rgba(55, 224, 154, 0.5);',
				none: 'none',
			},
			backgroundImage: {
				blueGradi: 'url(/images/gradientBlue.png)',
				redGradi: 'url(/images/gradientRed.png)',
			},
			screens: {
				tablet: '640px',
				// => @media (min-width: 640px) { ... }

				laptop: '1024px',
				// => @media (min-width: 1024px) { ... }

				desktop: '1920px',
				// => @media (min-width: 1280px) { ... }
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
