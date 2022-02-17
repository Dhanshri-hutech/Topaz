import React,{useState}from 'react';
import './superadminFnl.css';
import {
  Form,
  Input,
  // Select,
  Row,
  Col,
  Checkbox,
  Button,
} from 'antd';
//import Signup from './Components/Admin/Signup/Signup.js';
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



const SuperAdminFnl = () => {

    const [username, setUserName] = useState("");
  const [password, setPassward] = useState("");
  const [newdata, setNewData] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const allnewData = { username: username, passward: password };
    setNewData([...newdata, allnewData]);
    console.log(newdata);

  }

  const onFinish = (values) => {
    console.log('Success:', values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return <div className="container">
        <header className='page-header'></header>
        <main className='page-main'>

          <Row>
        <Col span={12}><div className="leftside-box">
          <p>"Amazing things will happen when you listen to the consumer"</p>
        </div></Col>

        <Col span={12}> <div className="rightside-box">
                <div className='heading'>
                    <h1>Topaz</h1>
                    <h3>Login to your account</h3></div>


                    <Form
        name="basic"
            labelCol={{ span: 24}}
            wrapperCol={{ span: 24}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onSubmit={handleOnSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        colon={false}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            type="text"
            name="log in"
            required="required"
            placeholder="Email or Phone number"
            value={username}
            onChange={e => setUserName(e.target.value)}
          >
          </Input>
          
        </Form.Item>


        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            type="text"
            name="passward"
            required="required"
            placeholder="Password"
            value={password}
            onChange={e => setPassward(e.target.value)}
          >
          </Input>
        </Form.Item>
        
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link className="login-form-forgot" to={'/Resetpassward'}>Forgot password</Link>
        {/* <a className="login-form-forgot" href="www.google.com">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button">
         Sign in
        </Button>
       
        {/* <a href={Signup}>Join Topaz</a> */}
        <div className= "accout-text">Don't have an account yet?  <Link to={'/Signup'}>Join Topaz</Link> </div>
      </Form.Item>
    </Form>
                <div className='form-footer'>
                <footer > ©2022 Topaz All rights reserved.Terms of service </footer>
               
                </div>
            </div></Col>



</Row>




        </main>
        <footer className='page-footer'> </footer>
    </div>;
};

export default SuperAdminFnl;
