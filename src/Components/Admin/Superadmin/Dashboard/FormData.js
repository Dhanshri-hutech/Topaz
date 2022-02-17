import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';


const FormData = () => {

  const [form] = Form.useForm();

  

 

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

 return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
     

      <Row>
      <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
  
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
  
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
  
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
  
        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            name= 'Manufacturer code' 
            label='Manufacturer code'
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
           Submit
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Cancel
          </Button>
          
        </Col>
      </Row>
      
    </Form>
    
  );
};


export default FormData;


