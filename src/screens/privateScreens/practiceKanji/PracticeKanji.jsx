import React, { useEffect, useState } from "react";
import { Col, List, Typography } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { domainAPI } from "../../../configs/dev";
import { PracticeCard } from "./practiceCard/PracticeCard";

import { RowStyled } from "./styled";
const { Title } = Typography;
const PracticeKanjiScreen = () => {
  const [listPractice, setListPractice] = useState([]);

  const { t } = useTranslation();

  const getListPractice = async () => {
    const res = await axios.get(`${domainAPI}/write-kanji/practice-kanji`);
    if (res) {
      setListPractice(res.data);
    }
  };

  useEffect(() => {
    getListPractice();
  }, []);
  return (
    <RowStyled>
      <Col span={24}>
        <Title className="title">{t("writeKanji.list_write")}</Title>
      </Col>
      <Col span={24} className="col-list">
        <List
          itemLayout="horizontal"
          dataSource={listPractice}
          renderItem={(item) => (
            <List.Item>
              <PracticeCard
                id={item.id}
                level={item.level}
                name={item.namePractice}
              />
            </List.Item>
          )}
        />
      </Col>
    </RowStyled>
  );
};

export default PracticeKanjiScreen;
