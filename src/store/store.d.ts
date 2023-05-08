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

interface FilterProducts {
	document?: string;
	outlay?: number;
	numDocument?: number;
	from?: string;
	to?: string;
}

interface State {
	products: Product[] | never[];
	filteredProducts: Product[] | never[];
	itemsPerPage: number;
	setItemsForPage: (items: number) => void;
	fetchAllProducts: () => Promise<void>;
	filterMultipleProducts: (FilterProducts) => void;
}

type PayStore = UseBoundStore<StoreApi<state>>;
