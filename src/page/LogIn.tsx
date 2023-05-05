import type { FC } from 'react';
import sufiLogo from '../assets/img/sufi-logo.svg';
import Access from '../components/Access';
import SubmitButton from '../components/SubmitButton';
import style from '../css/login.module.css';

const LogIn: FC = () => {
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
				<article className={style.article}>
					<Access name='Usuario' />
					<Access
						name='Contraseña'
						type='password'
					/>
				</article>
				<SubmitButton>INGRESAR</SubmitButton>
				<span className={style.span}>No encuentro mi contraseña</span>
			</main>
		</>
	);
};

export default LogIn;
