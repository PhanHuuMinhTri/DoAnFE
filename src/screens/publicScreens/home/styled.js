import styled from "styled-components";
import { Carousel, Row } from "antd";

export const HomeStyled = styled(Row)`
  color: #293142;
  .col-course-info {
    margin-top: 30px;
    padding: 10px 200px;

    .ant-typography {
      color: #293142;
    }

    .title {
      text-align: center;
      border-bottom: 2px dashed #eaeaef;
    }
  }
`;

export const CarouselStyled = styled(Carousel)`
  height: 400px;

  .ant-image {
    width: 100%;
    height: 400px;
    background-size: cover;
  }
`;
