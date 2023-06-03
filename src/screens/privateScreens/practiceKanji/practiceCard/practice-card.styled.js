import styled from "styled-components";
import { Card, Button } from "antd";

export const CardStyled = styled(Card)`
  width: 500px;
  height: 150px;
  background-color: #00ffcc;

  .ant-card-head {
    background-color: #ffccff;
  }

  .ant-typography {
    font-size: 20px;
    font-weight: 400;
  }

  .col-name {
    display: flex;
    justify-content: space-between;
  }
`;
export const ButtonStyled = styled(Button)`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
