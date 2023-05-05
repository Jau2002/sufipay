import { useState } from 'react';
import type { Err } from '../helpers/helper';
import { convertToken } from '../helpers/token';
import validator from '../helpers/validator';
import type {
	HandleInputChange,
	HandleSubmit,
	InputsLogin,
	UseAuthenticate,
} from './hook';

function useAuthenticate(): UseAuthenticate {
	const [input, setInput] = useState<InputsLogin>({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState<Err>({});

	const handleInputChange: HandleInputChange = (event) => {
		const { name, value } = event.target;

		const newInput = {
			...input,
			[name]: value,
		};

		setInput(newInput);

		setErrors(validator(newInput));
	};

	const handleSubmit: HandleSubmit = (event) => {
		event.preventDefault();
		const token = convertToken(input.email, input.password);
		window.localStorage.setItem('token', token);
	};

	return { handleInputChange, errors, input, handleSubmit };
}

export default useAuthenticate;
