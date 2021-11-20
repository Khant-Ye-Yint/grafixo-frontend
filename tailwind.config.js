module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['montserrat'],
				bree: ['Bree Serif'],
			},
			fontSize: {
				larger: '3rem',
				large: '2.25rem',
				medium: '1.25rem',
				normal: '1rem',
				testamonial: '0.85rem',
				small: '0.75rem',
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
				darkGray: '#202020',
			},
			textColor: {
				primary: '#EC6961',
				lightGray: '#c4c4c4',
				smoke: '#878585',
			},
			padding: {
				contain: '7.5rem',
				footer: '20rem',
			},
			width: {
				sectionImg: '950px',
			},
			height: {
				vh10: '10vh',
				vh50: '50vh',
				vh90: '90vh',
				vh100: '100vh',
				section: '32rem',
				bigSection: '56rem',
				bigCard: '600px',
			},
			boxShadow: {
				button: ' rgba(0, 0, 0, 0.35) 5px 5px 15px 0px',
				card: '2px 7px 15px 0px rgba(0,0,0,0.05)',
				none: 'none',
			},
			backgroundImage: {
				blueGradi: 'url(/images/gradientBlue.png)',
				redGradi: 'url(/images/gradientRed.png)',
				heroBg: 'url(/images/tempBg.png)',
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
