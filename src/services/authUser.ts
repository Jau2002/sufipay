const URL = 'http://localhost:3001';

export const isAuthenticated = async (): Promise<string[]> => {
	try {
		const resolve = await window.fetch(`${URL}/tokens`);

		const response = await resolve.json();

		return response;
	} catch (err) {
		throw new Error((err as Error).message);
	}
};
