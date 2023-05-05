import { useState } from 'react';
import type { Err } from '../helpers/helper';
import validator from '../helpers/validator';
import type { HandleInputChange, InputsLogin, UseAuthenticate } from './hook';

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

	return { handleInputChange, errors, input };
}

export default useAuthenticate;
