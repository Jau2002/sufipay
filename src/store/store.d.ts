import type { StoreApi, UseBoundStore } from 'zustand';

const date = new Date();

const formattedDate: string = date
	.toLocaleDateString('es-ES')
	.padStart(10, '0');

const formattedTime: string = date.toLocaleTimeString('es-ES').padStart(8, '0');

const DateTime: string = formattedDate + ' ' + formattedTime;

interface Product {
	dateTime: typeof DateTime;
	disbursement: number;
	typeDocument: 'cédula_de_ciudadanía' | 'cédula_de_extranjería';
	numberDocument: number;
	amount: number;
}

interface State {
	products: Product[] | never[];
	fetchAllProducts: () => Promise<void>;
}

type PayStore = UseBoundStore<StoreApi<state>>;
