import { useState } from 'react';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import type { Err } from '../helpers/helper';
import { convertToken } from '../helpers/token';
import validator from '../helpers/validator';
import { isAuthenticated } from '../services/authUser';
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

		const navigate: NavigateFunction = useNavigate();

		isAuthenticated()
			.then((isLoggedIn: string[]) => {
				isLoggedIn.find((log: string): boolean => log === token);

				window.localStorage.setItem('token', token);

				setTimeout(() => {
					navigate('/dash');
				}, 2000);
			})
			.catch((e): Error => e);
	};

	return { handleInputChange, errors, input, handleSubmit };
}

export default useAuthenticate;
