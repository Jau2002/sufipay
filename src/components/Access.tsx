import type { FC } from 'react';
import style from '../css/access.module.css';

interface AccessComponentProps {
	name: string;
	type?: string;
}

const Access: FC<AccessComponentProps> = ({ name, type = 'text' }) => {
	return (
		<section className={style.section}>
			<label
				htmlFor={name}
				className={style.sectionLabel}
			>
				{name}
			</label>
			<input
				className={style.sectionInput}
				type={type}
				name={name}
				id={name}
			/>
		</section>
	);
};

export default Access;
