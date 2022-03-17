import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import axios from 'axios';

import { useState } from 'react';
import { useRouter } from 'next/router';

import ConfirmModal from './ConfirmModal';
import Portal from '../../shared/Portal';

const TableRow = ({
	id,
	name,
	client,
	price,
	date,
	description,
	featured,
	category,
	thumbnail,
}) => {
	const time = moment(date).format('LL');

	const [show, setShow] = useState(false);
	const router = useRouter();

	const handleDelete = async () => {
		await axios.delete(`http://localhost:5000/api/projects/${id}`);
		router.reload();
	};

	return (
		<div className='grid grid-cols-11 place-items-center py-2 px-1 bg-darkGray text-white font-montserrat gap-3 border-b-2 border-primary text-center'>
			<span>{name}</span>
			<span>{client}</span>
			<span>$ {price}</span>
			<span>{time}</span>
			<span className='col-span-2'>{description}</span>
			<span>{featured ? 'Yes' : 'No'}</span>
			<span>{category}</span>
			<span className='col-span-2'>
				<Image
					src={thumbnail}
					width={300}
					height={150}
					objectFit='contain'
					objectPosition='center'
				/>
			</span>
			<span className='flex flex-col space-y-3'>
				<Link href={`/zinzin1999/dashboard/portfolio/${id}`}>
					<span className='px-3 py-1 bg-green-600 hover:bg-green-700 active:bg-green-800 cursor-pointer'>
						Edit
					</span>
				</Link>
				<span
					className='px-3 py-1 bg-red-600 hover:bg-red-700 active:bg-red-800 cursor-pointer'
					onClick={() => setShow(true)}
				>
					Delete
				</span>
			</span>
			{show && (
				<Portal
					component={
						<ConfirmModal
							show={show}
							setShow={setShow}
							name={name}
							del={handleDelete}
						/>
					}
					domLocation={document.getElementById('modal-root')}
				/>
			)}
		</div>
	);
};

export default TableRow;
