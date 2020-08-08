import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';
import { Layout } from 'antd';

function DashboardHOC(Component, index) {
  return function DashboardCustomHoc(props) {
    const [collapsed, setCollapsed] = useState(true);
    const handleSetCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar index={index} collapsed={collapsed} />
        <Layout className="site-layout">
          <PageHeader collapsed={collapsed} toggle={handleSetCollapsed} />
          <div className="container">
            <Component {...props} />
          </div>
        </Layout>
      </Layout>
    );
  };
}

export default DashboardHOC;
