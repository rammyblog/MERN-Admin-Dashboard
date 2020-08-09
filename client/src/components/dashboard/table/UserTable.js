import React from 'react';

import { Table, Switch } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    responsive: ['lg']
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => (
      <Link to={`/dashboard/user/${record._id}`}>{text}</Link>
    ),
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },

  {
    title: 'Role',
    dataIndex: 'role',
    filters: [
      {
        text: 'Member',
        value: 'member'
      },
      {
        text: 'Admin',
        value: 'admin'
      },
      {
        text: 'Staff',
        value: 'staff'
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.role.indexOf(value) === 0
  },

  {
    title: 'email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ['descend', 'ascend'],
    responsive: ['md']
  },
  {
    title: 'Active',
    dataIndex: 'isActive',
    filters: [
      {
        text: 'Active',
        value: true
      },
      {
        text: 'In Active',
        value: false
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.isActive === value,
    render: (bool) => <Switch checked={bool} />
  }
];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }

function UserTable({ data }) {
  return (
    <>
      <Table
        className="clearfix"
        columns={columns}
        dataSource={data}
        style={{ clear: 'both' }}
        // onChange={onChange}
      />
    </>
  );
}

export default UserTable;
