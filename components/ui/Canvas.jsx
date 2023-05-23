import React, { useEffect, useRef } from "react";

const CanvasProject = ({ projectName, aos }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    context.font = "48px Cairo";
    context.fillStyle = "#4b6bfb";
    context.textAlign = "center";
    context.fillText(projectName, x, y);

    context.font = "40px Cairo";
    context.textAlign = "center";
    context.fillText("Leinda Demy", x, y + 50);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={300}
      className="bg-background-white dark:bg-background-black rounded-lg w-full sm:w-auto"
      data-aos={aos}
    />
  );
};
const CanvasBlog = ({ projectName, aos }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    context.font = "48px Cairo";
    context.fillStyle = "#4b6bfb";
    context.textAlign = "center";
    context.fillText(projectName, x, y);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="bg-background dark:bg-background-dark rounded-lg w-full sm:w-auto"
      data-aos={aos}
    />
  );
};

export { CanvasProject, CanvasBlog };
