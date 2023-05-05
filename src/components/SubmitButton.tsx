import type { FC } from 'react';
import style from '../css/submit.module.css';

interface SubmitButtonComponentProps {
	children: string;
}

const SubmitButton: FC<SubmitButtonComponentProps> = ({ children }) => {
	return (
		<button
			type='submit'
			className={style.button}
		>
			{children}
		</button>
	);
};

export default SubmitButton;
