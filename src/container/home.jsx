import React from 'react';
import { StackedColumn } from '@ant-design/charts';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const data = [
  {
    year: 'No Surveilliance',
    type: 'Incidental',
    value: 10,
  },
  {
    year: 'No Surveilliance',
    type: 'Incidental',
    value: 55,
  },
  {
    year: 'US+AFP Commercial',
    type: 'Symptomatic',
    value: 9,
  },
  {
    year: 'US+AFP Commercial',
    type: 'Symptomatic',
    value: 6,
  },
  {
    year: 'OncoGuard',
    type: 'Incidental',
    value: 12,
  },
  {
    year: 'OncoGuard',
    type: 'Incidental',
    value: 18,
  },
  {
    year: 'US+AFP Commercial',
    type: 'Symptomatic',
    value: 9,
  },
  {
    year: 'No Surveilliance',
    type: 'Surveillance',
    value: 4,
  },
  {
    year: 'OncoGuard',
    type: 'Surveillance',
    value: 5,
  },
  {
    year: 'No Surveilliance',
    type: 'Surveillance',
    value: 20,
  },
  {
    year: 'No Surveilliance',
    type: 'Incidental',
    value: 8,
  },
  {
    year: 'OncoGuard',
    type: 'Surveillance',
    value: 2,
  },
  {
    year: 'US+AFP Commercial',
    type: 'Incidental',
    value: 10,
  },
];
const hccConfig = {
  meta: {
    value: { alias: 'Proportion of HCC Cases Detected(%)' },
  },
  forceFit: true,
  data,
  stackField: 'type',
  color: ['#e1e1e1', '#b3b3b3', '#666'],
  padding: 'auto',
  xField: 'year',
  yField: 'value',
};

const HomePage = () => (
  <>
    <div className="side">filter</div>
    <div className="content-wrapper">
      <Tabs defaultActiveKey="1">
        <TabPane tab="HCC CASES DETECTED" key="1">
          <div className="chart-wrapper">
            <h5 className="bold chart-title">Detection of HCC Cases</h5>
            <StackedColumn {...hccConfig} />
          </div>
        </TabPane>
        <TabPane tab="CLINICAL OUTCOMES" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="SUMMARY TABLES" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
    <style jsx>
      {`
        .chart-wrapper{
          height: 350px;
          margin-bottom: 80px;
          .chart-title{
            margin-bottom: 20px;
          }
        }
      `}
    </style>
  </>
);

export default HomePage;
