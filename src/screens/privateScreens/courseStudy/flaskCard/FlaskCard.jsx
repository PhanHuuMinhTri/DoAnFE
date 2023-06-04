import React from "react";
import { Typography } from "antd";

import Cards from "./listCard/Cards";

import { FlaskCardStyled } from "./FlaskCard.styled";

const { Title } = Typography;

const FlaskCard = ({ lessonInfo }) => {
  return (
    <FlaskCardStyled>
      <Title className="title-flaskcard">Cùng học với Flashcard nào!!!</Title>
      <Cards idLesson={lessonInfo?.idLesson} />
    </FlaskCardStyled>
  );
};

export default FlaskCard;
