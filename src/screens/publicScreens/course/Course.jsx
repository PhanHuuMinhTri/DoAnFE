import React, { useEffect, useState } from "react";
import { Col, Typography, Image, Row } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { domainAPI } from "../../../configs/dev";

import { WrapperRowStyled, ButtonStyled } from "./styled";

const { Title, Text } = Typography;

const Course = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const navigate = useNavigate();

  const [infoCourse, setInfoCourse] = useState(null);

  const getCourseInfo = async () => {
    const data = await axios.get(`${domainAPI}/course/${type}`);
    setInfoCourse(data.data);
  };

  const handleStudy = () => {
    if (localStorage.getItem("isLogin")) {
      navigate(`/course/${type}/study`);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getCourseInfo();
  }, [type]);

  return (
    <WrapperRowStyled gutter={[48, 48]}>
      <Col span={24}>
        <Title className="title">
          {t("coursePublic.course")}
          {infoCourse?.nameCourse.toUpperCase()}
        </Title>
      </Col>
      <Col span={24} className="col-btn">
        <ButtonStyled
          onClick={() => {
            handleStudy();
          }}
        >
          {localStorage.getItem("isLogin")
            ? t("coursePublic.study_now")
            : t("coursePublic.login_to_study")}
          <ArrowRightOutlined />
        </ButtonStyled>
      </Col>
      <Col span={18} className="col-info">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Text className="description">{infoCourse?.description}</Text>
          </Col>

          <Col span={24}>
            <Text>
              <strong> {t("coursePublic.numbers")}</strong>
              {infoCourse?.numberLession}
            </Text>
          </Col>

          <Col span={24}>
            <Text>
              <strong>{t("coursePublic.number_test")}</strong>{" "}
              {infoCourse?.numberTest}
            </Text>
          </Col>
          <Col span={24}>
            <Image
              className="img-info"
              src={infoCourse?.imageCourse}
              preview={false}
            />
          </Col>
        </Row>
      </Col>
      <Col span={6} className="col-teacher">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Text className="col-name">
              <strong>{t("coursePublic.teacher")} </strong> {infoCourse?.name}
            </Text>
          </Col>
          <Col span={24}>
            <Image
              className="img-teacher"
              preview={false}
              src={infoCourse?.avatar}
            />
          </Col>
          <Col span={24} className="col-sdt">
            <Text>
              <strong>{t("coursePublic.phone")} </strong> {infoCourse?.phone}
            </Text>
          </Col>
        </Row>
      </Col>
    </WrapperRowStyled>
  );
};

export default Course;
