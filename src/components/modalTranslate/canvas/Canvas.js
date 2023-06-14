import React, { useState, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Stage, Layer, Line, Rect } from "react-konva";
import html2canvas from "html2canvas";
import trimCanvas from "trim-canvas";

import { ButtonTool } from "../styled";

const DrawingBoard = ({ setSearch, search }) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [res, setRes] = useState([]);
  const { t } = useTranslation();

  const handleMouseDown = (event) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = event.evt;
    setLines([...lines, { points: [{ x: offsetX, y: offsetY }] }]);
  };

  const handleMouseMove = (event) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = event.evt;
    const updatedLines = [...lines];
    const lastLine = updatedLines[updatedLines.length - 1];
    lastLine.points = [...lastLine.points, { x: offsetX, y: offsetY }];
    setLines(updatedLines);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    handleExportImage();
  };

  const handleTouchStart = (event) => {
    const stage = event.target.getStage();
    const position = stage.getPointerPosition();
    setLines([...lines, { points: [position] }]);
  };

  const handleTouchMove = (event) => {
    const stage = event.target.getStage();
    const position = stage.getPointerPosition();
    const updatedLines = [...lines];
    const lastLine = updatedLines[updatedLines.length - 1];
    lastLine.points = [...lastLine.points, position];
    setLines(updatedLines);
  };

  const handleUndo = async () => {
    setLines(lines.slice(0, -1));
  };

  const handleClear = () => {
    setLines([]);
    setRes([]);
  };

  function canvasToImage(canvas) {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/png");
    });
  }

  const handleExportImage = async () => {
    const dataURL = await html2canvas(document.getElementById("drawing-board"));
    const trimmedCanvas = trimCanvas(dataURL);

    const blob = await canvasToImage(trimmedCanvas);

    const formData = new FormData();
    formData.append("image", blob);

    const res = await axios.post("http://127.0.0.1:5000/predict", formData);
    setRes(res.data.predictions);
  };

  return (
    <div className="canvas">
      <div className="tool-bar">
        <ButtonTool onClick={handleUndo}>{t("homePage.undo")}</ButtonTool>
        <ButtonTool onClick={handleClear}>{t("homePage.clear")}</ButtonTool>
      </div>
      <Stage
        id="drawing-board"
        width={(window.innerWidth - 32 - 48) * 0.5}
        height={200}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Layer>
          <Rect
            height={200}
            width={(window.innerWidth - 32 - 48) * 0.5}
            fill={"black"}
          />
          {lines.map((line, index) => (
            <Line
              key={index}
              points={line.points.flatMap((point) => [point.x, point.y])}
              stroke="white"
              strokeWidth={10}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
            />
          ))}
        </Layer>
      </Stage>
      <div className="result">
        {res.map((item) => {
          return (
            <p
              className="item"
              onClick={() => {
                setSearch(search + item?.kanji);
              }}
            >
              {item?.kanji}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default DrawingBoard;
