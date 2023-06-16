import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography, List, Avatar, Image } from "antd";

import { domainAPI } from "../../../configs/dev";

import { TeacherStyled, ListStyled, ButtonStyled } from "./styled";

const { Title, Text } = Typography;

const TeacherScreen = () => {
  const { t } = useTranslation();
  const [listTeacher, setListTeacher] = useState([]);
  const navigate = useNavigate();

  const getListTeacher = async () => {
    const res = await axios.get(`${domainAPI}/teacher`);
    setListTeacher(res.data);
  };

  useEffect(() => {
    getListTeacher();
  }, []);

  return (
    <TeacherStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title">{t("teacherPage.teacher")} TRICHAN</Title>
        </Col>
        <Col span={24}>
          <ListStyled
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listTeacher}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                extra={<Image preview={false} src={item.avatar} alt="avatar" />}
              >
                <List.Item.Meta
                  avatar={<Avatar className="'avatar" src={item.avatar} />}
                  title={
                    <Text>
                      {t("teacherPage.sen_se")}: {item.name}
                    </Text>
                  }
                  description={item.description}
                />
                <div className="title-course">
                  <Text>{t("teacherPage.course_in_progress")}:</Text>
                </div>

                <div className="list-course">
                  {item.listCourse.map((item) => (
                    <ButtonStyled
                      onClick={() => {
                        navigate(`/course/${item.nameCourse}`);
                      }}
                    >
                      {item.nameCourse.toUpperCase()}
                    </ButtonStyled>
                  ))}
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </TeacherStyled>
  );
};

export default TeacherScreen;
