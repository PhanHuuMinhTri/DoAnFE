import React, { useEffect, useState } from "react";
import axios from "axios";
import { domainAPI } from "../../../../configs/dev";
import { List } from "antd";

import TestCard from "./testCard/TestCard";

const ListTest = () => {
  const [listTest, setListTest] = useState([]);
  const [listTestByUser, setListTestByUser] = useState([]);

  const listTestHaveCheck = listTest.map((item) => {
    return {
      ...item,
      isDone: listTestByUser.includes(item?.idLessonTest) ? true : false,
    };
  });

  const getListTestByUser = async () => {
    const res = await axios.get(
      `${domainAPI}/test-online/${localStorage.getItem("idUser")}`
    );

    const listTestUser = res?.data?.map((item) => item.idLessonTest);
    setListTestByUser(listTestUser);
  };

  const getListTest = async () => {
    const res = await axios.get(`${domainAPI}/test-online`);
    setListTest(res.data);
  };

  useEffect(() => {
    getListTest();
    getListTestByUser();
  }, []);

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={listTestHaveCheck}
        renderItem={(item, index) => <TestCard item={item} />}
      />
    </>
  );
};

export default ListTest;
