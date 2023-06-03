import styled from "styled-components";
import { Row, Menu } from "antd";

export const CourseStudyStyled = styled(Row)`
  padding-bottom: 20px;
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
    margin-bottom: 50px;
    background-color: #96d962;
  }

  .img-course {
    border-radius: 20px;
  }

  .col-study {
    padding-left: 20px;
  }
`;

export const MenuStyled = styled(Menu)`
  background-color: #f7fff0;
  border-radius: 10px;
  border: 2px dashed #96d962;
  font-size: 16px;
  font-weight: 500;

  .ant-menu-item-selected {
    background-color: #96d962;
    color: black;
  }
`;
