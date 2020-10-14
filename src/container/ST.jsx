import React from 'react';
import { Table } from 'antd';
import { mobile } from 'config/helper';

const columns2 = [
  {
    title: '',
    dataIndex: 'title',
    responsive: ['xs', 'sm', 'lg', 'md'],
  },
  {
    title: 'No of liver biopsies',
    sorter: (a, b) => a.hcc - b.hcc,
    dataIndex: 'hcc',
    id: 1,
    responsive: ['xs', 'sm', 'lg', 'md'],
  }, {
    title: 'No. Screening Test',
    dataIndex: 'lhcc',
    sorter: (a, b) => a.lhcc - b.lhcc,
    id: 2,
    responsive: ['xs', 'sm', 'lg', 'md'],
  }, {
    title: 'No of Diagnostic Test',
    id: 3,
    dataIndex: 'total',
    sorter: (a, b) => a.total - b.total,
    responsive: ['xs', 'sm', 'lg', 'md'],
  },
];

const Data2 = [
  {
    title: 'No Surveillance',
    hcc: 33,
    lhcc: 43,
    total: 5,
  },
  {
    title: 'Ultrasound',
    hcc: 12,
    lhcc: 43,
    total: 14,
  },
  {
    title: 'Oncoguard',
    hcc: 1562,
    lhcc: 56,
    total: 34,
  },
];
const ST = () => (
  <div className="table mB20">
    <h4 className="bold">Lifetime Number of Screening/Diagnostic Test Needed per 100,000 cirrhotic patients</h4>
    <Table
      bordered
      rowKey="hcc"
      columns={columns2}
      pagination={false}
      scroll={{ x: mobile ? 800 : '100%' }}
      dataSource={Data2} />
  </div>
);

export default ST;
