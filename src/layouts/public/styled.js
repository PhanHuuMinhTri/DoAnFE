import styled from "styled-components";
import { Layout, Row, Button } from "antd";

export const PublicLayoutStyle = styled(Layout)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-image: url("https://dungmori.com/assets/img/new_home/x-o-bg.svg");

  .bottom-header {
    height: 1px;
    border: 1px solid #eaeaef;
  }

  .body-content {
    padding-top: 10px;
  }

  .footer {
    width: 100%;
    height: 200px;
    background-image: url("https://dungmori.com/assets/img/new_home/footer-bg.jpg");

    .col-info {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const HeaderStyled = styled(Row)`
  padding: 10px 200px;

  background-color: #5bbd2b;

  .col-logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  .col-menu {
    display: flex;
    align-items: center;
    justify-content: center;

    .ant-menu {
      width: 100%;
      color: #293142;
      font-family: "Noto-Sans-Japanese-Medium";
      display: flex;
      font-size: 20px;
      justify-content: center;
      background-color: transparent;
      border: none;

      .ant-menu-submenu {
        .ant-menu-sub {
          background-color: red;
        }
      }
    }
  }

  .col-auth {
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar {
      cursor: pointer;
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
  }
`;

export const LoginButtonStyled = styled(Button)`
  font-size: 20px;
  font-family: "Noto-Sans-Japanese-Medium";
  width: 120px;
  background-color: #33cc33;
  border: none;
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 2px solid #293142;
`;
export const RegisterButtonStyled = styled(Button)`
  font-family: "Noto-Sans-Japanese-Medium";
  font-size: 20px;
  width: 120px;
  height: 40px;
  border: none;
  background-color: #33cc33;
  margin-right: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
