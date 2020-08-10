import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SidebarStyled from './SidebarStyled';

const { Title } = Typography;
const { Sider } = Layout;

function Sidebar({ collapsed, index, loggedInUserId }) {
  return (
    <SidebarStyled collapsed={collapsed}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        // style={{
        //   overflow: 'auto',
        //   height: '100vh',
        //   position: 'fixed',
        //   left: 0
        // }}
      >
        <div className="logo">
          <Title level={2}>MERN DASH</Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="sidebar-items"
          defaultSelectedKeys={[index]}
        >
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
            <Link to={`/dashboard/user/${loggedInUserId}`}></Link>
            Account Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </SidebarStyled>
  );
}

export default Sidebar;
