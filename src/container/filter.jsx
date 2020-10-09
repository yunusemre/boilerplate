/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, Button, Slider, Collapse, Switch, Checkbox } from 'antd';

const { Panel } = Collapse;
const marks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
};

const Filter = () => {
  console.log('filter');
  return (
    <Form onFinish={(form) => console.log(form)} layout="vertical" name="filter">
      <Collapse defaultActiveKey={['1', '2']} ghost>
        <Panel header="POPULATION CHARACTERISTICS" key="1">
          <Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Commercial (%)</h6>
              <Form.Item name="field1">
                <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicare (%)</h6>
              <Form.Item name="field2">
                <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicaid (%)</h6>
              <Form.Item name="field3">
                <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
          </Form.Item>
        </Panel>
        <Panel header="DISEASE STAGE" key="2">
          <Form.Item className="switch-field">
            <small>Overall</small>
            <Form.Item name="field1">
              <Switch />
            </Form.Item>
            <small>Cirrhotic Only</small>
          </Form.Item>
        </Panel>
        <Panel header="COMPARATOR" key="3">
          <Form.Item name="field4" className="checkbox-field">
            <Checkbox.Group>
              <Checkbox value="No Surveillance">No Surveillance</Checkbox>
              <Checkbox value="Ultrasound">Ultrasound</Checkbox>
              <Checkbox value="Ultrasound + AFP">Ultrasound + AFP</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Panel>
        <Panel header="COSTS" key="4">
          empty
        </Panel>
        <Panel header="ADHERENCE SCENARIOS" key="5">
          <Form.Item className="switch-field">
            <small>Basecase</small>
            <Form.Item name="field6">
              <Switch />
            </Form.Item>
            <small>Perfect</small>
          </Form.Item>
        </Panel>
      </Collapse>
      <Form.Item>
        <Button htmlType="submit" className="mB20" type="primary">Calculate</Button>
      </Form.Item>
    </Form>
  );
};

export default Filter;
