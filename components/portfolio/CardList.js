import { useEffect, useState } from 'react';
import Card from './Card';

// const dummyData = [
// 	{
// 		name: 'Nike Lebron 17',
// 		company: 'Nike',
// 		price: '300',
// 		date: Date.now(),
// 		description: 'Very cool shoe with bright ascent color.',
// 		videoUrl: 'https://youtu.be/lky2P_aw6nc',
// 		videoRatio: '16:9',
// 		imgUrl:
// 			'https://sneakernews.com/wp-content/uploads/2019/09/nike-lebron-17-black-white-official-images-5.jpg',
// 		category: '3D Animation',
// 	},
// 	{
// 		name: 'Polaroid Now',
// 		company: 'Polaroid',
// 		price: '500',
// 		date: Date.now(),
// 		description: 'Capture every moment that makes you happy.',
// 		videoUrl: 'https://youtu.be/2aV3Iyyt2EM',
// 		videoRatio: '16:9',
// 		imgUrl:
// 			'https://www.bhphotovideo.com/images/images2000x2000/polaroid_9027_now_i_type_instant_camera_1555719.jpg',
// 		category: '3D Rendering',
// 	},
// 	{
// 		name: 'NOMOS Glashütte',
// 		company: 'NOMOS',
// 		price: '700',
// 		date: Date.now(),
// 		description: "Don't miss any time. Time flies so fast.",
// 		videoUrl: 'https://youtu.be/pwgRV55zfCo',
// 		videoRatio: '16:9',
// 		imgUrl:
// 			'http://www.uhrkauf.net/wp-content/uploads/2018/02/Nomos-Glashuette-Tangente-neomatik-39.jpg',
// 		category: '3D Animation',
// 	},
// 	{
// 		name: 'Razer Blade 15',
// 		company: 'Razer',
// 		price: '700',
// 		date: Date.now(),
// 		description:
// 			"Play your favourite game anywhere. Don't let computer bother you. Choose Razer Blade 15 now.",
// 		videoUrl: 'https://youtu.be/0rtSjaowO2I',
// 		videoRatio: '16:9',
// 		imgUrl:
// 			'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/razer_blade_15_gallery08_gaming_laptop.jpg',
// 		category: '3D Animation',
// 	},
// ];

// const reversedData = [...dummyData];
// reversedData.reverse();

const CardList = ({ currentCategory, data }) => {
	const [filteredData, setFilteredData] = useState(data);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (currentCategory === 'all') {
			setFilteredData(data);
			setLoading(false);
		}
		if (currentCategory === 'modeling') {
			const newData = data.filter((data) => data.category === currentCategory);
			setFilteredData(newData);
		}
		if (currentCategory === 'rendering') {
			const newData = data.filter((data) => data.category === currentCategory);
			setFilteredData(newData);
		}
		if (currentCategory === 'animation') {
			const newData = data.filter((data) => data.category === currentCategory);
			setFilteredData(newData);
		}
		setLoading(false);
	}, [currentCategory]);

	// const reversedData = [...filteredData];
	// reversedData.reverse();

	return loading ? (
		<span>Loading...</span>
	) : (
		<div className='grid laptop:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2'>
			{filteredData.map((data) => (
				<Card data={data} key={data.name} />
			))}
		</div>
	);
};

export default CardList;
