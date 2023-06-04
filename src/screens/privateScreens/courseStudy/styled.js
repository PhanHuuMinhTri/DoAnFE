import styled from "styled-components";
import { Row, Menu } from "antd";

export const CourseStudyStyled = styled(Row)`
  padding-bottom: 20px;
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
    background-color: #96d962;
  }

  .img-course {
    border-radius: 20px;
  }

  .col-history {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;

    .text-history {
      font-style: italic;
      color: #00ff00;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .col-study {
    padding-left: 20px;
  }

  .col-right {
    padding-right: 20px;
    .box-progress {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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
