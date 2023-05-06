import type { HandleInputChange } from '../hooks/hook';

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
