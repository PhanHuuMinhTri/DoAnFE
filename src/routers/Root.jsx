import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import ModalTranslate from "../components/modalTranslate/modalTranslate";
import _publicRoutes from "./_public";
import _privateRoutes from "./_private";
import _globalRoutes from "./_global";

export const RootRouter = () => {
  const { t } = useTranslation();
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
        <p>{t("homePage.click_here_to_translate")}</p>
        <TranslationOutlined style={{ fontSize: 70 }} />
      </div>
      <ModalTranslate isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
