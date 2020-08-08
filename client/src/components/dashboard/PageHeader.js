import React from 'react';
import { Layout, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons';
import HeaderStyled from './HeaderStyled';
import Avatar from 'antd/lib/avatar/avatar';

const { Header } = Layout;

function PageHeader({ collapsed, toggle }) {
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
            <Avatar icon={<UserOutlined />} />
            <span className="name">Onasanya Tunde</span>
          </div>
        </div>
      </Header>
    </HeaderStyled>
  );
}

export default PageHeader;
