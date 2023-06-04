import styled from "styled-components";
import { Row } from "antd";

export const WrapperWriteKanjiStyled = styled(Row)`
  padding: 20px 100px;

  .title {
    text-align: center;
  }
  .col-canvas {
    display: flex;
    align-items: center;
  }

  .col-kanji {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .box-kanji {
      display: flex;
      justify-content: center;
      background-color: #96d962;
      padding: 10px;

      .kanji {
        font-size: 20px;
        font-weight: 500;
        width: 50px;
        text-align: center;
      }
    }
  }
`;
