import type { FC } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Table from '../components/Table';

const DashBoard: FC = () => {
	return (
		<>
			<Header />
			<Nav />
			<Table />
		</>
	);
};
export default DashBoard;
