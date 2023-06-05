import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Image, Progress } from "antd";

import VideoStudy from "./videoStudy/VideoStudy";
import FlaskCard from "./flaskCard/FlaskCard";
import Question from "./question/Question";
import { TYPE_LESSON, TYPE_MENU } from "../../../constants/common";
import { domainAPI } from "../../../configs/dev";

import { CourseStudyStyled, MenuStyled } from "./styled";

const { Title, Text } = Typography;

const CourseStudyScreen = () => {
  const [courseInfo, setCourseInfo] = useState("");
  const [listLesson, setListLesson] = useState([]);
  const [lessonInfo, setLessonInfo] = useState({});
  const [listQuestion, setListQuestion] = useState([]);
  const [progress, setProgress] = useState(0);
  const [historyStudy, setHistoryStudy] = useState({});

  const { id } = useParams();

  const getHistoryStudy = async () => {
    const res = await axios.get(
      `${domainAPI}/history/${courseInfo?.idCourse}/${
        lessonInfo?.idLesson
      }/${localStorage.getItem("idUser")}`
    );

    if (res.data.length > 0) {
      setHistoryStudy(res.data[0]);
    } else {
      setHistoryStudy({});
    }
  };

  useEffect(() => {
    if (lessonInfo) {
      getHistoryStudy();
    }
  }, [lessonInfo]);

  const getProgress = async () => {
    const res = await axios.get(
      `${domainAPI}/progress/${courseInfo?.idCourse}/${localStorage.getItem(
        "idUser"
      )}`
    );

    if (res.data.length > 0) {
      setProgress(res.data[0].progress);
    }
  };

  const [currentSelect, setCurrentSelect] = useState(null);

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
      await setLessonInfo(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getListQuestionByLesson = async (id) => {
    try {
      const res = await axios.get(`${domainAPI}/question/lesson/${id}`);
      await setListQuestion(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (courseInfo) {
      getListLesson();
      getProgress();
    }
  }, [courseInfo]);

  useEffect(() => {
    getCourseInfo();
  }, []);

  const handleSeclect = async (item) => {
    if (item?.item?.props?.values?.type === TYPE_MENU.VIDEO) {
      setCurrentSelect({
        idLesson: item?.item?.props?.values?.idLesson,
        typeLesson: TYPE_MENU.VIDEO,
      });
      await getLessonInfo(item?.item?.props?.values?.idLesson);
      await getListQuestionByLesson(item?.item?.props?.values?.idLesson);
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

      <Col span={24} className="col-history">
        <Text className="text-history">
          {historyStudy?.idLesson ? "Bạn đã hoàn thành bài học này!" : ""}
        </Text>
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
                  <Title level={4}>
                    Bài tập bài {lessonInfo?.indexLesson}:
                  </Title>
                </Col>
                <Col span={24}>
                  <Question
                    courseId={courseInfo.idCourse}
                    lessonId={lessonInfo.idLesson}
                    questions={listQuestion}
                    getProgress={getProgress}
                  />
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

      <Col span={6} className="col-right">
        <div className="box-progress">
          <Title className="title-progress">
            Tiến độ: {Math.floor(progress * 100)}%
          </Title>
          {progress > 0 && (
            <Progress
              strokeColor="#96d962"
              status="active"
              strokeWidth={17}
              type="dashboard"
              percent={progress * 100}
              format={(percen) => `${Math.floor(progress * 100)}%`}
            />
          )}
        </div>

        <MenuStyled
          mode="inline"
          style={{
            width: "100%",
            borderRight: "2px dashed #96d962",
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
