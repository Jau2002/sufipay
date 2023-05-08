import type { FC } from 'react';
import style from '../css/table.module.css';
import { useProductsStore } from '../store/products';
import type { State } from '../store/store';
import Card from './Card';

const Table: FC = () => {
	const { products, filteredProducts } = useProductsStore(
		(state: State): State => state
	);
	return (
		<>
			<article className={style.article}>
				<p className={style.articleColumn}>Fecha y hora</p>
				<p className={style.articleColumn}>Número de desembolso</p>
				<p className={style.articleColumn}>Número de documento</p>
				<p className={style.articleColumn}>Tipo de documento</p>
				<p className={style.articleColumn}>Monto</p>
			</article>
			{Array.isArray(filteredProducts) && filteredProducts.length
				? filteredProducts.map(
						(
							{ dateTime, disbursement, typeDocument, numberDocument, amount },
							i: number
						) => (
							<Card
								key={i}
								date={dateTime}
								disbursement={disbursement}
								typeDocument={typeDocument}
								numberDocument={numberDocument}
								amount={amount}
							/>
						)
				  )
				: products.map(
						(
							{ dateTime, disbursement, typeDocument, numberDocument, amount },
							i: number
						) => (
							<Card
								key={i}
								date={dateTime}
								disbursement={disbursement}
								typeDocument={typeDocument}
								numberDocument={numberDocument}
								amount={amount}
							/>
						)
				  )}
		</>
	);
};
export default Table;
