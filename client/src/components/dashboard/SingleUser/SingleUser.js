import React, { useContext, useState, useEffect } from 'react';

import DashboardHOC from '../DashboardHOC';
import { Typography, Popconfirm, Button } from 'antd';
import SingleUserStyled from './SingleUserStyled';
import { UserContext } from '../../../context/userState/userContext';
import PasswordForm from '../password/PasswordForm';
import UserForm from '../form/UserForm';

function SingleUser(props) {
  const {
    state,
    fetchSingleUser,
    editUserAction,
    deleteUserAction,
    changeUserPasswordAction
  } = useContext(UserContext);
  const [passwordFormVisibility, setpasswordFormVisibility] = useState(false);

  const { error, loading, user } = state;
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
  }, [fetchSingleUser, id]);

  const onFinish = (values) => {
    values._id = user._id;
    editUserAction(values);
  };

  const onConfirmDelete = () => {
    deleteUserAction(id);
    props.history.push('/dashboard/users');
  };

  return (
    <SingleUserStyled>
      {user ? (
        <>
          <Typography>Edit {user.name}'s Profile</Typography>
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={onConfirmDelete}
            // onCancel={cancel}
            okText="Delete"
            cancelText="Cancel"
          >
            <Button className="float-right" danger>
              Delete {user.name}
            </Button>
          </Popconfirm>

          <UserForm
            user={user}
            onFinish={onFinish}
            changePasswordModal={changePasswordModal}
            loading={loading}
          />
        </>
      ) : null}
      <PasswordForm
        visible={passwordFormVisibility}
        onCreate={handlePasswordChange}
        loading={loading}
        onCancel={() => {
          setpasswordFormVisibility(false);
        }}
        id={id}
      />
    </SingleUserStyled>
  );
}

export default DashboardHOC(SingleUser);
