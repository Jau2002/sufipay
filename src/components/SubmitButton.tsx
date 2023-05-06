import type { FC } from 'react';
import style from '../css/submit.module.css';
import type { SubmitButtonComponentProps } from './component';

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
