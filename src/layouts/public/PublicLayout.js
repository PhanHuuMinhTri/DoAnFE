import React from "react";
import { useOutlet } from "react-router-dom";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

export const PublicLayout = () => {
  const outlet = useOutlet();

  return (
    <Layout>
      <Title className="title">CanNavi</Title>
      <Content className="body-content">{outlet}</Content>
    </Layout>
  );
};
