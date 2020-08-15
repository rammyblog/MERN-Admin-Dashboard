import React, { useContext, useEffect } from 'react';
import { Form, notification, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/auth/AuthContext';
import checkAdminAuth from '../../helpers/AdminAuth';

const LoginForm = ({ history }) => {
  const { LoginAction, state, AuthReset } = useContext(AuthContext);
  const { token, loading, error, errResponse } = state;
  const onFinish = (values) => {
    LoginAction(values);
  };

  const openNotification = () => {
    const args = {
      message: 'Login Details',
      description: 'Email: test@gmail.com password: testing',
      duration: 0
    };
    notification.open(args);
  };

  useEffect(() => {
    AuthReset();
    openNotification();
  }, []);

  useEffect(() => {
    checkAdminAuth(token);
    if (token) {
      history.push('/dashboard');
    }
  }, [token, history]);

  useEffect(() => {
    if (error) {
      message.error(errResponse);
    }
  }, [error, errResponse]);

  return (
    <div className="test">
      <div className="container ">
        <div>
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-4 align-self-center text-center">
              <h2>Welcome Back!</h2>
              <p>Input your login details to continue</p>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="email"
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
                    className="rounded-pill"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
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
                    className="rounded-pill"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
