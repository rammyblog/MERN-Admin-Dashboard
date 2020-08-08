import React from 'react';
import StatsCard from '../card/StatsCard';
import UserStatsStyled from './UserStatsStyled';
function UserStats({ loading, users }) {
  //   const { users, loading, error } = useContext(UserContext).state;
  // const ususers = [
  //   { name: 'Total Users', stats: 50 },
  //   { name: 'Active Users', stats: 150 },
  //   { name: 'Total Staffs', stats: 520 },
  //   { name: 'Total inactive users', stats: 520 }
  // ];

  const colors = ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'];
  return (
    <UserStatsStyled>
      {users.map((item, key) => (
        <StatsCard
          loading={loading}
          stats={item}
          color={colors[key]}
          key={key}
        />
      ))}
    </UserStatsStyled>
  );
}

export default UserStats;
