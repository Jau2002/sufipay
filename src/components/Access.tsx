import type { FC } from 'react';

interface AccessComponentProps {
	name: string;
	type?: string;
}

const Access: FC<AccessComponentProps> = ({ name, type = 'text' }) => {
	return (
		<section>
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				name={name}
				id={name}
			/>
		</section>
	);
};

export default Access;
