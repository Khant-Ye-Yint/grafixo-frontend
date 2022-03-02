import TableRow from './PortfolioRow';

const dummyData = [
	{
		id: '12341234',
		name: 'Instan camera showcase',
		client: 'Polaroid',
		price: 300,
		date: '15 June 2021',
		description: 'Very noise camera',
		category: 'Animation',
		thumbnail: 'http://kmkl.png',
	},
	{
		id: '12341234',
		name: 'Instan camera showcase',
		client: 'Polaroid',
		price: 300,
		date: '15 June 2021',
		description: 'Very noise camera',
		category: 'Animation',
		thumbnail: 'http://kmkl.png',
	},
	{
		id: '12341234',
		name: 'Instan camera showcase',
		client: 'Polaroid',
		price: 300,
		date: '15 June 2021',
		description: 'Very noise camera',
		category: 'Animation',
		thumbnail: 'http://kmkl.png',
	},
	{
		id: '12341234',
		name: 'Instan camera showcase',
		client: 'Polaroid',
		price: 300,
		date: '15 June 2021',
		description: 'Very noise camera',
		category: 'Animation',
		thumbnail: 'http://kmkl.png',
	},
];

const Table = () => {
	return (
		<div className='flex-1 bg-gray-800 w-full h-full text-white col-span-10 '>
			<div className='grid grid-cols-11 place-items-center h-10 font-bold bg-black text-primary font-bree'>
				<span>ID</span>
				<span>Name</span>
				<span>Client</span>
				<span>Price</span>
				<span>Date</span>
				<span className='col-span-2'>Description</span>
				<span>Category</span>
				<span className='col-span-2'>Thumbnail</span>
				<span>Actions</span>
			</div>
			{dummyData.map((chunk) => (
				<TableRow
					id={chunk.id}
					name={chunk.name}
					client={chunk.client}
					price={chunk.price}
					date={chunk.date}
					description={chunk.description}
					category={chunk.category}
					thumbnail={chunk.thumbnail}
				/>
			))}
		</div>
	);
};

export default Table;
