import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Image, Table } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { domainAPI } from "../../../configs/dev";
import { ContentStyled } from "./styled";

const { Title } = Typography;

const RankTestOnlineScreen = () => {
  const { id } = useParams();
  const [listRank, setListRank] = useState([]);

  const getRank = async () => {
    const res = await axios.get(`${domainAPI}/test-online/rank/${id}`);
    const data = res.data.map((item, index) => ({ ...item, index: index + 1 }));
    setListRank(data);
  };

  useEffect(() => {
    getRank();
  }, [id]);

  console.log("listrank", listRank);

  const COLUMNS = [
    {
      title: "Top",
      dataIndex: "index",
      key: "top",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "name",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Avatar",
      dataIndex: "Avatar",
      key: "avatar",
      align: " center",
      render: (avatar) => <Image src={avatar} alt="avatar" />,
    },
  ];

  return (
    <ContentStyled>
      <Row>
        <Col span={24} className="col-title">
          <Title className="title">RANKING</Title>
        </Col>

        <Col span={24}>
          <Table columns={COLUMNS} dataSource={listRank} />
        </Col>
      </Row>
    </ContentStyled>
  );
};

export default RankTestOnlineScreen;
