import React, { useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

import ListQuestion from "./listQuestion/ListQuestion";
import { domainAPI } from "../../../configs/dev";

import { QuestionTestStyled } from "./styled";

const { Title } = Typography;

const QuestionTestOnlineScreen = () => {
  const { id } = useParams();

  const [listQuestion, setListQuestion] = useState([]);

  const handleGetListQuestion = async () => {
    const res = await axios.get(`${domainAPI}/test-online/question-test/${id}`);
    setListQuestion(res.data);
  };

  useEffect(() => {
    handleGetListQuestion();
  }, []);

  return (
    <QuestionTestStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title">BÀI TEST ONLINE</Title>
        </Col>

        <Col span={24}>
          <ListQuestion questions={listQuestion} testId={id} />
        </Col>
      </Row>
    </QuestionTestStyled>
  );
};

export default QuestionTestOnlineScreen;
