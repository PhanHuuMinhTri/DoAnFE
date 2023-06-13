import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography, notification } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { domainAPI } from "../../../configs/dev";
import { Link, useNavigate } from "react-router-dom";

import { LoginStyled } from "./styled";

const { Title } = Typography;

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const onFinish = async (values) => {
    try {
      await axios.post(`${domainAPI}/auth/register`, { values });
      navigate("/login");

      notification.success({
        message: t("registerPage.sign_up_success"),
      });
    } catch (error) {
      console.log("error", error);
      notification.error({
        message: t("registerPage.user_already"),
      });
    }
  };

  const validateConfirmPassword = async (_, value) => {
    const password = form.getFieldValue("password");

    if (value && value !== password) {
      throw new Error(t("registerPage.password_confirm_math"));
    }
  };

  return (
    <LoginStyled>
      <Title>{t("registerPage.sign_up")}</Title>

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
              message: t("registerPage.please_input_account"),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t("registerPage.account")}
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: t("registerPage.please_input_username"),
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t("registerPage.user_name")}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t("registerPage.please_input_password"),
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={t("registerPage.password")}
          />
        </Form.Item>

        <Form.Item
          name="confirm-password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: t("registerPage.please_input_confirm_password"),
            },

            { validator: validateConfirmPassword },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={t("registerPage.confirm_password")}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t("registerPage.please_input_email"),
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="text"
            placeholder={t("registerPage.email")}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: t("registerPage.please_input_phone"),
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="text"
            placeholder={t("registerPage.phone")}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {t("registerPage.sign_up")}
          </Button>
          {t("registerPage.or")}{" "}
          <Link to={"/login"}>{t("registerPage.sign_in_now")}</Link>
        </Form.Item>
      </Form>
    </LoginStyled>
  );
};
export default RegisterScreen;
