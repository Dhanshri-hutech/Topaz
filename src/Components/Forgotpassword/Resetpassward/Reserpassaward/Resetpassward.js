import React from 'react';
//import { ReactComponent as Key } from './key-solid.svg';
import './Resetpassward.css';
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



const Resetpassward = () => {

//     const [username, setUserName] = useState("");
//   const [password, setPassward] = useState("");
  //const [newdata, setNewData] = useState([]);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     const allnewData = { username: username, passward: password };
//     setNewData([...newdata, allnewData]);
//     console.log(newdata);

//   }

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
 <img  src='./key-solid.svg' alt='key' width='30px*30px' />
                    <h3>Forgot password</h3>
                    <p>No worries, we'll send you reset instructions.</p></div>


                    <Form
        name="basic"
        labelCol={{ span: 24}}
            wrapperCol={{ span: 24}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onSubmit={handleOnSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
        colon={false}
      >
         <Form.Item
        name="email id"
        label="E-mail ID"
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
      </Form.Item>

      {/* <Form.Item
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
        
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="www.google.com">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button  htmlType="submit" className="login-form-button">
        Reset Password
        </Button>
    

        <div className= "accout-text"><ArrowLeftOutlined /> <a href ="www.google.com">Back to log in</a></div>
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

export default Resetpassward;



