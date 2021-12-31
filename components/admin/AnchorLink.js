import Link from 'next/link';

const AnchorLink = (props) => {
	const { href, text } = props;

	return (
		<span {...props}>
			<Link href={href}>{text}</Link>
		</span>
	);
};

export default AnchorLink;
