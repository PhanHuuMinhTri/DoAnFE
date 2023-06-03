import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Menu, Image } from "antd";

import VideoStudy from "./videoStudy/VideoStudy";
import FlaskCard from "./flaskCard/FlaskCard";
import { TYPE_LESSON, TYPE_MENU } from "../../../constants/common";
import { domainAPI } from "../../../configs/dev";

import { CourseStudyStyled, MenuStyled } from "./styled";

const { Title } = Typography;

const CourseStudyScreen = () => {
  const [courseInfo, setCourseInfo] = useState("");
  const [listLesson, setListLesson] = useState([]);
  const [lessonInfo, setLessonInfo] = useState({});

  const [currentSelect, setCurrentSelect] = useState(null);

  const { id } = useParams();

  const getCourseInfo = async () => {
    try {
      const res = await axios.get(`${domainAPI}/course/${id}`);
      setCourseInfo(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getListLesson = async () => {
    try {
      const res = await axios.get(
        `${domainAPI}/lesson/course/${courseInfo?.idCourse}`
      );
      setListLesson(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getLessonInfo = async (id) => {
    try {
      const res = await axios.get(`${domainAPI}/lesson/${id}`);
      setLessonInfo(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getListLesson();
  }, [courseInfo]);

  useEffect(() => {
    getCourseInfo();
  }, []);

  const handleSeclect = async (item) => {
    console.log("items", item);
    if (item?.item?.props?.values?.type === TYPE_MENU.VIDEO) {
      setCurrentSelect({
        idLesson: item?.item?.props?.values?.idLesson,
        typeLesson: TYPE_MENU.VIDEO,
      });
      await getLessonInfo(item?.item?.props?.values?.idLesson);
    } else {
      setCurrentSelect({
        idLesson: item?.item?.props?.values?.idLesson,
        typeLesson: TYPE_MENU.FLASK_CARD,
      });
    }
  };

  const items = listLesson.map((item, index) => ({
    key: item?.idLesson,
    children:
      item?.type === TYPE_LESSON.GRAMMAR
        ? [
            {
              key: item?.videoUrl,
              label: `Video ngữ pháp bài ${item?.indexLesson}`,
              values: { idLesson: item?.idLesson, type: TYPE_MENU.VIDEO },
              isFlaskCard: false,
            },
          ]
        : [
            {
              key: item?.videoUrl,
              label: `Video từ vựng & kanji bài ${item?.indexLesson}`,
              values: { idLesson: item?.idLesson, type: TYPE_MENU.VIDEO },
              isFlaskCard: false,
            },
            {
              key: item?.videoUrl + `${index}`,
              label: `Flashcard bài  ${item?.indexLesson}`,
              values: {
                idLesson: item?.idLesson,
                type: TYPE_MENU.FLASK_CARD,
                isFlaskCard: true,
              },
            },
          ],
    label:
      item?.type === TYPE_LESSON.GRAMMAR
        ? `Ngữ pháp bài ${item?.indexLesson}`
        : item?.type === TYPE_LESSON.KANJI
        ? `Kanji bài ${item?.indexLesson}`
        : `Từ vựng bài ${item?.indexLesson}`,
    value: item?.idLesson,
  }));

  return (
    <CourseStudyStyled>
      <Col span={24}>
        <Title className="title">
          Khóa học {courseInfo?.nameCourse?.toUpperCase()}{" "}
        </Title>
      </Col>

      <Col span={18} className="col-study">
        {currentSelect ? (
          currentSelect?.typeLesson === TYPE_MENU.VIDEO ? (
            <>
              <Row>
                <Col span={24}>
                  <VideoStudy lessonInfo={lessonInfo} />
                </Col>

                <Col span={24}>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>

                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                  <div>Bai tap</div>
                </Col>
              </Row>
            </>
          ) : (
            <FlaskCard lessonInfo={currentSelect} />
          )
        ) : (
          <Image
            className="img-course"
            preview={false}
            src={courseInfo?.imageCourse}
          />
        )}
      </Col>

      <Col span={6}>
        <MenuStyled
          mode="inline"
          style={{
            width: 256,
          }}
          onSelect={(item) => {
            handleSeclect(item);
          }}
          items={items}
        />
      </Col>
    </CourseStudyStyled>
  );
};

export default CourseStudyScreen;
