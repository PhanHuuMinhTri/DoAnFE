import styled from "styled-components";
import { Layout, Button } from "antd";

const { Content } = Layout;

export const ChangePasswordStyled = styled(Content)`
  .col-title {
    margin-bottom: 50px;
    .title {
      background-color: #96d962;
      text-align: center;
      font-size: 48px;
      line-height: 100px;
      height: 100px;
    }
  }

  .col-form {
    .ant-form-item-label {
      font-size: 16px;
      font-weight: 500;
    }

    .ant-input-affix-wrapper {
      height: 40px;
    }

    .field-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  color: #ffffff;
  width: 150px;
  height: 40px;
  background-color: #96d962;
  font-size: 20px;
  border: 2px solid #96d962;

  &:hover {
    color: #96d962 !important;
    border: 2px solid #96d962 !important;
    background-color: #e5ffc8;
  }
`;
