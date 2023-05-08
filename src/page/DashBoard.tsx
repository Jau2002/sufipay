import type { FC } from 'react';
import Header from '../components/Header';
import Logout from '../components/Logout';
import Nav from '../components/Nav';
import Table from '../components/Table';

const DashBoard: FC = () => {
	return (
		<>
			<Logout />
			<Header />
			<Nav />
			<Table />
		</>
	);
};
export default DashBoard;
