import React, { useEffect, useState } from "react";
import { Col, Button, Typography, Image } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

import { domainAPI } from "../../../configs/dev";

import { WrapperRowStyled } from "./styled";

const { Title, Text } = Typography;

const Course = () => {
  const { type } = useParams();

  const [infoCourse, setInfoCourse] = useState(null);
  console.log("infoCourse", infoCourse);

  const getCourseInfo = async () => {
    const data = await axios.get(`${domainAPI}/course/${type}`);
    setInfoCourse(data.data);
  };

  useEffect(() => {
    getCourseInfo();
  }, [type]);

  return (
    <WrapperRowStyled>
      <Col span={24}>
        <Title>Khóa học: {infoCourse?.nameCourse.toUpperCase()}</Title>
      </Col>
      <Col span={24}>
        <Text>{infoCourse?.description}</Text>
      </Col>
      <Col span={24}>
        <Image src={infoCourse?.imageCourse} />
      </Col>
      <Col span={24}>
        <Text>Số lượng: {infoCourse?.numberLession} bài</Text>
      </Col>

      <Col span={24}>
        <Text>Số bài test: {infoCourse?.numberTest} bài</Text>
      </Col>
      <Col span={24}>
        <Text>Giáo viên: {infoCourse?.name} bài</Text>
      </Col>
      <Col span={24}>
        <Image src={infoCourse?.avatar} />
      </Col>
      <Col span={24}>
        <Text>Số điện thoại: {infoCourse?.phone}</Text>
      </Col>

      <Col span={24}>
        <Button>
          {localStorage.getItem("isLogin")
            ? "Vào học ngay"
            : "Đăng nhập để học"}
        </Button>
      </Col>
    </WrapperRowStyled>
  );
};

export default Course;
