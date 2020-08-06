import React from 'react';
import { Card as AntCard } from 'antd';

export default function Card({ loading }) {
  console.log(loading);
  return (
    <>
      <AntCard style={{ width: 300, marginTop: 16 }} loading={loading}>
        <p>Earnings (Monthly)</p>
      </AntCard>
    </>
  );
}
