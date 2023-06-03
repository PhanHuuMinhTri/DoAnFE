import React from "react";
import ReactPlayer from "react-player";
import { Col, Typography } from "antd";

import { VideoStyled } from "./VideoStudy.styled";

const { Title } = Typography;
const VideoStudy = ({ lessonInfo }) => {
  return (
    <>
      <VideoStyled>
        <Col span={24} className="col-video">
          <Title level={3}>Video bài {lessonInfo?.indexLesson}</Title>
        </Col>
        <Col span={24} className="col-video">
          <ReactPlayer
            className="react-player"
            url={lessonInfo?.videoUrl}
            width="80%"
            height="600px"
            controls={true}
          />
        </Col>
      </VideoStyled>
    </>
  );
};

export default VideoStudy;
