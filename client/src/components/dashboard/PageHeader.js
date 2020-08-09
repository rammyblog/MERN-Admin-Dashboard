import React from 'react';
import { Layout, Badge, Menu, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons';
import HeaderStyled from './HeaderStyled';
import Avatar from 'antd/lib/avatar/avatar';

const { Header } = Layout;

function PageHeader({ collapsed, toggle, history }) {
  const handleLogout = () => {
    localStorage.removeItem('mern_admin_dashboard');
    history.push('/user/login');
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => handleLogout()}>Log out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyled>
      <Header className="site-layout-background">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: toggle
          }
        )}
        <div className=" float-right d-flex mr-2">
          <div className="notifications-header">
            <Badge dot>
              <NotificationOutlined />
            </Badge>
          </div>
          <div className="name-header mx-3">
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar icon={<UserOutlined />} />
              </a>
            </Dropdown>
            <span className="name">Onasanya Tunde</span>
          </div>
        </div>
      </Header>
    </HeaderStyled>
  );
}

export default PageHeader;
