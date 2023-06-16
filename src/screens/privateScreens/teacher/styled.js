import styled from "styled-components";

import { Layout, List, Button } from "antd";

const { Content } = Layout;

export const TeacherStyled = styled(Content)`
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

export const ListStyled = styled(List)`
  .ant-list-item-extra {
    .ant-image {
      width: 200px;
      height: 200px;

      .ant-image-img {
        width: 200px;
        height: 200px;
      }
    }
  }

  .ant-list-item-meta-title {
    .ant-typography {
      font-size: 16px;
    }
  }

  .ant-list-item-meta-avatar {
    .ant-avatar {
      width: 100px;
      height: 100px;
    }
  }
  .title-course {
    margin-bottom: 10px;
  }

  .list-course {
    padding-left: 20px;
    display: flex;
  }
`;

export const ButtonStyled = styled(Button)`
  color: #96d962;
  width: 150px;
  height: 35px;
  font-size: 16px;
  border: 2px solid #96d962;
  margin-right: 10px;

  &:hover {
    color: #96d962 !important;
    border: 2px solid #96d962 !important;
    background-color: #e5ffc8;
  }
`;
