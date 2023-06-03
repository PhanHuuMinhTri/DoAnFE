import styled from "styled-components";
import { Card } from "antd";

export const CardStyled = styled(Card)`
  margin-bottom: 10px;
  background-color: #00ffcc;
  cursor: pointer;

  .ant-card-head {
    background-color: #ffccff;
  }

  .ant-typography {
    font-size: 20px;
    font-weight: 500;
  }

  &:hover {
    background-color: #00ff00;
  }
`;
