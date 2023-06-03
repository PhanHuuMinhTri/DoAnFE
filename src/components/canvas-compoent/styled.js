import styled from "styled-components";

export const CanvasStyled = styled.div`
  width: 50%;
  .tool-bar {
    margin: 3px 0;
    display: flex;
    justify-content: flex-end;
  }
  .konvajs-content {
    width: 100%;
  }
`;

export const ButtonTool = styled.button`
  font-size: 20px;
  padding: 10px 10px;
  margin-left: 10px;
  background-color: #66ff99;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  cursor: pointer;

  &.clear {
    background-color: #ff9966;
  }
  &:hover {
    background-color: #d9d9d9;
  }
`;
