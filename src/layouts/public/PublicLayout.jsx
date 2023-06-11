import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const outlet = useOutlet();
  const navigate = useNavigate();

  const items = [
    {
      label: <Link to={"/"}>HOME</Link>,
      key: "home",
    },
    {
      label: <Link to={"/test-online"}>TEST ONLINE</Link>,
      key: "test-online",
    },
    {
      label: "ONLINE",
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
      label: <Link to={"/public/teacher"}>TEACHER</Link>,
      key: "teacher",
    },
  ];

  const itemSelect = [
    {
      label: "EN",
      value: "en",
    },
    {
      label: "VI",
      value: "vi",
    },
  ];

  return (
    <PublicLayoutStyle>
      <HeaderStyled>
        <Col span={1} className="col-logo">
          <Image preview={false} className="logo" src={LOGO} alt="logo" />
        </Col>
        <Col span={17} className="col-menu">
          <Menu defaultSelectedKeys={"home"} mode="horizontal" items={items} />
        </Col>

        <Col span={6} className="col-auth">
          <LoginButtonStyled
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </LoginButtonStyled>
          <RegisterButtonStyled
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </RegisterButtonStyled>
          <Select
            onChange={handleLanguageChange}
            options={itemSelect}
            style={{ width: 70 }}
            defaultValue={"en"}
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
