import type { FC } from 'react';
import Cards from '../components/Cards';
import Nav from '../components/Nav';
import style from '../css/dashBoard.module.css';

const DashBoard: FC = () => {
	return (
		<>
			<Nav />
			<article className={style.article}>
				<p className={style.articleColumn}>Fecha y hora</p>
				<p className={style.articleColumn}>Número de desembolso</p>
				<p className={style.articleColumn}>Número de documento</p>
				<p className={style.articleColumn}>Tipo de documento</p>
				<p className={style.articleColumn}>Monto</p>
			</article>
			<Cards />
		</>
	);
};
export default DashBoard;
