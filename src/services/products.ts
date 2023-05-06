import type { Product } from '../store/store';

const URL = 'http://localhost:3001';

export const getProducts = async (): Promise<Product[]> => {
	try {
		const res = await window.fetch(`${URL}/products`);

		const data: Product[] = await res.json();

		return data;
	} catch (err) {
		throw new Error((err as Error).message);
	}
};
