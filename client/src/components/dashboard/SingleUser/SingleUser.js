import React, { useContext, useState, useEffect } from 'react';

import DashboardHOC from '../DashboardHOC';
import { Row, Col, Typography } from 'antd';
import SingleUserStyled from './SingleUserStyled';
import { UserContext } from '../../../context/userState/userContext';

import { Link } from 'react-router-dom';
import PasswordForm from '../password/PasswordForm';
import UserForm from '../form/UserForm';

const index = 3;
function SingleUser(props) {
  const {
    state,
    fetchSingleUser,
    editUserAction,
    changeUserPasswordAction
  } = useContext(UserContext);
  const [passwordFormVisibility, setpasswordFormVisibility] = useState(false);

  const { users, error, loading, user } = state;
  // const [initialValues, setinitialValues] = useState(null);
  const handlePasswordChange = (data) => {
    changeUserPasswordAction(data);
    setpasswordFormVisibility(false);
  };

  const changePasswordModal = () => {
    setpasswordFormVisibility(!passwordFormVisibility);
  };
  const id = props.match.params.id;

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  const onFinish = (values) => {
    values._id = user._id;
    editUserAction(values);
  };

  return (
    <SingleUserStyled>
      {user ? (
        <>
          <Typography>Edit {user.name}'s Profile</Typography>
          <UserForm
            user={user}
            onFinish={onFinish}
            changePasswordModal={changePasswordModal}
          />
        </>
      ) : null}
      <PasswordForm
        visible={passwordFormVisibility}
        onCreate={handlePasswordChange}
        onCancel={() => {
          setpasswordFormVisibility(false);
        }}
        id={id}
      />
    </SingleUserStyled>
  );
}

export default DashboardHOC(SingleUser);
