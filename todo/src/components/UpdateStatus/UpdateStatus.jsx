import React from "react";

export default function UpdateStatus({ onUpdate, id, text }) {
  const handleClick = (e) => {
    onUpdate({ id, text, status: "done" });
  };
  return (
    <>
      <input type="checkbox" onClick={handleClick}></input>
    </>
  );
}
