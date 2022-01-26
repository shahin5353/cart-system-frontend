import React, { useEffect } from "react";
import { message, Form, Input, Button } from "antd";
import LockOutlined from "@ant-design/icons/LockOutlined";
import MailOutlined from "@ant-design/icons/MailOutlined";
import { withRouter } from "react-router-dom";
import '../components/components.css';
import { useDispatch, useSelector } from "react-redux";
import UserAction from "../../stores/user/UserAction";
import ReqGetUserDetails from "../../stores/user/request/ReqGetUserDetails";
import { selectRequesting } from "../../stores/special/requesting/RequestingSelector";
import { selectFinished } from "../../stores/special/finished/FinishedSelector";
import Footer from "../components/navigation/Footer";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const isRequestingLogin = useSelector((state) =>
    selectRequesting(state, [UserAction.REQUEST_GET_USER_DETAILS])
  );
  const isFinishedLogin = useSelector((state) =>
    selectFinished(state, UserAction.REQUEST_GET_USER_DETAILS)
  );
  useEffect(()=>{
    isFinishedLogin &&
    message.success(`Login Successful`);
  },[isFinishedLogin])
  const onFinish = (values) => {
    dispatch(UserAction._requestGetUserDetails(new ReqGetUserDetails(values)));
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="centered-block">
          <h2>Cart System</h2>
        </div>
        <Form onFinish={onFinish} validateTrigger={"onBlur"}>
          <h4 style={{textAlign:'center'}}>Enter your credentials to login</h4>
          <Form.Item
            name={"email"}
            rules={[
              { type: "email", message: "Please enter valid email" },
              { required: true, message: "Please enter your email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder=" Email"
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder=" Password"
            />
          </Form.Item>
          <Form.Item className="signIn-block">
            <Button type="primary" htmlType="submit" loading={isRequestingLogin}>
              Login
            </Button>
          </Form.Item>
        </Form>
      <Footer/>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
