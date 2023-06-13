import React, { useEffect, useState, createContext } from "react";
import { useTranslation } from "react-i18next";
import { useOutlet, Link, useNavigate, useLocation } from "react-router-dom";
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
import axios from "axios";
import { domainAPI } from "../../configs/dev";
import { KEY_MENU_PRIVATE } from "../../constants/common";

import { PublicLayoutStyle, HeaderStyled, MenuItem } from "./styled";

import LOGO from "../../assets/logo.png";

const { Content } = Layout;

export const ProfileContext = createContext();

const PrivateLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const [profile, setProfile] = useState();

  const location = useLocation();

  const { t, i18n } = useTranslation();

  const getKeyByPath = () => {
    const listKey = Object.values(KEY_MENU_PRIVATE);
    const listPath = location.pathname.split("/");
    const removeNullPath = listPath.filter((item) => item);

    const findIndex = listKey.findIndex((item) => item === removeNullPath[0]);

    if (findIndex >= 0) {
      return listKey[findIndex];
    } else return "";
  };

  const handleSetProfile = (value) => {
    setProfile(value);
  };

  const handleLanguageChange = (value) => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
  };

  const getProfile = async () => {
    const res = await axios.get(
      `${domainAPI}/auth/profile/${localStorage.getItem("idUser")}`
    );

    setProfile(res.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const itemMenu = [
    {
      label: <Link to={"dashboard"}>HOME</Link>,
      key: "dashboard",
    },
    {
      label: <Link to={"test-online"}>TEST ONLINE</Link>,
      key: "test-online",
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
      key: "write-kanji",
    },
    {
      label: <Link to={"teacher"}>TEACHER</Link>,
      key: "teacher",
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
      label: "VI",
      value: "en",
    },
    {
      label: "JP",
      value: "jp",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <div
          className="menu-item"
          onClick={() => {
            navigate(`/profile/${localStorage.getItem("idUser")}`);
          }}
        >
          <MenuItem>Profile</MenuItem>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="menu-item" onClick={handleLogout}>
          <MenuItem>Logout</MenuItem>
        </div>
      ),
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
            selectedKeys={getKeyByPath()}
          />
        </Col>

        <Col span={4} className="col-auth">
          <div className="profile">
            <Dropdown menu={{ items }} trigger={"click"}>
              <Image preview={false} className="avatar" src={profile?.Avatar} />
            </Dropdown>
          </div>

          <Select
            onChange={handleLanguageChange}
            options={itemSelect}
            style={{ width: 70 }}
            defaultValue={localStorage.getItem("language")}
          />
        </Col>
      </HeaderStyled>
      <div className="bottom-header" />
      <Content className="body-content">
        <ProfileContext.Provider
          value={{ profileLayout: profile, handleSetProfile: handleSetProfile }}
        >
          {outlet}
        </ProfileContext.Provider>
      </Content>
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
