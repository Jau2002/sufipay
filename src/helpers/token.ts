export function convertToken(email: string, password: string): string {
	return `${email}:${password}`;
}
