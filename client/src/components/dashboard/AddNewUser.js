import React, { useContext } from 'react';
import UserForm from './form/UserForm';
import DashboardHOC from './DashboardHOC';
import { UserContext } from '../../context/userState/userContext';

function AddNewUser() {
  const { addUser } = useContext(UserContext);
  const onFinish = (values) => {
    console.log(values);
    addUser(values);
  };
  return (
    <>
      <UserForm onFinish={onFinish} />
    </>
  );
}

export default DashboardHOC(AddNewUser);
