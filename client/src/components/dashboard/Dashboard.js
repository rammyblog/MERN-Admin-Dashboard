import React, { useContext, useState, useEffect } from 'react';
import { Card, Spin } from 'antd';
import { UserContext } from '../../context/userState/userContext';
import UserStats from './UserStats/UserStats';
import { Typography } from 'antd';
import { Doughnut, Line } from 'react-chartjs-2';
import DashboardHOC from './DashboardHOC';
const { Title } = Typography;
const index = '1';
function Dashboard() {
  const { state } = useContext(UserContext);
  const { users, usersByMonth, error, loading } = state;
  const [userObj, setuserObj] = useState();
  const [lineData, setLineData] = useState();
  const [doughnutStateData, setdoughnutStateData] = useState();

  const lineStatsData = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'User dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      }
    ]
  };

  const DoughnutData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }
    ]
  };

  const getUsersData = () => {
    const activeUsers = users
      ? users.filter((user) => user.isActive === true).length
      : 0;
    const totalStaffs = users
      ? users.filter((user) => user.role === 'staff').length
      : 0;

    const inActiveUsers = users ? users.length - activeUsers : 0;
    const userObj = [
      { name: 'Total Users', stats: users ? users.length : 0 },
      { name: 'Active Users', stats: activeUsers },
      { name: 'Total Staffs', stats: totalStaffs },
      { name: 'Total inactive users', stats: inActiveUsers }
    ];
    DoughnutData.datasets[0].data.push(activeUsers);
    DoughnutData.datasets[0].data.push(inActiveUsers);
    setdoughnutStateData(DoughnutData);

    return userObj;
  };

  const arrangeUserStats = () => {
    if (usersByMonth) {
      // usersByMonth.forEach(
      //   (data) => (
      //     lineStatsData.labels.push(data.month),
      //     lineStatsData.datasets[0].data.push(data.count)
      //   )
      // );
      for (let index = 0; index < usersByMonth.length; index++) {
        const data = usersByMonth[index];
        lineStatsData.labels.push(data.month);
        lineStatsData.datasets[0].data.push(data.count);
      }
      setLineData(lineStatsData);
    }
  };

  useEffect(() => {
    setuserObj(getUsersData());
  }, [users]);

  useEffect(() => {
    arrangeUserStats();
  }, [usersByMonth]);

  return (
    <div className="container">
      <Title>Dashboard</Title>
      {userObj ? <UserStats users={userObj} loading={loading} /> : null}
      <div className="row">
        <div className="col-md-8">
          <Card title="User overtime">
            <Spin spinning={loading}>
              <Line data={lineData} width={100} height={50} />
            </Spin>
          </Card>
        </div>

        <div className="col-md-4 ">
          <Card title="Active Vs Inactive ">
            {doughnutStateData ? (
              <>
                <Spin spinning={loading}>
                  <Doughnut data={doughnutStateData} width={100} height={115} />
                </Spin>
              </>
            ) : null}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardHOC(Dashboard, index);
