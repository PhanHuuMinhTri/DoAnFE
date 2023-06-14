import React, { useState, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Stage, Layer, Line, Rect } from "react-konva";
import html2canvas from "html2canvas";
import trimCanvas from "trim-canvas";

import { CanvasStyled, ButtonTool } from "./styled";

const Canvas = ({ setResult }) => {
  const [lines, setLines] = useState([]);
  const { t } = useTranslation();
  const isDrawing = useRef(false);

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
    setResult(res.data.predictions);
  };

  return (
    <CanvasStyled>
      <div className="tool-bar">
        <ButtonTool onClick={handleUndo}> {t("writeKanji.undo")}</ButtonTool>
        <ButtonTool className="clear" onClick={handleClear}>
          {t("writeKanji.clear")}
        </ButtonTool>
      </div>
      <Stage
        id="drawing-board"
        width={(window.innerWidth - 32 - 48) * 0.5}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <Layer>
          <Rect
            height={500}
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
    </CanvasStyled>
  );
};

export default Canvas;
