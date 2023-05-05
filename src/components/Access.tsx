import type { FC } from 'react';
import style from '../css/access.module.css';
import type { HandleInputChange } from '../hooks/hook';

export interface AccessComponentProps {
	display: string;
	name: string;
	type?: string;
	error?: boolean;
	val?: string;
	handle: HandleInputChange;
}

const Access: FC<AccessComponentProps> = ({
	display,
	name,
	type = 'text',
	error,
	val,
	handle,
}) => {
	return (
		<section className={style.section}>
			<label
				htmlFor={name}
				className={style.sectionLabel}
			>
				{display}
			</label>
			<input
				onChange={handle}
				className={error ? style.sectionInputError : style.sectionInput}
				type={type}
				name={name}
				id={name}
				value={val}
			/>
		</section>
	);
};

export default Access;
