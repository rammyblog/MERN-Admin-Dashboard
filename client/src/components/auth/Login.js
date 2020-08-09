import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ReactComponent as LoginSVG } from '../../assets/login.svg';
import LoginPNG from '../../assets/login.png';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="test">
      <div className="container ">
        <div>
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-6 align-self-center">
              <img src={LoginPNG} className="img-fluid" />
            </div>
            <div className="col-md-4 align-self-center">
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
                  >
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
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
