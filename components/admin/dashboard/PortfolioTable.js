import TableRow from './PortfolioRow';

// const dummyData = [
// 	{
// 		id: '12341234',
// 		name: 'Instan camera showcase',
// 		client: 'Polaroid',
// 		price: 300,
// 		date: '15 June 2021',
// 		description: 'Very noise camera',
// 		category: 'Animation',
// 		thumbnail: 'http://kmkl.png',
// 		featured: true,
// 	},
// 	{
// 		id: '123234',
// 		name: 'Instan camera showcase',
// 		client: 'Polaroid',
// 		price: 300,
// 		date: '15 June 2021',
// 		description: 'Very noise camera',
// 		category: 'Animation',
// 		thumbnail: 'http://kmkl.png',
// 		featured: true,
// 	},
// 	{
// 		id: '1241234',
// 		name: 'Instan camera showcase',
// 		client: 'Polaroid',
// 		price: 300,
// 		date: '15 June 2021',
// 		description: 'Very noise camera',
// 		category: 'Animation',
// 		thumbnail: 'http://kmkl.png',
// 		featured: false,
// 	},
// 	{
// 		id: '123434',
// 		name: 'Instan camera showcase',
// 		client: 'Polaroid',
// 		price: 300,
// 		date: '15 June 2021',
// 		description: 'Very noise camera',
// 		category: 'Animation',
// 		thumbnail: 'http://kmkl.png',
// 		featured: true,
// 	},
// ];

const Table = ({ data, SERVER_BASE_URL }) => {
	return (
		<div className='flex-1 bg-gray-800 w-full h-full text-white col-span-10 '>
			<div className='grid grid-cols-11 place-items-center h-10 font-bold bg-black text-primary font-bree'>
				<span>Name</span>
				<span>Client</span>
				<span>Price</span>
				<span>Date</span>
				<span className='col-span-2'>Description</span>
				<span>Featured</span>
				<span>Category</span>
				<span className='col-span-2'>Thumbnail</span>
				<span>Actions</span>
			</div>

			{data.map((chunk) => (
				<TableRow
					key={chunk._id}
					id={chunk._id}
					name={chunk.name}
					client={chunk.client}
					price={chunk.price}
					date={chunk.date}
					description={chunk.description}
					featured={chunk.featured}
					category={chunk.category}
					thumbnail={chunk.thumbnailUrl}
					SERVER_BASE_URL={SERVER_BASE_URL}
				/>
			))}
		</div>
	);
};

export default Table;
