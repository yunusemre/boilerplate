import React from 'react';
import { Column } from '@ant-design/charts';

const HCD = ({ data }) => {
  const config = {
    forceFit: true,
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    color: ['#e1e1e1', '#b3b3b3', '#666'],
  };
  return (
    <>
      <div className="chart-wrapper">
        <h5 className="bold chart-title">Detection of HCC Cases</h5>
        <Column {...config} />
      </div>
    </>
  );
};

export default HCD;
