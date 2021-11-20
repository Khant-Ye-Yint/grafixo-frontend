import Link from 'next/link';

const FooterLink = ({ text, link }) => {
	return (
		<Link href={link}>
			<span className='hover:text-white cursor-pointer'>{text}</span>
		</Link>
	);
};

export default FooterLink;
