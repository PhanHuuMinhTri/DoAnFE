import React from "react";
import { useTranslation } from "react-i18next";
import { KEY_MENU_PUBLIC } from "../../constants/common";
import { useOutlet, Link, useNavigate, useLocation } from "react-router-dom";
import { Layout, Col, Image, Menu, Select, Row, Typography } from "antd";

import {
  PublicLayoutStyle,
  HeaderStyled,
  LoginButtonStyled,
  RegisterButtonStyled,
} from "./styled";

import LOGO from "../../assets/logo.png";

const { Content } = Layout;

const PublicLayout = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = (value) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
  };
  const getKeyByPath = () => {
    const listKey = Object.values(KEY_MENU_PUBLIC);
    const listPath = location.pathname.split("/");
    const removeNullPath = listPath.filter((item) => item);

    if (removeNullPath.length === 0) {
      return "home";
    }

    const findIndex = listKey.findIndex((item) => item === removeNullPath[0]);
    console.log("findIndex", findIndex);
    if (findIndex >= 0) {
      return listKey[findIndex];
    } else return "";
  };

  const outlet = useOutlet();
  const navigate = useNavigate();

  const items = [
    {
      label: <Link to={"/"}> {t("homePage.home")}</Link>,
      key: "home",
    },
    {
      label: <Link to={"/test-online"}>{t("homePage.test_online")}</Link>,
      key: "test-online",
    },
    {
      label: t("homePage.online"),
      key: "course",
      children: [
        {
          label: <Link to={"/course/public/n5"}>N5</Link>,
          key: "course-n5",
        },
        {
          label: <Link to={"/course/public/n4"}>N4</Link>,
          key: "course-n4",
        },
        {
          label: <Link to={"/course/public/n3"}>N3</Link>,
          key: "course-n3",
        },
        {
          label: <Link to={"/course/public/n2"}>N2</Link>,
          key: "course-n2",
        },
        {
          label: <Link to={"/course/public/n1"}>N1</Link>,
          key: "course-n1",
        },
      ],
    },
    {
      label: (
        <Link to={"list-course-public"}>{t("dashboard.list_course")}</Link>
      ),
      key: "list-course-public",
    },
    {
      label: <Link to={"/teacher/public"}>{t("homePage.teacher")}</Link>,
      key: "teacher",
    },
  ];

  const itemSelect = [
    {
      label: "VI",
      value: "en",
    },
    {
      label: "JP",
      value: "jp",
    },
  ];

  return (
    <PublicLayoutStyle>
      <HeaderStyled>
        <Col span={1} className="col-logo">
          <Image preview={false} className="logo" src={LOGO} alt="logo" />
        </Col>
        <Col span={17} className="col-menu">
          <Menu selectedKeys={getKeyByPath()} mode="horizontal" items={items} />
        </Col>

        <Col span={6} className="col-auth">
          <LoginButtonStyled
            onClick={() => {
              navigate("/login");
            }}
          >
            {t("homePage.login")}
          </LoginButtonStyled>
          <RegisterButtonStyled
            onClick={() => {
              navigate("/register");
            }}
          >
            {t("homePage.register")}
          </RegisterButtonStyled>
          <Select
            onChange={handleLanguageChange}
            options={itemSelect}
            style={{ width: 70 }}
            defaultValue={localStorage.getItem("language")}
          />
        </Col>
      </HeaderStyled>
      <div className="bottom-header" />
      <Content className="body-content">{outlet}</Content>
      <Row className="footer">
        <Col span={20} />
        <Col span={4} className="col-info">
          <Typography>Phan Huu Minh Tri</Typography>
          <Typography>102190341</Typography>
        </Col>
      </Row>
    </PublicLayoutStyle>
  );
};

export default PublicLayout;
