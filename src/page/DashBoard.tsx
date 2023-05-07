import type { FC } from 'react';
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
			<input
				placeholder='Número de documento'
				name='doc'
				onChange={handleFilterChange}
			/>
			<input
				placeholder='Número de desembolso'
				name='dis'
				onChange={handleFilterChange}
			/>
			<input
				name='from'
				placeholder='Desde'
				type='date'
				onChange={handleFilterChange}
			/>
			<input
				name='to'
				placeholder='Hasta'
				type='date'
				onChange={handleFilterChange}
			/>
		</>
	);
};
export default DashBoard;
