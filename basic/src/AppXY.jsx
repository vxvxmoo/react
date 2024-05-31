import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const mouseChange = (pointer) => {
    setMouseX(pointer.pageX);
    setMouseY(pointer.pageY);
  };

  return (
    <div className="container" onMouseMove={mouseChange}>
      <div
        className="pointer"
        style={{ position: "absolute", left: mouseX, top: mouseY }}
      />
    </div>
  );
}
