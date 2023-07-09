import styled from "styled-components";
import { Row, Button } from "antd";

export const TestCardStyled = styled(Row)`
  margin-bottom: 40px;
  padding-left: 10px;
  border-left: 5px solid #96d962;
  display: flex;
  align-items: center;

  .col-title-card {
    margin-bottom: 20px;
    .title-card {
      font-size: 16px;
      font-weight: 500;
      .icon {
        margin-left: 20px;
      }
    }
  }

  .col-btn {
    display: flex;
    justify-content: flex-end;
  }

  .col-description {
    .ant-typography {
      font-weight: 400;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  color: #96d962;
  width: 150px;
  height: 35px;
  font-size: 16px;
  border: 2px solid #96d962;

  &.btn-left {
    margin-right: 10px;
  }

  &:hover {
    color: #96d962 !important;
    border: 2px solid #96d962 !important;
    background-color: #e5ffc8;
  }
`;
