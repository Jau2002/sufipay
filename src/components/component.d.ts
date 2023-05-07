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
}

interface FilterInputComponentProps {
	holder: string;
	name: string;
	handler: HandleSelectTypeDocument;
	type: string;
}
