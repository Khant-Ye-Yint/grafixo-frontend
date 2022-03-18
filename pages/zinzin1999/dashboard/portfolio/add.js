import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';

import DashboardNav from '../../../../components/DashboardNav';

const add = ({ SERVER_BASE_URL }) => {
	const router = useRouter();

	return (
		<div className='min-h-screen bg-gray-800 text-black'>
			<DashboardNav />
			<div className='flex py-10 items-center justify-center'>
				<Formik
					initialValues={{
						name: '',
						client: '',
						price: 0,
						category: 'rendering',
						description: '',
						featured: false,
						vidUrl: '',
						thumbnailUrl: '',
						imgUrls: '',
					}}
					onSubmit={async (values, { setSubmitting }) => {
						axios
							.post(`${SERVER_BASE_URL}/api/projects`, values)
							.then(() => {
								router.push('/zinzin1999/dashboard');
								setSubmitting(false);
							})
							.catch((err) => console.error(err));
					}}
				>
					{({ isSubmitting }) => (
						<Form className='bg-gray-900 w-1/3  p-10 flex flex-col items-center space-y-5'>
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
									<option value='false'>No</option>
									<option value='true'>Yes</option>
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
										className='text-lg text-gray-100 font-bree cursor-pointer'
										htmlFor='imgUrls'
									>
										Image Links{' '}
										<span className='text-sm font-normal'>
											("Comma seperated Links")
										</span>
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
								className='bg-gray-600 text-white px-2 py-1 font-bold hover:bg-gray-700 active:bg-gray-800'
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

export async function getStaticProps() {
	// Fetch data from external API

	const SERVER_BASE_URL = process.env.SERVER_BASE_URL;

	// Pass data to the page via props
	return { props: { SERVER_BASE_URL: SERVER_BASE_URL } };
}

export default add;
