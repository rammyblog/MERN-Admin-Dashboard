import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Select, Switch, Tooltip } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';

function UserForm({ user, onFinish, changePasswordModal, loading }) {
  return (
    <>
      <Form
        name="user_details_form"
        className="login-form"
        initialValues={user}
        onFinish={onFinish}
        layout="vertical"
        size="large"
        style={{ clear: 'both' }}
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
            {user.role !== 'admin' ? (
              <Form.Item
                label={
                  user ? (
                    <span>
                      Change password&nbsp;
                      <Tooltip
                        title={
                          <p
                            style={{ cursor: 'pointer' }}
                            onClick={() => changePasswordModal()}
                          >
                            Change Password
                          </p>
                        }
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  ) : (
                    'Password'
                  )
                }
                rules={
                  user
                    ? []
                    : [
                        {
                          required: true,
                          message: 'Please input your Password!'
                        }
                      ]
                }
                name="password"
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  // {user ? readOnly: false}

                  readOnly={user ? true : false}
                  value={user ? 'rtfgyhuj' : ''}
                />
              </Form.Item>
            ) : null}
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
          {user.role !== 'admin' && (
            <Col span={12}>
              <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: false,
                    message: 'Pick a role!'
                  }
                ]}
              >
                <Select defaultValue={user ? user.role : 'member'}>
                  <Select.Option value="member">Member</Select.Option>
                  <Select.Option value="staff">Staff</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          )}
        </Row>

        <Form.Item label="Active Status" name="isActive">
          <Switch defaultChecked={user ? user.isActive : false} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            className="mr-2"
            disabled={loading}
          >
            Save
          </Button>
          <Button type="info" className="login-form-button">
            <Link to="/dashboard/users">Back</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default UserForm;
