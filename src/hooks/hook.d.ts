import type { ChangeEvent, FormEvent } from 'react';
import type { Err } from '../helpers/helper';

interface InputsLogin {
	email: string;
	password: string;
}

type HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => void;

type HandleSubmit = (event: FormEvent<HTMLFormElement>) => void;

interface UseAuthenticate {
	handleInputChange: HandleInputChange;
	errors: Err;
	input: InputsLogin;
	handleSubmit: HandleSubmit;
}

type HandleSelectTypeDocument = (
	event: ChangeEventHandler<HTMLSelectElement>
) => void;

interface UseSelection {
	handleSelectTypeDocument: HandleSelectTypeDocument;
	handleFilterChange: HandleInputChange;
}

interface UseDownload {
	handleDownload: () => void;
}

interface UseSingOff {
	handleLogout: () => void;
}

type HandleChangeRecordsForPage = (
	event: ChangeEventHandler<HTMLSelectElement>
) => void;

interface UsePaging {
	handleChangeRecordsForPage: HandleChangeRecordsForPage;
}
