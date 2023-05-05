import type { ChangeEvent } from 'react';
import type { Err } from '../helpers/helper';

interface InputsLogin {
	email: string;
	password: string;
}

type HandleInputChange = (event: ChangeEvent<HTMLInputElement>) => void;

interface UseAuthenticate {
	handleInputChange: HandleInputChange;
	errors: Err;
	input: InputsLogin;
}
