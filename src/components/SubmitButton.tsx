import type { FC } from 'react';

interface SubmitButtonComponentProps {
	children: string;
}

const SubmitButton: FC<SubmitButtonComponentProps> = ({ children }) => {
	return <button type='submit'>{children}</button>;
};

export default SubmitButton;
