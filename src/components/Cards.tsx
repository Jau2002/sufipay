import type { FC } from 'react';
import { useProductsStore } from '../store/products';
import type { State } from '../store/store';
import Card from './Card';

const Cards: FC = () => {
	const { products, filteredProducts } = useProductsStore(
		(state: State): State => state
	);
	return (
		<>
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
export default Cards;
