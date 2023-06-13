import styled from "styled-components";
import { Layout, Input, Button, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

export const ProfileStyled = styled(Content)`
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

  .ant-form-item-required {
    font-size: 16px;
    font-weight: 500;
  }

  .col-avatar {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-right: 20px;
    flex-direction: column;

    .field-avatar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .ant-upload-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

        .ant-upload {
          width: 50px;
          height: 50px;
        }
      }

      .avatar {
        border: 1px solid #96d962;
      }
    }
  }

  .col-security {
    border-left: 1px solid;
    padding-left: 10px;
  }

  .field-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledInput = styled(Input)`
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid;
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

export const TitleStyled = styled(Text)`
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonChangePasswordStyled = styled(Button)`
  margin-top: 10px;
`;
