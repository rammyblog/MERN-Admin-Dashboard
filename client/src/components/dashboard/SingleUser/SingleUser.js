import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import DashboardHOC from '../DashboardHOC';
import { Row, Col } from 'antd';
function SingleUser() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        layout="vertical"
        size="large"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Password"
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
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Password"
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
              />
            </Form.Item>
          </Col>
        </Row>

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
    </>
  );
}

export default DashboardHOC(SingleUser);
