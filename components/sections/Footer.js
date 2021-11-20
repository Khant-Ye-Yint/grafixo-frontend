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
		<div className='w-full bg-darkGray pt-contain px-footer text-lightGray font-montserrat'>
			<div className='flex flex-row justify-between'>
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
					<span>+959 837 123</span>
					<span>hello.grafixo.gmail.com</span>
				</div>
				<div className='flex flex-col space-y-2'>
					<h1 className='text-primary text-medium font-bold'>LINKS</h1>
					<FooterLink text='3D Product Animation' link='' />
					<FooterLink text='3D Modeling And Rendering' link='' />
				</div>
				<div className='flex flex-col space-y-2'>
					<h1 className='text-primary text-medium font-bold'>INFO</h1>
					<FooterLink text='About Us' link='' />
					<FooterLink text='Contact Us' link='' />
				</div>
			</div>
			<div className='w-full h-20  mt-28 flex flex-row justify-between items-center border-t border-gray-500'>
				<span className='text-small'>Copyright © 2021</span>
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
