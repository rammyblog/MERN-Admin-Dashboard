import React, { useContext, useState } from 'react';
import { Layout } from 'antd';

import { UserContext } from '../../context/userState/userContext';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';
import UserStats from './UserStats/UserStats';
import { Typography } from 'antd';
import { Doughnut, Bar } from 'react-chartjs-2';
const { Title } = Typography;

export default function Dashboard() {
  const { users, loading, error } = useContext(UserContext).state;
  const [collapsed, setCollapsed] = useState(false);

  const handleSetCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <PageHeader collapsed={collapsed} toggle={handleSetCollapsed} />
        {/* <Title>Dashboard</Title> */}
        <div className="container">
          <Title>Dashboard</Title>
          <UserStats loading={loading} />
          <Bar
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </Layout>
    </Layout>
  );
}
