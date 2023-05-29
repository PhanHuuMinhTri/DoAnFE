import styled from "styled-components";
import { Modal, Input } from "antd";
import { Stage, Rect } from "react-konva";

export const ModalStyled = styled(Modal)`
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

export const StageWrapper = styled(Stage)`
  width: 100%;
`;

export const RectWrapper = styled(Rect)`
  width: 100%;
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
