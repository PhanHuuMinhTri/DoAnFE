import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Row,
  Col,
  Avatar,
  Typography,
  Form,
  notification,
  Upload,
  message,
  Spin,
} from "antd";
import { upload } from "../../../configs/firebase/firebase";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  KeyOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

import { domainAPI } from "../../../configs/dev";

import {
  ProfileStyled,
  StyledInput,
  ButtonStyled,
  TitleStyled,
  ButtonChangePasswordStyled,
} from "./styled";

import { ProfileContext } from "../../../layouts/public/PrivateLayout";

const { Title } = Typography;

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { profileLayout, handleSetProfile } = useContext(ProfileContext);

  const [form] = Form.useForm();

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);

  const onFinish = async (value) => {
    const res = await axios.post(
      `${domainAPI}/auth/profile/setting/${id}`,
      value
    );

    localStorage.setItem("name", res.data.Name);

    setProfile({
      ...profile,
      username: res.data.Name,
      email: res.data.EmailAddress,
      phone: res.data.Phone,
    });

    notification.success({
      message: t("profile.update_success"),
    });
  };

  const getProfile = async () => {
    const res = await axios.get(`${domainAPI}/auth/profile/${id}`);

    setProfile({
      username: res.data.Name,
      email: res.data.EmailAddress,
      phone: res.data.Phone,
    });

    setAvatar(res.data.Avatar);
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    form.setFieldsValue(profile);
  }, [form, profile]);

  const handleUpload = async (file) => {
    setLoading(true);
    try {
      const photoURL = await upload(file);

      const res = await axios.post(`${domainAPI}/auth/profile/setting/${id}`, {
        ...profile,
        avatar: photoURL,
      });

      setAvatar(res.data.Avatar);
      notification.success({
        message: t("profile.update_avatar_success"),
      });

      handleSetProfile({
        ...profileLayout,
        Avatar: res.data.Avatar,
      });
      setLoading(false);
    } catch (error) {
      console.error("Lỗi tải lên:", error);
      setLoading(false);
      message.error("error when update!");
    }
  };

  const renderForm = useMemo(() => {
    return (
      <Form
        form={form}
        name="login_form"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 800 }}
        initialValues={profile}
        onFinish={onFinish}
      >
        <Form.Item
          label={t("profile.user_name")}
          name="username"
          rules={[
            { required: true, message: t("profile.please_input_user_name") },
          ]}
        >
          <StyledInput
            prefix={<UserOutlined />}
            placeholder={t("profile.user_name")}
          />
        </Form.Item>

        <Form.Item
          label={t("profile.mail")}
          name="email"
          rules={[{ required: true, message: t("profile.please_input_email") }]}
        >
          <StyledInput
            prefix={<MailOutlined />}
            placeholder={t("profile.mail")}
          />
        </Form.Item>

        <Form.Item
          label={t("profile.phone")}
          name="phone"
          rules={[{ required: true, message: t("profile.please_input_phone") }]}
        >
          <StyledInput
            prefix={<PhoneOutlined />}
            placeholder={t("profile.phone")}
          />
        </Form.Item>

        <Form.Item className="field-btn">
          <ButtonStyled htmlType="submit">{t("profile.save")}</ButtonStyled>
        </Form.Item>
      </Form>
    );
  }, [profile]);

  return (
    <ProfileStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title">{t("profile.profile")}</Title>
        </Col>

        <Col span={6} className="col-avatar">
          <div className="field-avatar">
            <Spin spinning={loading}>
              <Avatar
                className="avatar"
                shape="square"
                src={avatar}
                size={200}
                icon={<UserOutlined />}
              />
            </Spin>

            <Upload
              listType="picture-circle"
              showUploadList={false}
              onPreview={() => false}
              accept="image/png, image/jpeg"
              beforeUpload={() => false}
              onChange={({ file }) => {
                if (file) {
                  handleUpload(file);
                }
              }}
            >
              <CameraOutlined />
            </Upload>
          </div>
        </Col>
        <Col span={14}>
          <div className="field-title">
            <TitleStyled>{t("profile.profile")}</TitleStyled>
          </div>
          {renderForm}
        </Col>

        <Col span={4} className="col-security">
          <div className="field-title">
            <TitleStyled>{t("profile.security")}</TitleStyled>
          </div>
          <ButtonChangePasswordStyled
            onClick={() => {
              navigate(`/profile/password/${id}`);
            }}
          >
            {t("profile.change_pass")}
            <KeyOutlined />
          </ButtonChangePasswordStyled>
        </Col>
      </Row>
    </ProfileStyled>
  );
};

export default Profile;
