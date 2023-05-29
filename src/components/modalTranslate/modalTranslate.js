import React, { useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";

import { ModalStyled, InputStyled } from "./styled";

import DrawingBoard from "./canvas/Canvas";

const ModalTranslate = ({ isOpen, setIsOpen }) => {
  const handleCancel = () => {
    setIsOpen(false);
  };

  const [showCanvas, setShowCanvas] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    axios.post("https://mazii.net/api/news/search", {});
  };

  return (
    <ModalStyled
      title={"TRANSLATION"}
      open={true}
      onCancel={handleCancel}
      width={"100%"}
    >
      <Row>
        <Col span={24} className="col-search">
          <InputStyled
            allowClear
            value={search}
            onChange={(value) => {
              setSearch(value.target.value);
            }}
            suffix={
              <>
                <EditOutlined
                  className="icon"
                  onClick={() => {
                    setShowCanvas(!showCanvas);
                  }}
                  style={{ fontSize: 30, cursor: "pointer" }}
                />
                <SearchOutlined
                  className="icon"
                  style={{ fontSize: 30, cursor: "pointer" }}
                />
              </>
            }
          />
        </Col>
      </Row>

      <Row>
        {showCanvas && (
          <Col span={24} className="col-canvas">
            <DrawingBoard setSearch={setSearch} search={search} />
          </Col>
        )}
      </Row>
    </ModalStyled>
  );
};

export default ModalTranslate;
