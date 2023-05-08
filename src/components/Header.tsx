import type { FC } from 'react';
import style from '../css/header.module.css';
import useDownload from '../hooks/useDownload';

const Header: FC = () => {
	const { handleDownload } = useDownload();
	return (
		<header className={style.header}>
			<h1 className={style.headerTitle}>Mis desembolsos</h1>
			<button
				className={style.headerButton}
				onClick={handleDownload}
			>
				Descargar
			</button>
		</header>
	);
};
export default Header;
