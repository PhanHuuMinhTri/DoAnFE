import React, { useEffect, useState } from "react";
import axios from "axios";
import { domainAPI } from "../../../../configs/dev";
import { List } from "antd";

import CardCourse from "./courseCard/CardCourse";

const ListCourseItem = () => {
  const [listCourse, setListCourse] = useState([]);

  const getListCourse = async () => {
    const res = await axios.get(`${domainAPI}/course`);

    setListCourse(res.data);
  };

  useEffect(() => {
    getListCourse();
  }, []);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={listCourse}
        renderItem={(item, index) => <CardCourse item={item} />}
      />
    </>
  );
};

export default ListCourseItem;
