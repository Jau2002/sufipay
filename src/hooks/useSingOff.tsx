import type { UseSingOff } from './hook';

function useSingOff(): UseSingOff {
	const handleLogout = (): void => {
		window.localStorage.removeItem('token');
	};

	return { handleLogout };
}
export default useSingOff;
