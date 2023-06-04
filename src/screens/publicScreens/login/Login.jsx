import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography, notification } from "antd";
import axios from "axios";
import { domainAPI } from "../../../configs/dev";
import { Link, useNavigate } from "react-router-dom";

import { LoginStyled } from "./styled";

const { Title } = Typography;

const LoginScreen = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await axios.post(`${domainAPI}/auth/login`, { values });
      localStorage.setItem("isLogin", true);
      localStorage.setItem("idUser", res.data.idUser);
      localStorage.setItem("name", res.data.name);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      notification.error({
        message: "User or password invalid!",
      });
    }
  };
  return (
    <LoginStyled>
      <Title>Sign In</Title>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="account"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form-forgot" href="">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign In
          </Button>
          Or <Link to={"/register"}>Sign up now!</Link>
        </Form.Item>
      </Form>
    </LoginStyled>
  );
};
export default LoginScreen;
