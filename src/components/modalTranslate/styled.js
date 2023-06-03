import styled from "styled-components";
import { Modal, Input, Row } from "antd";

export const ModalStyled = styled(Modal)`
  .ant-modal-content {
    background-color: #d5ebff;
  }

  .ant-modal-title {
    background-color: #d5ebff;
  }

  .col-search {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      &:hover {
        background-color: aqua;
        border-radius: 5px;
      }
    }
  }

  .col-canvas {
    display: flex;
    align-items: center;
    justify-content: center;

    .canvas {
      width: 50%;

      .tool-bar {
        margin: 3px 0;
        display: flex;
        justify-content: flex-end;
      }
      .konvajs-content {
        width: 100%;
      }
    }
    .result {
      border: 1px solid #d9d9d9;
      height: 40px;
      display: flex;
      align-items: center;
      background-color: #ffffff;

      .item {
        cursor: pointer;
        width: 40px;
        text-align: center;
        line-height: 40px;
        border-right: 1px solid #d9d9d9;

        &:hover {
          background-color: #d9d9d9;
        }
      }
    }
  }
`;

export const InputStyled = styled(Input)`
  width: 50%;
  height: 50px;
  border-radius: 30px;
`;

export const ButtonTool = styled.button`
  width: 60px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`;

export const RowTranslateStyled = styled(Row)`
  margin-top: 20px;
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 100%;
    height: 40px;
    background-color: #1677ff;
  }

  .col-image {
    display: flex;
    justify-content: center;

    .box-image {
      width: 200px;
      background-color: #ffffff;
      height: 300px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
    }
  }

  .col-mean {
    .box-mean {
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      background-color: #ffffff;

      .mean {
        padding: 20px;
      }
    }
  }

  .col-info {
    padding: 0 20px;

    .box-write {
      border: 1px solid #d9d9d9;
      border-radius: 8px;
    }

    .box-vocabulary {
      background-color: #ffffff;
      margin-top: 20px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
    }
  }
`;
