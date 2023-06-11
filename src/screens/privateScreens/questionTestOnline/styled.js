import styled from "styled-components";

import { Layout } from "antd";

const { Content } = Layout;

export const QuestionTestStyled = styled(Content)`
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
`;
