import type { FC } from 'react';
import type { FilterInputComponentProps } from './component';

const FilterInput: FC<FilterInputComponentProps> = ({
	holder,
	name,
	handler,
	type,
}) => {
	return (
		<input
			placeholder={holder}
			name={name}
			onChange={handler}
			type={type}
		/>
	);
};
export default FilterInput;
