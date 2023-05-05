import type { FC } from 'react';
import sufiLogo from '../assets/img/sufi-logo.svg';
import Access from '../components/Access';
import SubmitButton from '../components/SubmitButton';

const LogIn: FC = () => {
	return (
		<main>
			<img
				src={sufiLogo}
				alt='Logo'
			/>
			<h1>Sufipay</h1>
			<h2>Administrador Comercial</h2>
			<Access name='Usuario' />
			<Access
				name='Contraseña'
				type='password'
			/>
			<SubmitButton>INGRESAR</SubmitButton>
			<span>No encuentro mi contraseña</span>
		</main>
	);
};

export default LogIn;
