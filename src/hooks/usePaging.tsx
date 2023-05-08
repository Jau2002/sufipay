import { useProductsStore } from '../store/products';
import type { State } from '../store/store';
import type { HandleChangeRecordsForPage, UsePaging } from './hook';

function usePaging(): UsePaging {
	const { setItemsForPage } = useProductsStore((state: State): State => state);

	const handleChangeRecordsForPage: HandleChangeRecordsForPage = (
		event
	): void => {
		const { value } = event.target;

		setItemsForPage(parseInt(value));
	};

	return { handleChangeRecordsForPage };
}
export default usePaging;
