import Service from '../shared/Service';

const ServiceList = () => {
	return (
		<div>
			<Service
				bgColor='blue'
				propImg='laptop'
				title='3D Modeling and Rendering'
				para='We offer high quality and photorealistic 3D modeling and rendering
						services for commercial and 3D printing.'
			/>
			<Service
				reverse
				bgColor='red'
				propImg='camera'
				title='3d commercial animation'
				para='We offer high quality and photorealistic 3D modeling and rendering
						services for commercial and 3D printing.'
			/>
			<Service
				bgColor='blue'
				propImg='sewingM'
				title='2d/3d promotional animation'
				para='We offer high quality and photorealistic 3D modeling and rendering
						services for commercial and 3D printing.'
			/>
		</div>
	);
};

export default ServiceList;
