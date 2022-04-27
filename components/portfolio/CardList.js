import { useEffect, useState } from 'react';

import Card from './Card';
import Modal from './Modal';

import useScrollControl from '../../hooks/useScrollControl';

const CardList = ({ currentCategory, data }) => {
	const [filteredData, setFilteredData] = useState(data);
	const [loading, setLoading] = useState(true);

	const [modalShow, setModalShow] = useState(false);
	const [modalAttributes, setModalAttributes] = useState(data[0].fields);
	const { allowScroll, preventScroll } = useScrollControl();

	useEffect(() => {
		modalShow ? preventScroll() : allowScroll();
	}, [modalShow]);

	const openModel = (attributes) => {
		setModalAttributes(attributes);
		setModalShow(true);
	};

	useEffect(() => {
		if (currentCategory === 'all') {
			setFilteredData(data);
			setLoading(false);
		}
		if (currentCategory === 'modeling') {
			const newData = data.filter((data) =>
				data.fields.category.includes(currentCategory)
			);
			setFilteredData(newData);
		}
		if (currentCategory === 'rendering') {
			const newData = data.filter((data) =>
				data.fields.category.includes(currentCategory)
			);
			setFilteredData(newData);
		}
		if (currentCategory === 'animation') {
			const newData = data.filter((data) =>
				data.fields.category.includes(currentCategory)
			);
			setFilteredData(newData);
		}
		if (currentCategory === 'promoAni') {
			const newData = data.filter((data) =>
				data.fields.category.includes(currentCategory)
			);
			setFilteredData(newData);
		}
		setLoading(false);
	}, [currentCategory]);

	return loading ? (
		<span>Loading...</span>
	) : (
		<div className='grid laptop:grid-cols-4 tablet:grid-cols-3 phone:grid-cols-2'>
			{filteredData.map((data) => (
				<Card
					attributes={data.fields}
					key={data.sys.id}
					openModel={openModel}
				/>
			))}
			<Modal
				modalShow={modalShow}
				onClose={() => setModalShow(false)}
				setModalShow={setModalShow}
				attributes={modalAttributes}
				currentCategory={currentCategory}
			/>
		</div>
	);
};

export default CardList;
