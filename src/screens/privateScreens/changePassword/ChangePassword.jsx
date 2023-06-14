import React from "react";
import { Row, Col, Typography, Form, Input, notification } from "antd";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { domainAPI } from "../../../configs/dev";

import { ChangePasswordStyled, ButtonStyled } from "./styled";

const { Title } = Typography;

const ChangePassword = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = async (value) => {
    await axios.post(`${domainAPI}/auth/password/${id}`, value);
    form.resetFields();
    notification.success({
      message: t("profile.update_success"),
    });
  };
  return (
    <ChangePasswordStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title">{t("profile.change_pass")}</Title>
        </Col>

        <Col span={12} offset={6} className="col-form">
          <div className="form">
            <Form
              form={form}
              name="change-pass"
              onFinish={onFinish}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              style={{ maxWidth: 700 }}
              layout="vertical"
            >
              <Form.Item
                name="password"
                label={t("profile.password")}
                rules={[
                  {
                    required: true,
                    message: t("profile.please_input_password"),
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label={t("profile.confirm_password")}
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: t("profile.please_input_password"),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t("profile.password_confirm_math"))
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item className="field-btn">
                <ButtonStyled htmlType="submit">
                  {t("profile.save")}
                </ButtonStyled>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={6} />
      </Row>
    </ChangePasswordStyled>
  );
};

export default ChangePassword;
