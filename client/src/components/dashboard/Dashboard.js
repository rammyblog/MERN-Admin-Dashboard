import React, { useContext } from 'react';
import { Card } from 'antd';
import { UserContext } from '../../context/userState/userContext';
import UserStats from './UserStats/UserStats';
import { Typography } from 'antd';
import { Doughnut, Line } from 'react-chartjs-2';
import DashboardHOC from './DashboardHOC';
const { Title } = Typography;
const index = '1';
function Dashboard() {
  const { users, loading, error } = useContext(UserContext).state;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
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
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  return (
    <div className="container">
      <Title>Dashboard</Title>
      <UserStats loading={loading} />
      <div className="row">
        <div className="col-md-8">
          <Card title="User overtime">
            <Line data={data} width={100} height={50} />
          </Card>
        </div>

        <div className="col-md-4 ">
          <Card title="Active Vs Inactive ">
            <Doughnut data={data} width={100} height={115} />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardHOC(Dashboard, index);
