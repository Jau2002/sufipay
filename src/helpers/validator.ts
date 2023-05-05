import type { InputsLogin } from '../hooks/hook';
import type { Err } from './helper';

function validator({ email, password }: InputsLogin): Err {
	const errors: Err = {};

	if (!email) {
		errors.email = true;
	} else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = true;
	}
	if (!password) {
		errors.password = true;
	}

	return errors;
}

export default validator;
