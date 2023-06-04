import styled from "styled-components";
import { Row } from "antd";

export const QuestionStyled = styled(Row)`
  height: 100%;

  .col-result {
    .title-result {
      font-size: 16px;
      font-weight: 500;
    }

    .table-result {
      display: flex;

      .result {
        min-width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
      }
    }
  }
  .col-question {
    .ant-form-item-row {
      display: flex;
      flex-direction: column;
    }

    .ant-radio-group {
      width: 100%;
    }

    .ant-form-item-label {
      font-size: 16px;
      font-weight: 500;
      text-align: start;
      margin-bottom: 10px;
      margin-top: 20px;
    }

    .col-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;

      .ant-btn {
        width: 150px;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        background-color: #96d962;
      }
    }

    .row-option {
      margin-left: 20px;
    }
  }
`;
