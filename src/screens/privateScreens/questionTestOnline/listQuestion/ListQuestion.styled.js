import styled from "styled-components";
import { Row } from "antd";

export const QuestionStyled = styled(Row)`
  height: 100%;

  padding-left: 100px;

  .col-result {
    padding-right: 20px;

    .ant-table-thead {
      tr > th {
        background-color: #96d962;
        text-align: center;
      }
    }

    .ant-table-tbody {
      tr > td {
        background-color: #dfdfdf;
      }
    }

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
    .question {
      font-size: 16px;
      font-weight: 500;
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
      margin: 30px 0px;

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

      .col-option {
        margin-bottom: 20px;
      }
    }
  }
`;
