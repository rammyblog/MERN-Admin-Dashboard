import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './Sidebar';
import PageHeader from './PageHeader';
import { Layout, message } from 'antd';
import { UserContext } from '../../context/userState/userContext';

function DashboardHOC(Component, index) {
  return function DashboardCustomHoc(props) {
    const [collapsed, setCollapsed] = useState(true);
    const handleSetCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const { state } = useContext(UserContext);
    const {
      error,
      errResponse,
      message: userMessage,
      me: loggedInUser
    } = state;
    useEffect(() => {
      if (error) {
        message.error(errResponse);
      }
    }, [error]);

    useEffect(() => {
      if (userMessage) {
        message.success(userMessage);
      }
    }, [userMessage]);
    const { history } = props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar
          index={index}
          collapsed={collapsed}
          loggedInUserId={loggedInUser ? loggedInUser._id : null}
        />
        <Layout className="site-layout">
          <PageHeader
            history={props.history}
            collapsed={collapsed}
            toggle={handleSetCollapsed}
          />
          <div className="container">
            <Component {...props} />
          </div>
        </Layout>
      </Layout>
    );
  };
}

export default DashboardHOC;
