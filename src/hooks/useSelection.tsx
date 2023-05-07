import { useEffect } from 'react';
import { useProductsStore } from '../store/products';
import type { State } from '../store/store';
import type {
	HandleInputChange,
	HandleSelectTypeDocument,
	UseSelection,
} from './hook';

function useSelection(): UseSelection {
	const { fetchAllProducts, filterMultipleProducts, filteredProducts } =
		useProductsStore((state: State): State => state);

	useEffect(() => {
		(async () => {
			await fetchAllProducts();
		})();
	}, [fetchAllProducts]);

	const handleSelectTypeDocument: HandleSelectTypeDocument = (event) => {
		const { value } = event.target;

		filterMultipleProducts({ document: value });
	};

	const handleFilterChange: HandleInputChange = (event) => {
		const { name, value } = event.target;

		if (name === 'doc') filterMultipleProducts({ numDocument: value });

		if (name === 'dis') filterMultipleProducts({ outlay: value });

		if (name === 'from') filterMultipleProducts({ from: value });

		if (name === 'to') filterMultipleProducts({ to: value });
	};

	console.log(filteredProducts);
	return { handleSelectTypeDocument, handleFilterChange };
}

export default useSelection;
