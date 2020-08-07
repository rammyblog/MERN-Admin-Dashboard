import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import HeaderStyled from './HeaderStyled';

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
      </Header>
    </HeaderStyled>
  );
}

export default PageHeader;
