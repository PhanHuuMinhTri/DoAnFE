import React, { useState } from "react";
import { useOutlet, Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const itemMenu = [
    {
      label: <Link to={"dashboard"}>HOME</Link>,
      key: "/dashboard",
    },
    {
      label: "TEST ONLINE",
      key: "/test-online",
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
      key: "/online",
      children: [
        {
          label: <Link to={"/course/n5"}>N5</Link>,
          key: "/online",
        },
        {
          label: <Link to={"/course/n4"}>N4</Link>,
          key: "/online",
        },
        {
          label: <Link to={"/course/n3"}>N3</Link>,
          key: "/online",
        },
        {
          label: <Link to={"/course/n2"}>N2</Link>,
          key: "/online",
        },
        {
          label: <Link to={"/course/n1"}>N1</Link>,
          key: "/online",
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

  const items = [
    {
      key: "1",
      label: <p>Profile</p>,
    },
    {
      key: "2",
      label: <p>Logout</p>,
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
            onClick={onClick}
            selectedKeys={[location.pathname]}
            mode="horizontal"
            items={itemMenu}
          />
        </Col>

        <Col span={4} className="col-auth">
          <Dropdown menu={{ items }} trigger={"hover"}>
            <Image
              preview={false}
              className="avatar"
              src={"https://img.freepik.com/free-icon/user_318-159711.jpg"}
            />
          </Dropdown>

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

export default PrivateLayout;
