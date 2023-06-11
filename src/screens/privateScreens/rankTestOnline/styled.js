import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const ContentStyled = styled(Content)`
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

  .ant-table-content {
    padding: 0px 20px;
    .ant-image {
      width: 50px;
      height: 50px;
    }
  }
`;
