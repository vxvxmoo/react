import React from "react";

export default function UpdateStatus({ onUpdate, id, text }) {
  const handleClick = (e) => {
    const checked = e.target.checked;

    if (checked) {
      onUpdate({ id, text, status: "done" });
    } else {
      onUpdate({ id, text, status: "active" });
    }
  };
  return (
    <>
      <input type="checkbox" onClick={handleClick}></input>
    </>
  );
}
