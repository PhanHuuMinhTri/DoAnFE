import React from "react";
import { Row, Col, Typography, Form, Input, notification } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { domainAPI } from "../../../configs/dev";

import { ChangePasswordStyled, ButtonStyled } from "./styled";

const { Title } = Typography;

const ChangePassword = () => {
  const { id } = useParams();

  const [form] = Form.useForm();

  const onFinish = async (value) => {
    await axios.post(`${domainAPI}/auth/password/${id}`, value);
    form.resetFields();
    notification.success({
      message: "Change password success!",
    });
  };
  return (
    <ChangePasswordStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title"> CHANGE PASSWORD</Title>
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
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item className="field-btn">
                <ButtonStyled htmlType="submit">Change</ButtonStyled>
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
