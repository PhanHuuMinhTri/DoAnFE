import styled from "styled-components";
import { Row, Button } from "antd";

export const WrapperRowStyled = styled(Row)`
  padding: 50px 100px;

  .title {
    text-align: center;
    font-size: 48px;
    background-color: #96d962;
    height: 100px;
    line-height: 100px;
  }

  .col-info {
    .ant-typography {
      font-size: 16px;
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      padding: 0 20px;
    }

    .img-info {
      border-radius: 20px;
    }
  }

  .col-teacher {
    .col-sdt,
    .col-name {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-typography {
      text-align: center;
      font-size: 16px;
    }

    .img-teacher {
      width: 300px;
      height: 400px;
      border-radius: 50%;
    }
  }

  .col-btn {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonStyled = styled(Button)`
  min-width: 150px;
  height: 45px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: #00ff00;
`;
