import React, { useState, useEffect } from "react";
import { Col, Typography, notification } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import { domainAPI } from "../../../configs/dev";
import Canvas from "../../../components/canvas-compoent/Canvas";
import ResultCard from "./resultCard/ResultCard";

import { WrapperWriteKanjiStyled } from "./styled";

const { Title } = Typography;

const WriteKanjiScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initailResult = [
    { kanji: "", probability: "" },
    { kanji: "", probability: "" },
    { kanji: "", probability: "" },
    { kanji: "", probability: "" },
    { kanji: "", probability: "" },
  ];

  const [result, setResult] = useState(initailResult);

  const [listKanji, setListKanji] = useState([]);
  const getListKanji = async () => {
    const res = await axios.get(
      `${domainAPI}/write-kanji/practice-kanji/${id}`
    );
    if (res) {
      setListKanji(res.data);
    }
  };

  const handleOnSubmit = (kanji) => {
    const findIndex = listKanji.findIndex((item) => item.kanji === kanji);
    if (findIndex >= 0) {
      setResult(initailResult);

      const newList = listKanji.filter((item) => item.kanji !== kanji);
      setListKanji(newList);

      if (newList.length > 0) {
        notification.success({
          message: "Đáp án chính xác!",
        });
      }

      if (newList.length === 0) {
        notification.success({
          message: "Bạn đã hoàn thành bài tập!",
        });

        navigate("/write-kanji");
      }
    } else {
      notification.warning({
        message: "Đáp án chưa chính xác!",
      });
    }
  };

  useEffect(() => {
    getListKanji();
  }, []);

  return (
    <WrapperWriteKanjiStyled>
      <Col span={24}>
        <Title className="title">LUYỆN VIẾT KANJI</Title>
      </Col>

      <Col span={24} className="col-kanji">
        <div className="box-kanji">
          {listKanji?.map((item) => (
            <p className="kanji">{item.kanji}</p>
          ))}
        </div>
      </Col>

      <Col span={16} className="col-canvas">
        <Canvas setResult={setResult} />
      </Col>

      <Col span={8}>
        {result?.map((item, index) => {
          return (
            <div
              onClick={() => {
                if (item?.kanji) {
                  handleOnSubmit(item?.kanji);
                }
              }}
            >
              <ResultCard
                index={index + 1}
                kanji={item.kanji}
                percent={item.probability * 100}
              />
            </div>
          );
        })}
      </Col>
    </WrapperWriteKanjiStyled>
  );
};

export default WriteKanjiScreen;
