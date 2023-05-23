import React from "react";
import { Row, Col, Image, Typography } from "antd";

import { CarouselStyled, HomeStyled } from "./styled";

import Carousel1 from "../../../assets/images/carousel-1.png";
import Carousel2 from "../../../assets/images/carousel-2.png";
import Carousel3 from "../../../assets/images/carousel-3.png";
import Carousel4 from "../../../assets/images/carousel-4.jpg";
const { Title } = Typography;
const HomeScreen = () => {
  return (
    <HomeStyled>
      <Col span={24} className="col-carousel">
        <CarouselStyled autoplay>
          <div>
            <Image preview={false} src={Carousel1} alt="carousel" />
          </div>
          <div>
            <Image preview={false} src={Carousel2} alt="carousel" />
          </div>
          <div>
            <Image preview={false} src={Carousel3} alt="carousel" />
          </div>
          <div>
            <Image preview={false} src={Carousel4} alt="carousel" />
          </div>
        </CarouselStyled>
      </Col>

      <Col span={24} className="col-course-info">
        <Title className="title" level={2}>
          プロダクト
        </Title>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={12}>LEFT</Col>
              <Col span={12}>RIGHT</Col>
            </Row>
            <Row>
              <Col span={12}>LEFT</Col>
              <Col span={12}>RIGHT</Col>
            </Row>
            <Row>
              <Col span={12}>LEFT</Col>
              <Col span={12}>RIGHT</Col>
            </Row>
            s
          </Col>
        </Row>
      </Col>
    </HomeStyled>
  );
};

export default HomeScreen;
