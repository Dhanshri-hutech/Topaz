import React,{useState} from 'react';
import './Signup.css';
import {
  Form,
  Input,
  // Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
//import SuperAdminFnl from '../Superadmin/SuperAdminFnl';
import { Link } from "react-router-dom";
// const { Option } = Select;

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };


const Signup = () => {


  const [form] = Form.useForm();
  
 
  const [name, setName] = useState("");
  const[phonenumber,setPhonenumber] = useState("");
  const[email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirm,setConfirm] = useState("");

  const [newdata, setNewData] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const allnewData = {
       name:name,
      phonenumber:phonenumber,
      email:email, 
      passward: password,
      confirm:confirm};
    setNewData([...newdata, allnewData]);
    console.log(newdata);

  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
              <h1>Topaz</h1>
              <h3>Sign Up</h3></div>
            <Form
              // {...formItemLayout}
              form={form}
              name="register"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onSubmit={handleOnSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              requiredMark={false}
              colon={false}>




              <Form.Item
                name="name"
                label="Your Name"
                placeholder="Enter a your name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name"
                  },
                  { whitespace: true },
                  { min: 3 },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  required="required"
                autocapitalize="on"
                value={name}
              onChange={e=>setName(e.target.value)}
                 
                ></Input>
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
                hasFeedback
              >
                <Input
                  type="tel"
                  id="phone"
                  required="required"
                  placeholder="Enter an phonenumber"
                  value={phonenumber}
                  onChange={e=>setPhonenumber(e.target.value)}
                ></Input>
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },

                ]}
                hasFeedback
              >
                <Input
                  type="email"
                  required="required"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                ></Input>
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  { min: 8 },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Enter your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}

                />
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
                <Input.Password 
                placeholder="Confirm your password" 
                value={confirm}
                onChange={e=>setConfirm(e.target.value)}

                />
              </Form.Item>






              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() :
                       Promise.reject(new Error('To proceed you need to accept agreement!')),
                  },
                ]}
              // {...tailFormItemLayout}
              >
                <Checkbox>
                  By creating an account you agree to the terms of use and our privacy policy  <a href="www.google.com">agreement</a>
                </Checkbox>
              </Form.Item>
              {/* <Form.Item {...tailFormItemLayout}> */}
              <Form.Item>
                <Button htmlType="submit" className="login-form-button">
                  Create Account
                </Button>

                {/* <a href={SuperAdminFnl}>Log in</a> */}
                <div className="accout-text">Already have an account? <Link to={'/SuperAdminFnl'}>Log in?</Link></div>
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
