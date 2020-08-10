import React, { useContext } from 'react';
import DashboardHOC from './DashboardHOC';
import UserTable from './table/UserTable';
import { UserContext } from '../../context/userState/userContext';
import { Link } from 'react-router-dom';
import CustomLoader from '../common/CustomLoader';

const index = '2';
function UserListPage() {
  const { users, loading } = useContext(UserContext).state;

  return (
    <div>
      <Link
        to="/dashboard/add-new-user"
        className="btn btn-primary float-right cursor-pointer mb-2 "
      >
        Add new user
      </Link>
      {!loading ? (
        <UserTable data={users} />
      ) : (
        <CustomLoader text={'Getting users from DB! Hold on gee...'} />
      )}
    </div>
  );
}

export default DashboardHOC(UserListPage, index);
