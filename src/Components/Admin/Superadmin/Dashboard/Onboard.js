
import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
import { Layout } from 'antd';
import './Onboard.css'
const { Header,Content, Footer,Sider} = Layout;




const Onboard = () => {
 const [form] = Form.useForm();





  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };




  return (
    <div className='Container'>
      <Sider className='Sider'>left sidebar</Sider> 
      <Layout>
       <Header className='Header'></Header>
        <div className='Header-heading'>
          <h1>Topaz</h1>
        </div>
       
         
          <div className="site-layout-content">

          <p>Home / Onboard Manufactures </p>

            
            <Layout>
           
              <Content className='main'>


              <h3>Onboard Manufacturer &nbsp;&nbsp; View Manufacturers</h3>
              <hr/>
                <p><span>1.</span> Manufacturers Details&nbsp;----------------<span>2.</span>Additional Details</p>
                <hr />
                <p>Manufactures Details</p>
                <hr />


                <Form
                  form={form}
                  name="advanced_search"
                  className="ant-advanced-search-form"
                  labelCol={{ span: 12 }}
                  autoComplete="off"
                  requiredMark={false}
                  colon={false}
                  wrapperCol={{ span: 12 }}
                  onFinish={onFinish}
                >


                  <Row>
                    <Col span={8}>
                      <Form.Item
                        name='Manufacturer code '
                        label='Manufacturer code '
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
                        name='Manufacturer name'
                        label='Manufacturer name'
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
                        name='Industry type'
                        label='Industry type'
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
                        name='Address line'
                        label='Address line'
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
                        name='City'
                        label='City'
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
                        name='State'
                        label='State'
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
                        name='Country'
                        label='Country'
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
                        name='Zip Code'
                        label='Zip Code'
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
                        name='Contact Person'
                        label='Contact Person'
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
                        name='User role'
                        label='User role'
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
                        name='Phone number'
                        label='Phone number'
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
                        name='Email ID'
                        label='Email ID'
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
                      <hr />
                      <Button type="primary" htmlType="submit">
                        Save
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
                      <hr />
                      <Button type="primary" htmlType="submit" >
                        Continue
                      </Button>

                    </Col>
                  </Row>




                </Form> 

              </Content>
              {/* <Sider className='Sider'>right sidebar</Sider> */}
            </Layout>

          </div>
          <Footer className='layout-footer'>© 2022 Topaz. All rights reserved. Terms of Service</Footer>
  
      </Layout>

    </div>
  )
}

export default Onboard
