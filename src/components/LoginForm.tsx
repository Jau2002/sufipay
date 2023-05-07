import type { FC } from 'react';
import style from '../css/login.module.css';
import useAuthenticate from '../hooks/useAuthenticate';
import Access from './Access';
import SubmitButton from './SubmitButton';

const LoginForm: FC = () => {
	const { errors, input, handleInputChange, handleSubmit } = useAuthenticate();
	return (
		<form onSubmit={handleSubmit}>
			<div className={style.article}>
				<Access
					display='Usuario'
					name='email'
					error={errors.email}
					val={input.email}
					handle={handleInputChange}
				/>
				<Access
					display='Contraseña'
					name='password'
					type='password'
					error={errors.password}
					val={input.password}
					handle={handleInputChange}
				/>
			</div>
			<SubmitButton>INGRESAR</SubmitButton>
		</form>
	);
};
export default LoginForm;
