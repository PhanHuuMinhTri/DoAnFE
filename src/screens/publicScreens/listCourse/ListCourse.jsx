import React from "react";
import { Col, Typography } from "antd";
import { useTranslation } from "react-i18next";

import ListCourseItem from "./listTest/ListCourseItem";
import { TestOnlineStyled } from "./styled";

const { Title } = Typography;

const ListCourseScreen = () => {
  const { t } = useTranslation();
  return (
    <TestOnlineStyled>
      <Col span={24} className="col-title">
        <Title className="title">{t("listCourse.list_course")}</Title>
      </Col>

      <Col span={10} offset={7} className="col-list">
        <ListCourseItem />
      </Col>
      <Col span={7} />
    </TestOnlineStyled>
  );
};

export default ListCourseScreen;
