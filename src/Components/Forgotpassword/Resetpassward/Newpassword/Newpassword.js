import React from 'react';
import './Newpassword.css';
import {
  Form,
  Input,
  // Select,
  Row,
  Col,
  //Checkbox,
  Button,
} from 'antd';
import { ArrowLeftOutlined} from '@ant-design/icons';
//const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );







  return <div className="container">
    <header className='page-header'></header>
    <main className='page-main'>
      <Row>
        <Col span={12}><div className="leftside-box">
          <p>"Amazing things will happen when you listen to the consumer"</p>
        </div></Col>


        <Col span={12}>
        <div className="rightside-box">
                <div className='heading'>
                    <h1>Set new password</h1>
                    <h3>Your new password must be different to previously
use passwords.</h3></div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 24}}
            wrapperCol={{ span: 24}}
            requiredMark={false}
           colon={false}
        
          >

{/* 
            <Form.Item
              name="name"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>



            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                // addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item> */}

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>






            {/* <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
              By creating an account you agree to the terms of use and our privacy policy  <a href="www.google.com">agreement</a>
              </Checkbox> */}
            {/* </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
          
        <Button  htmlType="submit" className="login-form-button">
        Reset Password
        </Button>
    

        <div className= "accout-text"><ArrowLeftOutlined /> <a href ="www.google.com">Back to log in</a></div>
      </Form.Item>
    </Form>
        

          <div className='form-footer'>
            <footer > ©2022 Topaz All rights reserved.Terms of service </footer>
          </div></div></Col>
      </Row>










    </main>
    <footer className='page-footer'> </footer>
  </div>;
};

export default Signup;
