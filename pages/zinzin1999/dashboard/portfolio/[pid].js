import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';

import DashboardNav from '../../../../components/DashboardNav';

const portfolio = ({ data }) => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<div className='min-h-screen bg-gray-800 text-black'>
			<DashboardNav />
			<div className='flex py-10 items-center justify-center'>
				<Formik
					initialValues={{
						id: data._id,
						name: data.name,
						client: data.client,
						price: data.price,
						category: data.category,
						description: data.description,
						date: data.date,
						featured: data.featured,
						vidUrl: data.vidUrl,
						thumbnailUrl: data.thumbnailUrl,
						imgUrls: data.imgUrls,
					}}
					onSubmit={async (values, { setSubmitting }) => {
						// const imgString = values.imgUrls.join(',');
						// const imgArray = imgString.split(',');
						// values.imgUrls = imgArray;
						// console.log(imgArray);
						await axios.patch(
							`https://grafixo-backend.herokuapp.com/api/projects/${pid}`,
							values
						);
						router.push('/admin/dashboard');
						setSubmitting(false);
					}}
				>
					{({ isSubmitting }) => (
						<Form className='bg-gray-900 w-1/3  p-10 flex flex-col items-center space-y-5'>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='id'
									>
										ID
									</label>
								</div>
								<Field
									type='text'
									name='id'
									id='id'
									className='input'
									readOnly
								/>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='name'
									>
										Name
									</label>
								</div>
								<Field type='text' name='name' id='name' className='input' />
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='client'
									>
										Client
									</label>
								</div>
								<Field
									type='text'
									name='client'
									id='client'
									className='input'
								/>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='price'
									>
										Price
									</label>
								</div>
								<Field
									type='number'
									name='price'
									id='price'
									className='input'
								/>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='category'
									>
										Category
									</label>
								</div>
								<Field
									as='select'
									name='category'
									id='category'
									className='input'
								>
									<option value='animation'>Animation</option>
									<option value='rendering'>Rendering</option>
									<option value='modeling'>Modeling</option>
									<option value='promoAni'>Promotional Animation</option>
								</Field>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='date'
									>
										Date
									</label>
								</div>
								<Field
									name='date'
									id='date'
									className='input'
									value={moment(data.date).format('LL')}
									readOnly
								/>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='featured'
									>
										Featured
									</label>
								</div>

								<Field
									as='select'
									name='featured'
									id='featured'
									className='input'
								>
									<option value='true'>Yes</option>
									<option value='false'>No</option>
								</Field>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='description'
									>
										Description
									</label>
								</div>

								<Field
									as='textarea'
									name='description'
									id='description'
									className='input'
									rows={5}
								/>
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='vidUrl'
									>
										Video Link
									</label>
								</div>
								<Field name='vidUrl' id='vidUrl' className='input' />
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='imgUrls'
									>
										Image Links
									</label>
								</div>
								<Field name='imgUrls' id='imgUrls' className='input' />
							</div>
							<div className='inputContainer'>
								<div>
									<label
										className='text-lg text-white font-bree cursor-pointer'
										htmlFor='thumbnailUrl'
									>
										Thumbnail Url
									</label>
								</div>
								<Field
									name='thumbnailUrl'
									id='thumbnailUrl'
									className='input'
								/>
							</div>
							<button
								className='bg-gray-500 px-2 py-1 font-bold hover:bg-gray-600 active:bg-gray-700'
								disabled={isSubmitting}
								type='submit'
							>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export async function getServerSideProps({ params }) {
	// Fetch necessary data for the blog post using params.id

	const res = await axios.get(
		`http://localhost:5000/api/projects/${params.pid}`
	);
	const data = await res.data;

	return {
		props: {
			data: data,
		},
	};
}

export default portfolio;
