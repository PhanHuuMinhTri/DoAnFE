import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useOutlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  Layout,
  Col,
  Image,
  Menu,
  Select,
  Row,
  Typography,
  Dropdown,
} from "antd";

import { PublicLayoutStyle, HeaderStyled } from "./styled";

import LOGO from "../../assets/logo.png";

const { Content } = Layout;

const PrivateLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const itemMenu = [
    {
      label: <Link to={"dashboard"}>HOME</Link>,
      key: "dashboard",
    },
    {
      label: "TEST ONLINE",
      key: "/test-online",
      children: [
        {
          label: <Link to={"/test-online/n5"}>N5</Link>,
          key: "test-online-n5",
        },
        {
          label: <Link to={"/test-online/n4"}>N4</Link>,
          key: "test-online-n4",
        },
        {
          label: <Link to={"/test-online/n3"}>N3</Link>,
          key: "test-online-n3",
        },
        {
          label: <Link to={"/test-online/n2"}>N2</Link>,
          key: "test-online-n2",
        },
        {
          label: <Link to={"/test-online/n1"}>N1</Link>,
          key: "test-online-n1",
        },
      ],
    },
    {
      label: "ONLINE",
      key: "course",
      children: [
        {
          label: <Link to={"/course/n5"}>N5</Link>,
          key: "/online-n5",
        },
        {
          label: <Link to={"/course/n4"}>N4</Link>,
          key: "/online-4",
        },
        {
          label: <Link to={"/course/n3"}>N3</Link>,
          key: "/online-n3",
        },
        {
          label: <Link to={"/course/n2"}>N2</Link>,
          key: "/online-n2",
        },
        {
          label: <Link to={"/course/n1"}>N1</Link>,
          key: "/online-n1",
        },
      ],
    },
    {
      label: <Link to={"write-kanji"}>WRITE KANJI</Link>,
      key: "/write-kanji",
    },
    {
      label: <Link to={"teacher"}>TEACHER</Link>,
      key: "/teacher",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("idUser");
    localStorage.removeItem("name");
    navigate("/login");
  };

  const itemSelect = [
    {
      label: "EN",
      value: "EN",
    },
    {
      label: "VI",
      value: "vi",
    },
  ];

  const items = [
    {
      key: "1",
      label: <p>Profile</p>,
    },
    {
      key: "2",
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  return (
    <PublicLayoutStyle>
      <HeaderStyled>
        <Col span={1} className="col-logo">
          <Image preview={false} className="logo" src={LOGO} alt="logo" />
        </Col>
        <Col span={19} className="col-menu">
          <Menu
            mode="horizontal"
            items={itemMenu}
            defaultSelectedKeys={"dashboard"}
          />
        </Col>

        <Col span={4} className="col-auth">
          <div className="profile">
            <Dropdown menu={{ items }} trigger={"hover"}>
              <Image
                preview={false}
                className="avatar"
                src={"https://img.freepik.com/free-icon/user_318-159711.jpg"}
              />
            </Dropdown>
            <p className="name">Hello {localStorage.getItem("name")}</p>
          </div>

          <Select
            onChange={handleLanguageChange}
            options={itemSelect}
            style={{ width: 70 }}
            defaultValue={"EN"}
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

export default PrivateLayout;
