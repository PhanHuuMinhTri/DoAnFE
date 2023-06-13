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
          {t("homePage.product")}
        </Title>
        <Row>
          <Col span={24}>
            <Row className="row-info">
              <Col span={11}>
                <Title level={2}> {t("homePage.japanese_online")}</Title>

                <Title level={4}>{t("homePage.japanese_online_title")}</Title>

                <Typography>
                  {t("homePage.japanese_online_description")}
                </Typography>
                <div className="list-link">
                  {localStorage.getItem("isLogin") ? (
                    <>
                      <Link to={"/course/n5"}>N5</Link>
                      <Link to={"/course/n4"}>N4</Link>
                      <Link to={"/course/n3"}>N3</Link>
                      <Link to={"/course/n2"}>N2</Link>
                      <Link to={"/course/n1"}>N1</Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/course/public/n5"}>N5</Link>
                      <Link to={"/course/public/n4"}>N4</Link>
                      <Link to={"/course/public/n3"}>N3</Link>
                      <Link to={"/course/public/n2"}>N2</Link>
                      <Link to={"/course/public/n1"}>N1</Link>
                    </>
                  )}
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
                <Title level={2}>{t("homePage.japanese_offline")}</Title>

                <Title level={4}>{t("homePage.japanese_offline_title")}</Title>

                <Typography>
                  {t("homePage.japanese_offline_description")}
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
                <Title level={2}> {t("homePage.go_to_japan")}</Title>

                <Title level={4}>{t("homePage.go_to_japan_title")}</Title>

                <Typography>{t("homePage.go_to_japan_description")}</Typography>
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
