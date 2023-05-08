import type {
	HandleInputChange,
	HandleSelectTypeDocument,
} from '../hooks/hook';

interface AccessComponentProps {
	display: string;
	name: string;
	type?: string;
	error?: boolean;
	val?: string;
	handle: HandleInputChange;
}

interface SubmitButtonComponentProps {
	children: string;
	handle?: () => void;
}

interface FilterInputComponentProps {
	holder: string;
	name: string;
	handler: HandleSelectTypeDocument;
	type: string;
}

interface CardComponentProps {
	date: string;
	disbursement: number;
	typeDocument: string;
	numberDocument: number;
	amount: number;
}
