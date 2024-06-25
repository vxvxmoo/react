import React from "react";

export default function TodoFilter({ todos, onSetList }) {
  const items = todos;

  const showAll = () => {
    onSetList(items);
  };
  const showOnlyActive = () => {
    onSetList(items.filter((item) => item.status === "active"));
  };
  const showOnlyCompleted = () => {
    onSetList(items.filter((item) => item.status === "completed"));
  };

  return (
    <>
      <button onClick={showAll}>ALL</button>
      <button onClick={showOnlyActive}>ACTIVE</button>
      <button onClick={showOnlyCompleted}>COMPLETED</button>
    </>
  );
}
