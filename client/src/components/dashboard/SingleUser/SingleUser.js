import React, { useContext, useState, useEffect } from 'react';
import { Form, Input, Button, Select, Switch, Typography, Tooltip } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import DashboardHOC from '../DashboardHOC';
import { Row, Col } from 'antd';
import SingleUserStyled from './SingleUserStyled';
import { UserContext } from '../../../context/userState/userContext';
import { Link } from 'react-router-dom';
import PasswordForm from '../password/PasswordForm';

const index = 3;
function SingleUser(props) {
  const { state, fetchSingleUser } = useContext(UserContext);
  const [passwordFormVisibility, setpasswordFormVisibility] = useState(false);

  const { users, error, loading, user } = state;
  // const [initialValues, setinitialValues] = useState(null);
  const handlePasswordChange = () => {};

  const id = props.match.params.id;

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <SingleUserStyled>
      {user ? (
        <>
          <Typography>Edit {user.name}'s Profile</Typography>
          <Form
            name="user_details_form"
            className="login-form"
            initialValues={user}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input full name!'
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="John Doe"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <span>
                      Change password&nbsp;
                      <Tooltip
                        title={
                          <p
                            style={{ cursor: 'pointer' }}
                            onClick={() => setpasswordFormVisibility(true)}
                          >
                            Change Password
                          </p>
                        }
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    readOnly
                    value="112367uefjn"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!'
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Role"
                  name="role"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]}
                >
                  <Select defaultValue={user.role}>
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="member">Member</Select.Option>
                    <Select.Option value="staff">Staff</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Active Status" name="isActive">
              <Switch defaultChecked={user.isActive} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Save
              </Button>
              <Button type="info" className="login-form-button">
                <Link to="/dashboard/users">Back</Link>
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : null}
      <PasswordForm
        visible={passwordFormVisibility}
        onCreate={handlePasswordChange}
        onCancel={() => {
          setpasswordFormVisibility(false);
        }}
      />
    </SingleUserStyled>
  );
}

export default DashboardHOC(SingleUser);
