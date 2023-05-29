import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { TranslationOutlined } from "@ant-design/icons";

import ModalTranslate from "../components/modalTranslate/modalTranslate";
import _publicRoutes from "./_public";
import _privateRoutes from "./_private";
import _globalRoutes from "./_global";

export const RootRouter = () => {
  const totalRootes = [..._publicRoutes, ..._privateRoutes, ..._globalRoutes];

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {useRoutes(totalRootes)}
      <div
        className="translate"
        onClick={() => {
          handleOpen();
        }}
      >
        <p>Click here to translate</p>
        <TranslationOutlined style={{ fontSize: 70 }} />
      </div>
      <ModalTranslate isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
