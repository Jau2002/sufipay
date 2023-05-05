import { type ReactElement } from 'react';
import Access from './components/Access';

function App(): ReactElement {
	return (
		<>
			<Access name='Usuario' />
			<Access
				name='Contraseña'
				type='password'
			/>
		</>
	);
}

export default App;
