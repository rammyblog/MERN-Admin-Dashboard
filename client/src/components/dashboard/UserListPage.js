import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import UserTable from './table/UserTable';
import { UserContext } from '../../context/userState/userContext';

const index = '2';
function UserListPage() {
  const { users, loading, error } = useContext(UserContext).state;

  return <div>{users ? <UserTable data={users} /> : null}</div>;
}

export default DashboardHOC(UserListPage, index);
