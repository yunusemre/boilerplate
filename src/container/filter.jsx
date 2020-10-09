/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, Button, Slider } from 'antd';

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
      <Form.Item>
        <h4>Title</h4>
        <Form.Item>
          <h6 className="mB0">Title</h6>
          <Form.Item name="field1">
            <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <h6 className="mB0">Title</h6>
          <Form.Item name="field2">
            <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <h6 className="mB0">Title</h6>
          <Form.Item name="field3">
            <Slider dots width={400} step={5} marks={marks} defaultValue={0} />
          </Form.Item>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">Calculate</Button>
      </Form.Item>
    </Form>
  );
};

export default Filter;
