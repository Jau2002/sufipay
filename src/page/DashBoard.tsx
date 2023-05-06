import { useEffect, type FC } from 'react';
import { useProductsStore } from '../store/products';
import type { State } from '../store/store';

const DashBoard: FC = () => {
	const { fetchAllProducts } = useProductsStore((state: State): State => state);

	useEffect(() => {
		(async () => {
			await fetchAllProducts();
		})();
	}, [fetchAllProducts]);

	return <div>DashBoard</div>;
};
export default DashBoard;
