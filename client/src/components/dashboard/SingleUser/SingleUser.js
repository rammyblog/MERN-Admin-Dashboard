import React from 'react';
import { Form, Input, Button, Select, Switch, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import DashboardHOC from '../DashboardHOC';
import { Row, Col } from 'antd';
import SingleUserStyled from './SingleUserStyled';

function SingleUser() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const initialValues = {
    name: 'Onasanya Tunde',
    email: 'onasanyatunde67@gmail.com',
    password: 'eeei*****shshshsh',
    role: 'admin',
    isActive: 'true'
  };
  return (
    <SingleUserStyled>
      <Typography>Edit Onasanya's Profile</Typography>
      <Form
        name="user_details_form"
        className="login-form"
        initialValues={initialValues}
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
              <Select>
                <Select.Option value="admin">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Active Status" name="isActive">
          <Switch checked={initialValues.isActive} />
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
            Back
          </Button>
        </Form.Item>
      </Form>
    </SingleUserStyled>
  );
}

export default DashboardHOC(SingleUser);
