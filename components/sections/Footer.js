import Image from 'next/image';
import Logo from '../../public/images/logo/GrafixoLogo.png';
import Link from 'next/link';

import FooterLink from '../shared/FooterLInk';

import FacebookLogo from '../../public/images/logo/facebook.png';
import MailLogo from '../../public/images/logo/mail.png';
import InstagramLogo from '../../public/images/logo/Instagram.png';
import TwitterLogo from '../../public/images/logo/twitter.png';

const Footer = () => {
	return (
		<div className='w-full grid place-items-center  bg-darkGray  laptop:px-footer tablet:pt-tabletContain tablet:px-tabletContain phone:px-phone phone:pt-10 text-lightGray font-montserrat relative'>
			<div className='flex tablet:w-full phone:w-2/3 tablet:flex-row  tablet:justify-between laptop:flex-row phone:flex-col items-start laptop:justify-between laptop:items-center phone:space-y-16 laptop:space-y-0 tablet:space-y-0 '>
				<div className='flex flex-col space-y-2'>
					<Link href='/'>
						<div className='h-10 w-full relative cursor-pointer'>
							<Image
								src={Logo}
								layout='fill'
								objectFit='contain'
								objectPosition='left'
							/>
						</div>
					</Link>
					<span>+959 765 203 468</span>
					<span>grafixostudio@gmail.com</span>
				</div>
				<div className='flex flex-col space-y-2'>
					<h1 className='text-primary text-medium font-bold'>LINKS</h1>
					<FooterLink text='3D Modeling And Rendering' link='' />
					<FooterLink text='3D Product Animation' link='' />
					<FooterLink text='3D/2D Promotional Animation' link='' />
				</div>
				<div className='flex flex-col space-y-2'>
					<h1 className='text-primary text-medium font-bold'>INFO</h1>
					<FooterLink text='About Us' link='' />
					<FooterLink text='Contact Us' link='' />
				</div>
			</div>
			<div className='w-full h-20  mt-28 phone:mt-10 flex flex-row justify-between items-center border-t border-gray-500'>
				<span className='text-small'>Copyright © 2022</span>
				<div className='flex flex-row items-center space-x-5'>
					<span className='cursor-pointer'>
						<Link href=''>
							<Image src={FacebookLogo} />
						</Link>
					</span>
					<span className='cursor-pointer'>
						<Link href=''>
							<Image src={MailLogo} />
						</Link>
					</span>
					<span className='cursor-pointer'>
						<Link href=''>
							<Image src={InstagramLogo} />
						</Link>
					</span>
					<span className='cursor-pointer'>
						<Link href=''>
							<Image src={TwitterLogo} />
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
