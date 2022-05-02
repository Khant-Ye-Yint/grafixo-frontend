const Badge = ({ children, ...rest }) => {
	return (
		<div
			className='bg-primary text-white whitespace-nowrap font-montserrat px-2 py-1 mt-3 text-xs'
			{...rest}
		>
			{children}
		</div>
	);
};

export default Badge;
