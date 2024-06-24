import React from "react";

export default function UpdateStatus({ onUpdate, id, text }) {
  const handleClick = (e) => {
    const chkBox = e.target;

    if (chkBox.checked) {
      chkBox.parentNode.style.textDecoration = "line-through";
      onUpdate({ id, text, status: "done" });
    } else {
      chkBox.parentNode.style.textDecoration = "";
      onUpdate({ id, text, status: "active" });
    }
  };
  return (
    <>
      <input type="checkbox" onClick={handleClick}></input>
    </>
  );
}
