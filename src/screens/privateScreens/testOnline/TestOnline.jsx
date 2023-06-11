import React from "react";
import { Col, Typography } from "antd";

import ListTest from "./listTest/ListTest";
import { TestOnlineStyled } from "./styled";

const { Title } = Typography;

const TestOnlineScreen = () => {
  return (
    <TestOnlineStyled>
      <Col span={24} className="col-title">
        <Title className="title">TEST ONLINE</Title>
      </Col>

      <Col span={10} offset={7} className="col-list">
        <ListTest />
      </Col>
      <Col span={7} />
    </TestOnlineStyled>
  );
};

export default TestOnlineScreen;
