import React, { useContext } from 'react';
import { UserContext } from '../../context/userState/userContext';
import Card from '../presentation/Card';

function StatsCard() {
  const { users, loading, error } = useContext(UserContext).state;

  return <Card loading={loading} />;
}

export default StatsCard;
