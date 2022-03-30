const Badge = ({ children, ...rest }) => {
	return (
		<div
			className='bg-primary text-white  inline-block px-2 py-1 text-xs'
			{...rest}
		>
			{children}
		</div>
	);
};

export default Badge;
