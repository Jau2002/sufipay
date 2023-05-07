import type { FC } from 'react';
import style from '../css/filterInput.module.css';
import type { FilterInputComponentProps } from './component';

const FilterInput: FC<FilterInputComponentProps> = ({
	holder,
	name,
	handler,
	type,
}) => {
	return (
		<input
			className={style.input}
			placeholder={holder}
			name={name}
			onChange={handler}
			type={type}
		/>
	);
};
export default FilterInput;
