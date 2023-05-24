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

    .row-info {
      margin-bottom: 20px;
      .ant-image-img {
        border-radius: 20px;
        height: 300px;
      }

      .list-link {
        margin-top: 20px;

        &.list-link-second {
          a {
            background-color: #00ffff;
          }
        }
        a {
          display: inline-block;
          color: #293142;
          margin-right: 5px;
          text-align: center;
          border-radius: 8px;
          line-height: 30px;
          background-color: #7fff00;
          width: 50px;
          height: 30px;
        }
      }
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
