import type { FC } from 'react';
import style from '../css/nav.module.css';
import inputHolder from '../helpers/inputHolder';
import useSelection from '../hooks/useSelection';
import FilterInput from './FilterInput';

const Nav: FC = () => {
	const { handleSelectTypeDocument, handleFilterChange } = useSelection();
	return (
		<nav className={style.nav}>
			<select
				onChange={handleSelectTypeDocument}
				className={style.select}
				required
				defaultValue=''
			>
				<option
					hidden
					disabled
					value=''
				>
					Tipo doc.
				</option>
				<option
					value='All'
					className={style.option}
				>
					Todos
				</option>
				<option
					value='CC'
					className={style.option}
				>
					Cédula Ciudadanía
				</option>
				<option
					value='CE'
					className={style.option}
				>
					Cédula Extranjería
				</option>
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
		</nav>
	);
};
export default Nav;
