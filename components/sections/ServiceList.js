import Service from '../shared/Service';

const ServiceList = () => {
	return (
		<div>
			<Service
				bgColor='blue'
				propImg='laptop'
				title='3D Modeling and Rendering'
				para='We create high quality and photorealistic pre-visualization 3D modeling and rendering
						services for commercial and 3D printing.'
			/>
			<Service
				reverse
				bgColor='red'
				propImg='camera'
				title='3d commercial animation'
				para='We create high quality commercial animation service for your product,service or store.'
			/>
			<Service
				bgColor='blue'
				propImg='sewingM'
				title='2d/3d promotional animation'
				para='We create short animation to put on your social media like facebook and instagram'
			/>
		</div>
	);
};

export default ServiceList;
