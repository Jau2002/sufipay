export function convertToken(email: string, password: string): string {
	return JSON.stringify({ email, password });
}

export function parserToken(token: string): object {
	return JSON.parse(token);
}
