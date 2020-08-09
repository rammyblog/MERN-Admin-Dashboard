import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

const PasswordForm = ({ visible, onCreate, onCancel, id }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Change Password"
      okText="Change"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            values.admin = true;
            values._id = id;
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public'
        }}
      >
        <Form.Item
          name="newPassword"
          label="New password"
          rules={[
            {
              required: true,
              message: 'Please input the new password!'
            }
          ]}
          hasFeedback
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input the new password!'
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              }
            })
          ]}
        >
          <Input type="password" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PasswordForm;
