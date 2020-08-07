import React from 'react';
import DashboardHOC from './DashboardHOC';
import UserTable from './table/UserTable';

const index = '2';
function UserListPage() {
  return (
    <div>
      <UserTable />
    </div>
  );
}

export default DashboardHOC(UserListPage, index);
