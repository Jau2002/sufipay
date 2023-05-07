import { create } from 'zustand';
import { getProducts } from '../services/products';
import type { FilterProducts, PayStore, State } from './store';

export const useProductsStore: PayStore = create<State>((set, get) => ({
	products: [],
	filteredProducts: [],

	fetchAllProducts: async () => {
		set({ products: await getProducts() });
	},

	filterMultipleProducts: ({
		document,
		outlay,
		numDocument,
		from,
		to,
	}: FilterProducts) => {
		const { products } = get();

		let filterProducts;

		if (document && document !== 'All') {
			filterProducts = products.filter(
				({ typeDocument }): boolean => typeDocument === document
			);
		}

		if (numDocument) {
			filterProducts = products.filter(({ numberDocument }): boolean =>
				numberDocument.toString().includes(numDocument.toString())
			);
		}

		if (outlay) {
			filterProducts = products.filter(({ disbursement }): boolean =>
				disbursement.toString().includes(outlay.toString())
			);
		}

		if (from) {
			filterProducts = products.filter(
				({ dateTime }): boolean => dateTime.split(' ')[0] > from
			);
		}

		if (to) {
			filterProducts = products.filter(
				({ dateTime }): boolean => dateTime.split(' ')[0] < to
			);
		}

		set({ filteredProducts: filterProducts });
	},
}));
