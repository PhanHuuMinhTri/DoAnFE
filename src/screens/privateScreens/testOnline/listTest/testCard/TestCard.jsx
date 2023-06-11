import React from "react";
import { Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

import { TestCardStyled, ButtonStyled } from "./TestCard.styled";

const { Text } = Typography;

const TestCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <TestCardStyled>
      <Col span={24} className="col-title-card">
        <Text level={5} className="title-card">
          {item?.description}

          {item?.isDone && (
            <CheckCircleOutlined
              style={{ color: "#96d962", fontSize: 20 }}
              className="icon"
            />
          )}
        </Text>
      </Col>
      <Col span={10} className="col-description">
        <Text> {item?.nameTest}</Text>
      </Col>

      <Col span={14} className="col-btn">
        <ButtonStyled
          className="btn-left"
          onClick={() => {
            navigate(`/test-online/${item?.idLessonTest}`);
          }}
        >
          Làm bài
        </ButtonStyled>
        <ButtonStyled
          onClick={() => {
            navigate(`/test-online/rank/${item?.idLessonTest}`);
          }}
        >
          BXH
        </ButtonStyled>
      </Col>
    </TestCardStyled>
  );
};

export default TestCard;
