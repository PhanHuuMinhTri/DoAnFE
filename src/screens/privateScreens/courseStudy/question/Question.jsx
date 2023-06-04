import React, { useEffect, useState } from "react";
import { Form, Radio, Col, Row, Button, Spin } from "antd";
import axios from "axios";
import { domainAPI } from "../../../../configs/dev";
import { useFormik } from "formik";

import { QuestionStyled } from "./Question.styled";

const Question = ({ courseId, questions, lessonId, getProgress }) => {
  const [listIsCorrect, setListIsCorrect] = useState([]);
  const [point, setPoint] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [listMyAnswer, setListMyAnswer] = useState([]);

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

  const getOptionById = (idOption) => {
    const indexOption = questions.findIndex(
      (item) => item?.idOption === idOption
    );

    return questions[indexOption]?.optionText;
  };

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
      formik.resetForm();
      listQuestionFix = [];
      getProgress();
      setIsLoading(false);
    } catch (error) {
      console.log("err", error);
      setIsLoading(false);
    }
  };

  console.log("value formil", formik.values);
  useEffect(() => {
    setPoint(0);
    setListIsCorrect([]);
    setListMyAnswer([]);
  }, [lessonId]);

  return (
    <Spin spinning={isLoading}>
      <QuestionStyled>
        <Col span={24} className="col-result">
          {listIsCorrect?.length > 0 && (
            <div>
              <p className="title-result">
                Tổng điểm: {point}/{listQuestionFix?.length || 0}
              </p>
              <p className="title-result">Đáp án đã chọn:</p>
              <div>
                <div className="table-result">
                  {listMyAnswer.map((item, index) => (
                    <p key={index} className="result">
                      {getOptionById(item)}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="title-result">Kết quả:</p>
                <div className="table-result">
                  {listIsCorrect.map((item, index) => (
                    <p key={index} className="result">
                      {item?.optionText}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col span={20} offset={4} className="col-question">
          <Form>
            {questions &&
              listQuestionFix?.map((question, index) => (
                <Form.Item
                  key={question.idQuestion}
                  label={`Câu ${index + 1}: ${question?.question}`}
                >
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
              ))}
          </Form>

          <Row>
            <Col className="col-btn" span={24}>
              <Button
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Nộp bài
              </Button>
            </Col>
          </Row>
        </Col>
      </QuestionStyled>
    </Spin>
  );
};

export default Question;
