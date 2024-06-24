import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteTodo({ onDelete, id }) {
  const handleClick = (e) => {
    onDelete({ id });
  };
  return (
    <>
      <FontAwesomeIcon icon={faTrash} onClick={handleClick} />
    </>
  );
}
