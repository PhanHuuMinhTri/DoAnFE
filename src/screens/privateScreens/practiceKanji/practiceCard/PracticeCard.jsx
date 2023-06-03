import React from "react";
import { Typography, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { CardStyled, ButtonStyled } from "./practice-card.styled";

const { Text } = Typography;

export const PracticeCard = ({ id, level, name }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/write-kanji/${id}`);
  };
  return (
    <CardStyled title={`Bài luyện viết ${id}`}>
      <Col span={24}>
        <Typography>Level: {level}</Typography>
      </Col>
      <Col span={24} className="col-name">
        <Text>{name}</Text>
        <ButtonStyled onClick={handleClick}>Làm thôi</ButtonStyled>
      </Col>
    </CardStyled>
  );
};
