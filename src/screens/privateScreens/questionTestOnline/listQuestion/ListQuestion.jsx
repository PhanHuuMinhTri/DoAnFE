import React, { useEffect, useState } from "react";
import { Form, Radio, Col, Row, Button, Spin, Typography, Table } from "antd";
import axios from "axios";
import { domainAPI } from "../../../../configs/dev";
import { useFormik } from "formik";

import { QuestionStyled } from "./ListQuestion.styled";

const { Text } = Typography;

const ListQuestion = ({ questions, testId }) => {
  const [listIsCorrect, setListIsCorrect] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listMyAnswer, setListMyAnswer] = useState([]);
  const [myAnserwerInitial, setMyAnserwerInitial] = useState({});
  const [point, setPoint] = useState(0);

  const listQuesstion = questions.reduce((acc, option) => {
    const { idQuestion, questionText, isCorrect, ...rest } = option;

    if (!acc[idQuestion]) {
      acc[idQuestion] = {
        idQuestion,
        questionText,
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

  const initialValue = listMyAnswer.length > 0 ? myAnserwerInitial : {};

  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      console.log("values", values);
      handleSubmitQuestion(values);
    },
  });

  const handleSubmitQuestion = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${domainAPI}/test-online/${testId}/submit-question`,
        { values: values, userId: localStorage.getItem("idUser") }
      );

      setListIsCorrect(res?.data?.result);
      setPoint(res?.data?.point);
      setMyAnserwerInitial(res?.data?.values);
      setListMyAnswer(Object.values(res?.data?.values));
      listQuestionFix = [];
      setIsLoading(false);
    } catch (error) {
      console.log("err", error);
      setIsLoading(false);
    }
  };

  const COLUMNS = [
    {
      title: "Câu",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "50px",
    },
    {
      title: "Đáp án",
      dataIndex: "optionText",
      key: "optionText",
    },
  ];

  useEffect(() => {
    setListIsCorrect([]);
    setListMyAnswer([]);
  }, []);

  return (
    <Spin spinning={isLoading}>
      <QuestionStyled>
        <Col span={18} className="col-question">
          <Form>
            {questions &&
              listQuestionFix?.map((question, index) => (
                <Row>
                  <Col span={24}>
                    <Text className="question">{`Câu ${index + 1}: ${
                      question?.questionText
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
                Nộp bài
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={6} className="col-result">
          {listIsCorrect?.length > 0 && (
            <div>
              <p className="title-result">
                Tổng điểm: {point}/{listQuestionFix?.length || 0}
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

export default ListQuestion;
