import { create } from 'zustand';
import { getProducts } from '../services/products';
import type { PayStore, State } from './store';

export const useProductsStore: PayStore = create<State>((set) => ({
	products: [],

	fetchAllProducts: async () => {
		set({ products: await getProducts() });
	},
}));
