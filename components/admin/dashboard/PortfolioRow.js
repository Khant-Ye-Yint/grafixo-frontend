const TableRow = ({
	id,
	name,
	client,
	price,
	date,
	description,
	category,
	thumbnail,
}) => {
	return (
		<div className='grid grid-cols-11 place-items-center py-2 px-1 bg-darkGray text-white font-montserrat gap-3 border-b-2 border-primary text-center'>
			<span>{id}</span>
			<span>{name}</span>
			<span>{client}</span>
			<span>${price}</span>
			<span>{date}</span>
			<span className='col-span-2'>{description}</span>
			<span>{category}</span>
			<span className='col-span-2'></span>
			<span className='flex flex-col space-y-3'>
				<span className='px-3 py-1 bg-green-600 hover:bg-green-700 active:bg-green-800 cursor-pointer '>
					Edit
				</span>
				<span className='px-3 py-1 bg-red-600 hover:bg-red-700 active:bg-red-800 cursor-pointer'>
					Delete
				</span>
			</span>
		</div>
	);
};

export default TableRow;
