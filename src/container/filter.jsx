/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, Button, Slider, Collapse, Switch, Checkbox, InputNumber } from 'antd';

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
    <Form
      onFinish={(form) => console.log(form)}
      initialValues={{
        commercial: 30,
        medicare: 30,
        medicaid: 40,
        comparator: ['No Surveillance'],
        disease: false,
        'costs-oncoguard': 1000,
        'costs-resonance': 100,
        'costs-ultrasound': 1000,
        adherence: false }}
      layout="inline" name="filter">
      <Collapse defaultActiveKey={['1', '2']} ghost>
        <Panel header="POPULATION CHARACTERISTICS" key="1">
          <Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Commercial (%)</h6>
              <Form.Item name="commercial">
                <Slider dots step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicare (%)</h6>
              <Form.Item name="medicare">
                <Slider dots step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicaid (%)</h6>
              <Form.Item name="medicaid">
                <Slider dots step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
          </Form.Item>
        </Panel>
        <Panel header="DISEASE STAGE" key="2">
          <Form.Item className="switch-field">
            <small>Overall</small>
            <Form.Item name="disease">
              <Switch />
            </Form.Item>
            <small>Cirrhotic Only</small>
          </Form.Item>
        </Panel>
        <Panel header="COMPARATOR" key="3">
          <Form.Item name="comparator" className="checkbox-field">
            <Checkbox.Group>
              <Checkbox value="No Surveillance">No Surveillance</Checkbox>
              <Checkbox value="Ultrasound">Ultrasound</Checkbox>
              <Checkbox value="Ultrasound + AFP">Ultrasound + AFP</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Panel>
        <Panel header="COSTS" key="4">
          <Form.Item name="costs-oncoguard" label="OncoGuard" className="input-field mB10">
            <InputNumber
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
          </Form.Item>
          <Form.Item name="costs-resonance" label="M. Resonance Imaging" className="input-field mB10">
            <InputNumber
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
          </Form.Item>
          <Form.Item name="costs-ultrasound" label="Ultrasound" className="input-field mB10">
            <InputNumber
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')} />
          </Form.Item>
        </Panel>
        <Panel header="ADHERENCE SCENARIOS" key="5">
          <Form.Item className="switch-field">
            <small>Basecase</small>
            <Form.Item name="adherence">
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
