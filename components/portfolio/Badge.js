const Badge = ({ children, ...rest }) => {
	return (
		<div
			className='bg-gray-800 text-white whitespace-nowrap font-montserrat px-2 py-1 mt-3 text-xs md:text-sm shadow-md font-bold'
			{...rest}
		>
			{children}
		</div>
	);
};

export default Badge;
