import type { FC } from 'react';
import style from '../css/card.module.css';
import type { CardComponentProps } from './component';

const Card: FC<CardComponentProps> = ({
	date,
	disbursement,
	typeDocument,
	numberDocument,
	amount,
}) => {
	return (
		<section className={style.section}>
			<span className={style.sectionRow}>{date}</span>
			<p className={style.sectionRow}>{disbursement}</p>
			<h3 className={style.sectionRow}>{typeDocument}</h3>
			<h4 className={style.sectionRow}>{numberDocument}</h4>
			<h5 className={style.sectionRow}>$ {amount.toLocaleString('en-US')}</h5>
		</section>
	);
};
export default Card;
