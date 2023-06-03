import React from "react";
import { Row, Col, Typography } from "antd";

import { CardStyled } from "./styled";

const { Text } = Typography;

const ResultCard = ({ index, kanji, percent }) => {
  return (
    <CardStyled title={`Top ${index}`}>
      <Row>
        <Col span={16}>
          <Text>{kanji}</Text>
        </Col>
        <Col span={8}>
          <Text>{~~percent}%</Text>
        </Col>
      </Row>
    </CardStyled>
  );
};
export default ResultCard;
