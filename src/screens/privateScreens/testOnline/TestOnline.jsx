import React from "react";
import { Col, Typography } from "antd";
import { useTranslation } from "react-i18next";

import ListTest from "./listTest/ListTest";
import { TestOnlineStyled } from "./styled";

const { Title } = Typography;

const TestOnlineScreen = () => {
  const { t } = useTranslation();
  return (
    <TestOnlineStyled>
      <Col span={24} className="col-title">
        <Title className="title">{t("testOnline.test_online")}</Title>
      </Col>

      <Col span={10} offset={7} className="col-list">
        <ListTest />
      </Col>
      <Col span={7} />
    </TestOnlineStyled>
  );
};

export default TestOnlineScreen;
