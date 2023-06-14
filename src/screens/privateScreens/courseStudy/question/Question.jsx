import React, { useEffect, useState } from "react";
import { Form, Radio, Col, Row, Button, Spin, Typography, Table } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { domainAPI } from "../../../../configs/dev";
import { useFormik } from "formik";

import { QuestionStyled } from "./Question.styled";
const { Text } = Typography;
const Question = ({ courseId, questions, lessonId, getProgress }) => {
  const [listIsCorrect, setListIsCorrect] = useState([]);
  const [point, setPoint] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [listMyAnswer, setListMyAnswer] = useState([]);
  const { t } = useTranslation();

  const listQuesstion = questions.reduce((acc, option) => {
    const { idQuestion, question, isCorrect, ...rest } = option;

    if (!acc[idQuestion]) {
      acc[idQuestion] = {
        idQuestion,
        question,
        options: [],
      };
    }

    acc[idQuestion].options.push({
      idOption: option.idOption,
      optionText: option.optionText,
    });

    return acc;
  }, {});

  let listQuestionFix = Object.values(listQuesstion);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      handleSubmitQuestion(values);
    },
  });

  const handleSubmitQuestion = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${domainAPI}/question/${courseId}/submit-question/${lessonId}`,
        { values: values, userId: localStorage.getItem("idUser") }
      );
      setListIsCorrect(res?.data?.result);
      setPoint(res?.data?.point);
      setListMyAnswer(Object.values(res?.data?.values));
      listQuestionFix = [];
      await getProgress();
      setIsLoading(false);
    } catch (error) {
      console.log("err", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPoint(0);
    formik.resetForm();
    setListIsCorrect([]);
    setListMyAnswer([]);
  }, [lessonId]);

  const COLUMNS = [
    {
      title: "",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "50px",
    },
    {
      title: t("privateCourse.answer"),
      dataIndex: "optionText",
      key: "optionText",
    },
  ];

  return (
    <Spin spinning={isLoading}>
      <QuestionStyled>
        <Col span={18} className="col-question">
          <Form>
            {questions &&
              listQuestionFix?.map((question, index) => (
                <Row>
                  <Col span={24}>
                    <Text className="question">{`${index + 1}. ${
                      question?.question
                    }`}</Text>
                  </Col>
                  <Col span={24}>
                    <Form.Item key={question.idQuestion}>
                      <Radio.Group
                        name={question?.idQuestion}
                        onChange={formik.handleChange}
                        value={formik?.values[question?.idQuestion]}
                      >
                        <Row className="row-option">
                          {question?.options?.map((option) => {
                            return (
                              <Col
                                span={12}
                                xs={24}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                key={option?.idOption}
                                className="col-option"
                              >
                                <Radio
                                  key={option?.idOption}
                                  value={option?.idOption}
                                >
                                  {option?.optionText}
                                </Radio>
                              </Col>
                            );
                          })}
                        </Row>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
              ))}
          </Form>

          <Row>
            <Col className="col-btn" span={24}>
              <Button
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                {t("privateCourse.submit")}
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={6} className="col-result">
          {listIsCorrect?.length > 0 && (
            <div>
              <p className="title-result">
                {t("privateCourse.total_point")}: {point}/
                {listQuestionFix?.length || 0}
              </p>

              <Table
                columns={COLUMNS}
                pagination={false}
                dataSource={listIsCorrect.map((item, index) => ({
                  ...item,
                  id: index + 1,
                }))}
              />
            </div>
          )}
        </Col>
      </QuestionStyled>
    </Spin>
  );
};

export default Question;
