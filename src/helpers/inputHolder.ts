import type { InputHolder } from './helper';

const inputHolder: InputHolder[] = [
	{
		id: 1,
		placeholder: 'Número de documento',
		name: 'doc',
		type: 'text',
	},
	{
		id: 2,
		placeholder: 'Número de desembolso',
		name: 'dis',
		type: 'text',
	},
	{
		id: 3,
		placeholder: 'Desde',
		name: 'from',
		type: 'date',
	},
	{
		id: 4,
		placeholder: 'Hasta',
		name: 'to',
		type: 'date',
	},
];

export default inputHolder;
