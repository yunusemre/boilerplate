/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Form, Button, Slider, Collapse, Checkbox, InputNumber, Radio } from 'antd';
import { DownloadOutlined, FileOutlined } from '@ant-design/icons';

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
  const [total, setTotal] = useState(0);

  const submitForm = (form) => {
    const totalValue = form.population.commercial + form.population.medicare + form.population.medicaid === 100;
    if (!totalValue) {
      setTotal(true);
    } else {
      setTotal(false);
    }
  };

  return (
    <Form
      onFinish={(form) => submitForm(form)}
      initialValues={{
        comparator: [],
        disease: 'Overall',
        'costs-oncoguard': 1000,
        'costs-resonance': 100,
        'costs-ultrasound': 1000,
        adherence: 'Basecase' }}
      name="filter">
      <Collapse defaultActiveKey={['1', '3']} ghost>
        <Panel header="POPULATION CHARACTERISTICS" key="1">
          <Form.Item>
            {total ? <small className="bold total-message">Sum of 'Population Characteristics' should be 100%</small> : ''}
            <Form.Item>
              <h6 className="mB0 bold">Commercial (%)</h6>
              <Form.Item name={['population', 'commercial']}>
                <Slider
                  dots step={5}
                  marks={marks}
                  value={[0, 80]}
                  defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicare (%)</h6>
              <Form.Item name={['population', 'medicare']}>
                <Slider dots step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <h6 className="mB0 bold">Medicaid (%)</h6>
              <Form.Item name={['population', 'medicaid']}>
                <Slider dots step={5} marks={marks} defaultValue={0} />
              </Form.Item>
            </Form.Item>
          </Form.Item>
        </Panel>
        <Panel header="COMPARATOR" key="3">
          <Form.Item
            name="comparator" className="checkbox-field"
            rules={[{ required: true, message: 'This field is required' }]}>
            <Checkbox.Group>
              <Checkbox value="No Surveillance">No Surveillance</Checkbox>
              <Checkbox value="Ultrasound">Ultrasound</Checkbox>
              <Checkbox value="Ultrasound + AFP">Ultrasound + AFP</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Panel>
        <Panel header="DISEASE STAGE" key="2">
          <Form.Item name="disease" className="radio-field">
            <Radio.Group>
              <Radio value="Overall">Overall</Radio>
              <Radio value="Cirrhotic Only">Cirrhotic Only</Radio>
            </Radio.Group>
          </Form.Item>
        </Panel>
        <Panel header="COSTS" key="4">
          <Collapse defaultActiveKey={['8']} className="collapse-in-collapse">
            <Panel header="Commercial" key="8">
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
            <Panel header="Medicare" key="9">
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
          </Collapse>
        </Panel>
        <Panel header="ADHERENCE SCENARIOS" key="5">
          <Form.Item name="adherence">
            <Radio.Group>
              <Radio value="Basecase">Basecase</Radio>
              <Radio value="Perfect">Perfect</Radio>
            </Radio.Group>
          </Form.Item>
        </Panel>
      </Collapse>
      <Form.Item>
        <Button htmlType="submit" className="mB20" type="primary">Calculate</Button>
        <Button className="other-buttons" icon={<DownloadOutlined />} />
        <Button className="other-buttons" icon={<FileOutlined />} />
      </Form.Item>
    </Form>
  );
};

export default Filter;
