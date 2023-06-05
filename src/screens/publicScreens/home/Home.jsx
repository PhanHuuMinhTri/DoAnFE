import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { CarouselStyled, HomeStyled } from "./styled";

import Carousel1 from "../../../assets/images/carousel-1.png";
import Carousel2 from "../../../assets/images/carousel-2.png";
import Carousel3 from "../../../assets/images/carousel-3.png";
import Carousel4 from "../../../assets/images/carousel-4.jpg";
import StudyOnline from "../../../assets/images/study-online.jpg";
import StudyOffline from "../../../assets/images/study-offline.jpg";
import DuHoc from "../../../assets/images/du-hoc-nhat.jpg";

const { Title } = Typography;

const HomeScreen = () => {
  const { t } = useTranslation();

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
          プロダクト {t("homePage.test")}
        </Title>
        <Row>
          <Col span={24}>
            <Row className="row-info">
              <Col span={11}>
                <Title level={2}>Japanese Online</Title>

                <Title level={4}>
                  Học online qua video bài giảng, hệ thống bài test
                </Title>

                <Typography>
                  Với lộ trình được cá nhân hóa và hệ thống bài giảng lên tới
                  hàng nghìn video/bài test, khóa học cam kết cung cấp đầy đủ
                  kiến thức theo từng level khác nhau.
                </Typography>
                <div className="list-link">
                  <Link to={"/course/n5"}>N5</Link>
                  <Link to={"/course/n4"}>N4</Link>
                  <Link to={"/course/n3"}>N3</Link>
                  <Link to={"/course/n2"}>N2</Link>
                  <Link to={"/course/n1"}>N1</Link>
                </div>
              </Col>
              <Col span={1} />
              <Col span={12}>
                <Image preview={false} src={StudyOnline} alt="study-online" />
              </Col>
            </Row>

            <Row className="row-info">
              <Col span={12}>
                <Image preview={false} src={StudyOffline} alt="study-offline" />
              </Col>
              <Col span={1} />
              <Col span={11}>
                <Title level={2}>Japanese OFFLINE</Title>

                <Title level={4}>
                  Học trực tiếp cùng Giảng viên Việt Nam và Giảng viên Nhật Bản
                  giàu kinh nghiệm
                </Title>

                <Typography>
                  Lớp học trực tiếp tại Trung tâm Dũng Mori cơ sở Hà Nội, cam
                  kết đầu ra đảm bảo thi đỗ JLPT sau khi hoàn thành khóa học
                </Typography>

                <div className="list-link list-link-second">
                  <Link>N5</Link>
                  <Link>N4</Link>
                  <Link>N3</Link>
                  <Link>N2</Link>
                  <Link>N1</Link>
                </div>
              </Col>
            </Row>

            <Row className="row-info">
              <Col span={11}>
                <Title level={2}>Du học Nhật Bản</Title>

                <Title level={4}>
                  Học online qua video bài giảng, hệ thống bài test
                </Title>

                <Typography>
                  Với lộ trình được cá nhân hóa và hệ thống bài giảng lên tới
                  hàng nghìn video/bài test, khóa học cam kết cung cấp đầy đủ
                  kiến thức theo từng level khác nhau.
                </Typography>
              </Col>
              <Col span={1} />
              <Col span={12}>
                <Image preview={false} src={DuHoc} alt="study-online" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </HomeStyled>
  );
};

export default HomeScreen;
