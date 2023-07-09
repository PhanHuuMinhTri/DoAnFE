import React from "react";
import { Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

import { TestCardStyled, ButtonStyled } from "./CardCourse.styled";

const { Text } = Typography;

const CardCourse = ({ item }) => {
  console.log("item", item);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <TestCardStyled>
      <Col span={24} className="col-title-card">
        <Text level={5} className="title-card">
          {t("listCourse.course")}: {item?.nameCourse}
        </Text>
      </Col>
      <Col span={10} className="col-description"></Col>

      <Col span={14} className="col-btn">
        <ButtonStyled
          className="btn-left"
          onClick={() => {
            navigate(`/course/public/${item?.nameCourse}`);
          }}
        >
          {t("listCourse.view_more")}
        </ButtonStyled>
      </Col>
    </TestCardStyled>
  );
};

export default CardCourse;
