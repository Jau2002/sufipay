import { saveAs } from 'file-saver';
import data from '../db.json';
import type { UseDownload } from './hook';

function useDownload(): UseDownload {
	const handleDownload = (): void => {
		const archivo = new Blob([JSON.stringify(data)], {
			type: 'application/json;charset=utf-8',
		});

		saveAs(archivo, 'data.json');
	};

	return { handleDownload };
}

export default useDownload;
