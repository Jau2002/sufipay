import type { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/sufi-logo.svg';
import style from '../css/logout.module.css';
import useSingOff from '../hooks/useSingOff';

const Logout: FC = () => {
	const { handleLogout } = useSingOff();
	return (
		<>
			<figure className={style.figure}>
				<img
					src={logo}
					alt='Logo'
				/>
			</figure>
			<Link
				to='/'
				onClick={handleLogout}
				className={style.link}
			>
				Cerrar Sesión
			</Link>
		</>
	);
};
export default Logout;
