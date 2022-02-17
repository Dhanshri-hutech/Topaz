
import './Resetmsg.css';
import {
  Form,
  //Input,
  // Select,
  Row,
  Col,
  Result,
  Button,
} from 'antd';
// const { Option } = Select;
import { ArrowLeftOutlined} from '@ant-design/icons';

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


const Resetmsg = () => {
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
                    <h1>Passward Reset</h1>
                    {/* <h3>Create Password</h3> */}
                    {/* <p>"Your password has been sucessfully reset.
Click bleow to login magically."</p> */}
                    </div>
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


<Result
    status="success"
    title="Your password has been sucessfully reset.
Click bleow to login magically."
    // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
    //   <Button type="primary" key="console">
    //     Go Console
    //   </Button>,
    //   <Button key="buy">Buy Again</Button>,
    ]}
  />,






        
            <Form.Item {...tailFormItemLayout}>
          
        <Button  htmlType="submit" className="login-form-button">
     Continue
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

export default Resetmsg;

