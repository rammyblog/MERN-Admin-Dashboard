import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function Sidebar({ collapsed, index }) {
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[index]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link className="text-white" to="/dashboard">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link className="text-white" to="/dashboard/users">
              Users
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Account Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default Sidebar;
