import type { FC } from 'react';
import usePaging from '../hooks/usePaging';

const ItemsPage: FC = () => {
	const { handleChangeRecordsForPage } = usePaging();
	return (
		<aside>
			<select
				onChange={handleChangeRecordsForPage}
				required
				defaultValue='16'
			>
				<option value='4'>4</option>
				<option value='8'>8</option>
				<option value='16'>16</option>
			</select>
		</aside>
	);
};
export default ItemsPage;
