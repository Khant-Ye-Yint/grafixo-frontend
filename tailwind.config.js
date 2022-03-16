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
				largest: '3.75rem',
				larger: '3rem',
				large: '2.25rem',
				phoneMedium: '2rem',
				medium: '1.25rem',
				normal: '1rem',
				testamonial: '0.85rem',
				small: '0.75rem',
			},
			colors: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
				redLeft: '#760000',
				redRight: '#340003',
				blueLeft: '#01084A',
				blueRight: '#004788',
				tealLeft: '#006167',
				tealRight: '#002F39',
				orangeLeft: '#4A1B00',
				orangeRight: '#794100',
			},
			ringColor: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
			},
			backgroundColor: {
				primary: '#EC6961',
				whiteText: '#DDDDDD',
				darkGray: '#202020',
				redGradiDark: '#9a3412',
				redGradiLight: '#f59e0b',
			},
			textColor: {
				primary: '#EC6961',
				lightGray: '#c4c4c4',
				smoke: '#878585',
			},
			borderColor: {
				primary: '#EC6961',
			},
			padding: {
				contain: '6.5rem',
				tabletContain: '3rem',
				phone: '1.5rem',
				footer: '20rem',
			},
			width: {
				sectionImg: '950px',
				vidLg: '40rem',
				vidMd: '23rem',
				vidSm: '12rem',
				vidALg: '60rem',
				vidAMd: '40rem',
				vidASm: '20rem',
			},
			height: {
				vh10: '10vh',
				vh15: '15vh',
				vh50: '50vh',
				vh90: '90vh',
				vh100: '100vh',
				section: '32rem',
				bigSection: '56rem',
				bigCard: '600px',
				lg: '50rem',
				vidLg: '40rem',
				vidMd: '23rem',
				vidSm: '13rem',
				vidALg: '34rem',
				vidAMd: '23rem',
				vidASm: '11rem',
			},
			maxWidth: {
				vidLg: '50rem',
			},
			minHeight: {
				vh50: '50vh',
				vh90: '90vh',
				vh100: '100vh',
			},
			spacing: {
				vh10: '10vh',
				mlg: '71rem',
				mmd: '40rem',
			},
			boxShadow: {
				button: ' rgba(0, 0, 0, 0.35) 5px 5px 15px 0px',
				card: '2px 7px 15px 0px rgba(0,0,0,0.05)',
				none: 'none',
			},
			backgroundImage: {
				bubblePattern: 'url(/images/background/doubleBubble.png)',
				testamonialBg: 'url(/images/background/review.png)',
				darkBg: 'url(/images/background/darkBg.png)',
				portfolioBg: 'url(/images/background/portfolioBg.png)',
			},
			backdropFilter: ['hover', 'focus'],
			screens: {
				phone: '375px',
				tablet: '640px',
				// => @media (min-width: 640px) { ... }

				laptop: '1090px',
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
