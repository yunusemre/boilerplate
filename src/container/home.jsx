import React from 'react';
import { Tabs, Empty } from 'antd';
import HCD from './HCD';
import ST from './ST';
import CO from './CO';
import Filter from './filter';

const { TabPane } = Tabs;
const newArray = [];
const createData = () => {
  const dataArray = ['No Surveilliance', 'US+AFP Commercial', 'OncoGuard'];
  const dataType = ['Incidental', 'Symptomatic', 'Surveillance'];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    const obj = {
      year: dataArray[Math.floor(Math.random() * 3)],
      type: dataType[Math.floor(Math.random() * 3)],
      value: Math.floor(Math.random() * 100 + 1),
    };
    newArray.push(obj);
  }
};

createData();

const HomePage = () => (
  <>
    <div className="side">
      <Filter />
    </div>
    <div className="content-wrapper">
      <Tabs defaultActiveKey="1" onChange={createData}>
        <TabPane tab="HCC CASES DETECTED" key="1">
          <CO data={newArray} />
          <ST data={newArray} />
        </TabPane>
        <TabPane tab="CLINICAL OUTCOMES" key="2">
          {
            newArray.length > 0 ? <Empty description="Please provide inputs and hit ‘Calculate’ button to start simulator" />
              : <HCD data={newArray} />
          }
        </TabPane>
        <TabPane tab="SUMMARY TABLES" key="3">
          <ST data={newArray} />
        </TabPane>
      </Tabs>
    </div>
  </>
);

export default HomePage;
