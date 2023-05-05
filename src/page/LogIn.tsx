import type { FC } from 'react';
import sufiLogo from '../assets/img/sufi-logo.svg';
import Access from '../components/Access';
import SubmitButton from '../components/SubmitButton';
import style from '../css/login.module.css';
import useAuthenticate from '../hooks/useAuthenticate';

const LogIn: FC = () => {
	const { errors, input, handleInputChange, handleSubmit } = useAuthenticate();
	return (
		<>
			<div className={style.ornamentRight} />
			<div className={style.ornamentLeft} />
			<main className={style.main}>
				<figure className={style.logo}>
					<img
						src={sufiLogo}
						alt='Logo'
					/>
				</figure>
				<h1 className={style.title}>Sufipay</h1>
				<h2 className={style.subTitle}>Administrador Comercial</h2>
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
				<span className={style.span}>No encuentro mi contraseña</span>
			</main>
		</>
	);
};

export default LogIn;
