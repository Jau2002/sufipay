import type { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './page/DashBoard';
import LogIn from './page/LogIn';

function App(): ReactElement {
	return (
		<Routes>
			<Route
				path='/'
				element={<LogIn />}
			/>
			<Route
				path='/dash'
				element={<DashBoard />}
			/>
		</Routes>
	);
}

export default App;
