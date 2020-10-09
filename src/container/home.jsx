import React from 'react';
import { Tabs } from 'antd';
import HCD from './HCD';
import ST from './ST';
import CO from './CO';

const { TabPane } = Tabs;
const HCDData = [
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

const HomePage = () => (
  <>
    <div className="side">filter</div>
    <div className="content-wrapper">
      <Tabs defaultActiveKey="1">
        <TabPane tab="HCC CASES DETECTED" key="1">
          <HCD data={HCDData} />
        </TabPane>
        <TabPane tab="CLINICAL OUTCOMES" key="2">
          <CO data={HCDData} />
        </TabPane>
        <TabPane tab="SUMMARY TABLES" key="3">
          <ST data={HCDData} />
        </TabPane>
      </Tabs>
    </div>
  </>
);

export default HomePage;
