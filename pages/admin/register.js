import axios from 'axios';
import { useRef, useState } from 'react';
import AnchorLink from '../../components/admin/AnchorLink';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const pwordRef = useRef();

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = pwordRef.current.value;

		const formData = { name, email, password };

		axios
			.post(`http://localhost:5000/api/user/register`, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((res) => {
				toast.success('Account created.', {
					onClose: () => router.push('/admin/login'),
					autoClose: 2000,
				});
			})
			.catch((err) => {
				toast.warn(err.response.data.message);
			});

		nameRef.current.value = '';
		emailRef.current.value = '';
		pwordRef.current.value = '';
	};

	return (
		<div className=' min-h-screen flex justify-center items-center'>
			<div className='py-4 px-2 w-64 bg-blue-100'>
				<h1 className=' text-center text-medium font-bree'>Register</h1>
				<ToastContainer />
				<form className='mt-4 space-y-2' onSubmit={handleSubmit}>
					<div className='flex flex-col space-y-2'>
						<label htmlFor='name'>Name</label>
						<input
							name='name'
							id='name'
							type='text'
							placeholder='south paul'
							ref={nameRef}
						/>
					</div>
					<div className='flex flex-col space-y-2'>
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							id='email'
							type='text'
							placeholder='zinzin@gmail.com'
							ref={emailRef}
						/>
					</div>
					<div className='flex flex-col space-y-2'>
						<label htmlFor='password'>Password</label>
						<input
							name='password'
							id='password'
							type='password'
							placeholder='kmklzinzin'
							ref={pwordRef}
						/>
					</div>
					<button className='w-full bg-red-400 hover:bg-red-500 active:bg-red-600 py-2 mt-3'>
						Register
					</button>
				</form>
				<p>
					Already have account?{' '}
					<AnchorLink
						href='/admin/login'
						text='login here'
						className=' text-blue-600 hover:text-blue-700 active:text-blue-800'
					/>
				</p>
			</div>
		</div>
	);
};

export default register;
