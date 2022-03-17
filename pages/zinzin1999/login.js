import { useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useAuth from '../../hooks/useAuth';

const login = () => {
	const emailRef = useRef();
	const pwordRef = useRef();

	const router = useRouter();

	const { accessToken, isAuth } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = pwordRef.current.value;

		const formData = { email, password };

		axios
			.post(`https://grafixo-backend.herokuapp.com/api/user/login`, formData, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((res) => {
				if (typeof window !== null) {
					localStorage.setItem('accessToken', res.data.accessToken);
					toast.success('Logged in successfully. Redirecting...', {
						onClose: () => router.push('/'),
						autoClose: 2000,
					});
				}
			})
			.catch((err) => {
				toast.warn(err.response.data.message);
				console.log(accessToken, isAuth);
			});

		emailRef.current.value = '';
		pwordRef.current.value = '';
	};

	return (
		<div className=' min-h-screen flex justify-center items-center'>
			<div className='py-4 px-2 bg-blue-100'>
				<h1 className=' text-center text-medium font-bree'>Login</h1>
				<ToastContainer />
				<form className='mt-4 space-y-2' onSubmit={handleSubmit}>
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
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default login;
