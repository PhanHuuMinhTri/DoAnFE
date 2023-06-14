import React from "react";
import { Typography } from "antd";

import Cards from "./listCard/Cards";
import { useTranslation } from "react-i18next";

import { FlaskCardStyled } from "./FlaskCard.styled";

const { Title } = Typography;

const FlaskCard = ({ lessonInfo }) => {
  const { t } = useTranslation();
  return (
    <FlaskCardStyled>
      <Title className="title-flaskcard">
        {t("privateCourse.study_with_flash")}
      </Title>
      <Cards idLesson={lessonInfo?.idLesson} />
    </FlaskCardStyled>
  );
};

export default FlaskCard;
