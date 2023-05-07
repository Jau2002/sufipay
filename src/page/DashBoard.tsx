import type { FC } from 'react';
import FilterInput from '../components/FilterInput';
import inputHolder from '../helpers/inputHolder';
import useSelection from '../hooks/useSelection';

const DashBoard: FC = () => {
	const { handleSelectTypeDocument, handleFilterChange } = useSelection();
	return (
		<>
			<select onChange={handleSelectTypeDocument}>
				<option value='All'>Todos</option>
				<option value='CC'>Cédula Ciudadanía</option>
				<option value='CE'>Cédula Extranjería</option>
			</select>
			{inputHolder.map(({ id, name, placeholder, type }) => (
				<FilterInput
					key={id}
					name={name}
					holder={placeholder}
					handler={handleFilterChange}
					type={type}
				/>
			))}
		</>
	);
};
export default DashBoard;
