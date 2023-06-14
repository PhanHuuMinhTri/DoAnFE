import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Image, Typography, Table, List, Spin } from "antd";
import { useTranslation } from "react-i18next";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

import { ModalStyled, InputStyled, RowTranslateStyled } from "./styled";

import DrawingBoard from "./canvas/Canvas";

const { Paragraph } = Typography;

const ModalTranslate = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const handleCancel = () => {
    setIsOpen(false);
  };

  const [showCanvas, setShowCanvas] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dataMazzi, setDataMazzi] = useState();

  const handleSearch = async () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${search}`,
      headers: {
        "X-RapidAPI-Key": "7735c1c38fmsh60ea14ac6f9fd18p1abb1ejsne83037eae0b6",
        "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
      },
    };

    const responseMazzi = await axios.get(
      `https://mazii.net/api/mazii/${search}/1`
    );

    if (responseMazzi.data.status === 302) {
      setDataMazzi(null);
    } else {
      setDataMazzi(responseMazzi.data.results[0]);
    }

    const reponseAlive = await axios.request(options);
    setData(reponseAlive.data);
    setIsLoading(false);
  };

  const exampleData = dataMazzi?.examples?.map((item, index) => ({
    stt: index,
    text: item.w,
    hira: item.p,
    hv: item.h,
    mean: item.m,
  }));

  const COLUMNS = [
    {
      title: "#",
      dataIndex: "stt",
      key: "#",
      width: 50,
    },
    {
      title: t("homePage.key"),
      dataIndex: "text",
      key: "text",
      width: 150,
    },
    {
      title: t("homePage.hiragana"),
      dataIndex: "hira",
      key: "hira",
      width: 150,
    },
    {
      title: t("homePage.kanji_vn"),
      dataIndex: "hv",
      key: "hv",
      width: 200,
    },
    {
      title: t("homePage.mean"),
      dataIndex: "mean",
      key: "mean",
    },
  ];

  return (
    <ModalStyled
      title={t("homePage.search_kanji")}
      open={isOpen}
      onCancel={handleCancel}
      width={"100%"}
      footer={null}
    >
      <Spin spinning={isLoading}>
        <Row>
          <Col span={24} className="col-search">
            <InputStyled
              allowClear
              value={search}
              placeholder={t("homePage.enter_here")}
              onChange={(value) => {
                setSearch(value.target.value);
              }}
              suffix={
                <>
                  <EditOutlined
                    className="icon"
                    onClick={() => {
                      setShowCanvas(!showCanvas);
                    }}
                    style={{ fontSize: 30, cursor: "pointer" }}
                  />
                  <SearchOutlined
                    onClick={() => handleSearch()}
                    className="icon"
                    style={{ fontSize: 30, cursor: "pointer" }}
                  />
                </>
              }
            />
          </Col>
        </Row>

        <Row>
          {showCanvas && (
            <Col span={24} className="col-canvas">
              <DrawingBoard setSearch={setSearch} search={search} />
            </Col>
          )}
        </Row>
        {data && dataMazzi && (
          <RowTranslateStyled>
            <Col span={6} className="col-image">
              <div className="box-image">
                <div className="title">{t("homePage.kanji")}</div>
                <div className="image">
                  <Image preview={false} src={data?.kanji?.video.poster} />
                  <p style={{ textAlign: "center" }}>{dataMazzi?.mean}</p>
                </div>
              </div>
            </Col>
            <Col span={12} className="col-mean">
              <div className="box-mean">
                <div className="title">{t("homePage.result")}</div>
                <div className="mean">
                  <Paragraph>
                    Bộ: {dataMazzi?.kanji} - {dataMazzi?.mean}
                  </Paragraph>
                  <Paragraph>訓: {dataMazzi?.kun}</Paragraph>
                  <Paragraph>音: {dataMazzi?.on}</Paragraph>
                  <Paragraph>Số nét: {dataMazzi?.stroke_count}</Paragraph>
                  <Paragraph>JLPT: {dataMazzi?.level}</Paragraph>
                  <Paragraph>
                    Bộ thành phần:
                    {dataMazzi?.compDetail?.map((item) => (
                      <span>
                        {" "}
                        {item?.w} - {item?.h}
                      </span>
                    ))}
                  </Paragraph>
                  <Paragraph>
                    {t("homePage.mean")}: {dataMazzi?.detail}
                  </Paragraph>
                </div>
                <Table columns={COLUMNS} dataSource={exampleData} />
              </div>
            </Col>
            <Col span={6} className="col-info">
              <div className="box-info">
                <div className="box-write">
                  <div className="title">{t("homePage.write")}</div>
                  <div>
                    <ReactPlayer
                      width="100%"
                      loop={true}
                      playing={true}
                      muted={true}
                      height="100%"
                      autoplay={true}
                      controls={true}
                      url={data?.kanji?.video?.mp4}
                    />
                  </div>
                </div>

                <div className="box-vocabulary">
                  <div className="title">
                    {t("homePage.vocabulary_related")}
                  </div>
                  <div>
                    <List
                      bordered
                      dataSource={data?.examples}
                      renderItem={(item) => (
                        <List.Item>
                          <Row>
                            <Col span={14}>
                              <p>{item?.japanese}</p>
                            </Col>

                            <Col span={10}>
                              <p>{item?.meaning.english}</p>
                            </Col>
                            <Col span={24}>
                              <AudioPlayer
                                src={item?.audio.mp3}
                                autoPlayAfterSrcChange={false}
                              />
                            </Col>
                          </Row>
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </RowTranslateStyled>
        )}
      </Spin>
    </ModalStyled>
  );
};

export default ModalTranslate;
