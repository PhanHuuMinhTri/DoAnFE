import React from "react";
import { Typography, Col } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { CardStyled, ButtonStyled } from "./practice-card.styled";

const { Text } = Typography;

export const PracticeCard = ({ id, level, name }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/write-kanji/${id}`);
  };
  return (
    <CardStyled title={`${t("writeKanji.title")} ${id}`}>
      <Col span={24}>
        <Typography>
          {t("writeKanji.level")}: {level}
        </Typography>
      </Col>
      <Col span={24} className="col-name">
        <Text>{name}</Text>
        <ButtonStyled onClick={handleClick}>
          {t("writeKanji.do_it")}
        </ButtonStyled>
      </Col>
    </CardStyled>
  );
};
