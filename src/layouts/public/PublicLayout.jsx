import React, { useState } from "react";
import { useOutlet, Link } from "react-router-dom";
import { Layout, Col, Image, Menu, Select, Row, Typography } from "antd";

import {
  PublicLayoutStyle,
  HeaderStyled,
  LoginButtonStyled,
  RegisterButtonStyled,
} from "./styled";

import LOGO from "../../assets/logo.png";

const { Content } = Layout;

export const PublicLayout = () => {
  const outlet = useOutlet();

  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to={"/"}>HOME</Link>,
      key: "home",
    },
    {
      label: "TEST ONLINE",
      key: "test-online",
      children: [
        {
          label: "N5",
          key: "test-online-n5",
        },
        {
          label: "N4",
          key: "test-online-n4",
        },
        {
          label: "N3",
          key: "test-online-n3",
        },
        {
          label: "N2",
          key: "test-online-n2",
        },
        {
          label: "N1",
          key: "test-online-n1",
        },
      ],
    },
    {
      label: "ONLINE",
      key: "online",
      children: [
        {
          label: "N5",
          key: "online-n5",
        },
        {
          label: "N4",
          key: "online-n4",
        },
        {
          label: "N3",
          key: "online-n3",
        },
        {
          label: "N2",
          key: "online-n2",
        },
        {
          label: "N1",
          key: "online-n1",
        },
      ],
    },
    {
      label: <Link to={"offline"}>OFFLINE</Link>,
      key: "offline",
    },
    {
      label: <Link to={"teacher"}>TEACHER</Link>,
      key: "teacher",
    },
  ];

  const itemSelect = [
    {
      label: "EN",
      value: "EN",
    },
    {
      label: "JP",
      value: "JP",
    },
  ];

  return (
    <PublicLayoutStyle>
      <HeaderStyled>
        <Col span={1} className="col-logo">
          <Image preview={false} className="logo" src={LOGO} alt="logo" />
        </Col>
        <Col span={17} className="col-menu">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>

        <Col span={6} className="col-auth">
          <LoginButtonStyled>Login</LoginButtonStyled>
          <RegisterButtonStyled>Register</RegisterButtonStyled>
          <Select
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
