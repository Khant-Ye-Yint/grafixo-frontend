import { useState, useEffect } from 'react';

const useAuth = () => {
	const [accessToken, setAccessToken] = useState();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (typeof window !== null) {
			setAccessToken(window.localStorage.getItem('accessToken'));
			window.localStorage.getItem('accessToken')
				? setIsAuth(true)
				: setIsAuth(false);
		}
	}, []);

	return { accessToken, isAuth };
};

export default useAuth;
