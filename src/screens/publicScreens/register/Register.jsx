import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import axios from "axios";
import { domainAPI } from "../../../configs/dev";
import { Link, useNavigate } from "react-router-dom";

import { LoginStyled } from "./styled";

const { Title } = Typography;

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post(`${domainAPI}/auth/register`, { values });
      navigate("/login");

      notification.success({
        message: "Sign up success!",
      });
    } catch (error) {
      console.log("error", error);
      notification.error({
        message: "User already sign up!",
      });
    }
  };

  const validateConfirmPassword = async (_, value) => {
    const password = form.getFieldValue("password");

    if (value && value !== password) {
      throw new Error("Password and confirm password do not match");
    }
  };

  return (
    <LoginStyled>
      <Title>Sign Up</Title>

      <Form
        name="normal_login"
        className="login-form"
        form={form}
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
            placeholder="Account"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="User name"
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

        <Form.Item
          name="confirm-password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your Confirm password!",
            },

            { validator: validateConfirmPassword },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Phone number"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
          Or <Link to={"/register"}>Sign in now!</Link>
        </Form.Item>
      </Form>
    </LoginStyled>
  );
};
export default RegisterScreen;
