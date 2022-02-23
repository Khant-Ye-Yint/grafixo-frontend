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
				para='We offer high-quality product animation service for commercial and presentation.'
				img={CameraImg}
				reverse
				bgClass='from-redLeft to-redRight'
			/>
			<Service
				title='3D Rendering'
				para='We offer high quality and photorealistic 3D modeling and rendering services for commercial and 3D printing.'
				img={LaptopImg}
				bgClass='from-blueLeft to-blueRight'
			/>
			<Service
				reverse
				title='3D Product Animation'
				para='We offer high-quality product animation service for commercial and presentation.'
				img={CompImg}
				bgClass='from-tealLeft to-tealRight'
			/>
			<Service
				title='3D Product Animation'
				para='We create short animation to put on your social media like facebook and instagram.'
				img={WashingMImg}
				bgClass='from-orangeLeft to-orangeRight'
			/>
		</div>
	);
};

export default ServiceList;
