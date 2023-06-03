import React, { useEffect, useState } from "react";
import { Col, List, Typography } from "antd";
import axios from "axios";

import { domainAPI } from "../../../configs/dev";
import { PracticeCard } from "./practiceCard/PracticeCard";

import { RowStyled } from "./styled";
const { Title } = Typography;
const PracticeKanjiScreen = () => {
  const [listPractice, setListPractice] = useState([]);

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
        <Title className="title">DANH SÁCH BÀI TẬP LUYỆN VIẾT KANJI</Title>
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
