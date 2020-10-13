import React from 'react';
import { Table } from 'antd';
import { Column } from '@ant-design/charts';

const columns1 = [
  {
    title: 'No of cases detected incidentaly',
    children: [
      {
        dataIndex: 'title',
      },
      {
        title: 'Early-HCC',
        sorter: (a, b) => a.hcc - b.hcc,
        dataIndex: 'hcc',
        id: 1,
      }, {
        title: 'Late-HCC',
        dataIndex: 'lhcc',
        sorter: (a, b) => a.lhcc - b.lhcc,
        id: 2,
      }, {
        title: 'Total',
        id: 3,
        dataIndex: 'total',
        sorter: (a, b) => a.total - b.total,
      },
    ],
  },
  {
    title: 'No of cases detected survelliance',
    children: [
      {
        title: 'Early-HCC',
        sorter: (a, b) => a.hcc - b.hcc,
        dataIndex: 'hcc',
        id: 1,
      }, {
        title: 'Late-HCC',
        dataIndex: 'lhcc',
        sorter: (a, b) => a.lhcc - b.lhcc,
        id: 2,
      }, {
        title: 'Total',
        id: 3,
        dataIndex: 'total',
        sorter: (a, b) => a.total - b.total,
      },
    ],
  }];

const Data1 = [
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
const columns2 = [
  {
    title: '',
    dataIndex: 'title',
  },
  {
    title: 'No of liver biopsies',
    sorter: (a, b) => a.hcc - b.hcc,
    dataIndex: 'hcc',
    id: 1,
  }, {
    title: 'No. Screening Test',
    dataIndex: 'lhcc',
    sorter: (a, b) => a.lhcc - b.lhcc,
    id: 2,
  }, {
    title: 'No of Diagnostic Test',
    id: 3,
    dataIndex: 'total',
    sorter: (a, b) => a.total - b.total,
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

const HCD = ({ data }) => {
  const config = {
    forceFit: true,
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    color: ['#98ccd9', '#9b9ff9', '#b1d4f5'],
  };
  return (
    <>
      <div className="chart-wrapper">
        <h5 className="bold chart-title">Detection of HCC Cases(%)</h5>
        <Column {...config} />
      </div>
      <div className="table mB20">
        <h4 className="bold">Number of HCC Cases Detected per 100,000 cirrhotic patients</h4>
        <Table
          bordered
          rowKey="hcc"
          columns={columns1}
          pagination={false}
          dataSource={Data1} />
      </div>
      <div className="table mB20">
        <h4 className="bold">Lifetime Number of Screening/Diagnostic Test Needed per 100,000 cirrhotic patients</h4>
        <Table
          bordered
          rowKey="hcc"
          columns={columns2}
          pagination={false}
          dataSource={Data2} />
      </div>
    </>
  );
};

export default HCD;
