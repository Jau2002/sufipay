import type { FC } from 'react';
import style from '../css/login.module.css';
import useAuthenticate from '../hooks/useAuthenticate';
import Access from './Access';

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
			<button
				type='submit'
				className={style.button}
			>
				INGRESAR
			</button>
		</form>
	);
};
export default LoginForm;
