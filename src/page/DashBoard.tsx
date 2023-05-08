import type { FC } from 'react';
import Header from '../components/Header';
import ItemsPage from '../components/ItemsPage';
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
			<ItemsPage />
		</>
	);
};
export default DashBoard;
