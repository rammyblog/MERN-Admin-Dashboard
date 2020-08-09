import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import UserTable from './table/UserTable';
import { UserContext } from '../../context/userState/userContext';
import { Link } from 'react-router-dom';

const index = '2';
function UserListPage() {
  const { users, loading, error } = useContext(UserContext).state;

  return (
    <div>
      <Link
        to="/dashboard/add-new-user"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new user
      </Link>
      {users ? <UserTable data={users} /> : null}
    </div>
  );
}

export default DashboardHOC(UserListPage, index);
