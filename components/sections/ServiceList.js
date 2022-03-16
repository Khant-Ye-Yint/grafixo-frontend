import Service from '../shared/Service';

import LaptopImg from '../../public/images/home/laptop.png';
import CameraImg from '../../public/images/home/camera.png';
import WashingMImg from '../../public/images/home/washingM.png';
import CompImg from '../../public/images/home/comp.png';

const ServiceList = () => {
	return (
		<div>
			<Service
				title='3D Modeling'
				para='We create highly detailed and cleaned 3D models
				for 3D Printing, Game Assets, etc.'
				img={CameraImg}
				reverse
				bgClass='from-redLeft to-redRight'
			/>
			<Service
				title='3D Rendering'
				para='We create high quality and photorealistic 3D renderings 
				for Commercial, Pre-Visualization. etc.'
				img={LaptopImg}
				bgClass='from-blueLeft to-blueRight'
			/>
			<Service
				reverse
				title='3D Product Animation'
				para='We create high quality and photorealistic 3D renderings 
				for Commercial, Pre-Visualization. etc.'
				img={CompImg}
				bgClass='from-tealLeft to-tealRight'
			/>
			<Service
				title='2D/3D Promotional Animation'
				para='We create short animations to post on your Website 
				or Social Media like facebook and instagram, etc.'
				img={WashingMImg}
				bgClass='from-orangeLeft to-orangeRight'
			/>
		</div>
	);
};

export default ServiceList;
