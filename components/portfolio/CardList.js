import Card from './Card';

import Camera from '../../public/images/portfolio/cam.png';
import Shoe from '../../public/images/portfolio/shoe.png';
import Glasses from '../../public/images/portfolio/glasses.png';
import Headphone from '../../public/images/portfolio/earphone.png';

const CardList = () => {
	return (
		<div className='grid grid-cols-4'>
			<Card imgSrc={Shoe} imgAlt='Shoe' />
			<Card imgSrc={Camera} imgAlt='Camera' />
			<Card imgSrc={Glasses} imgAlt='Glasses' />
			<Card imgSrc={Headphone} imgAlt='Headphone' />
			<Card imgSrc={Headphone} imgAlt='Headphone' />
			<Card imgSrc={Glasses} imgAlt='Glasses' />
			<Card imgSrc={Camera} imgAlt='Camera' />
			<Card imgSrc={Shoe} imgAlt='Shoe' />
		</div>
	);
};

export default CardList;
