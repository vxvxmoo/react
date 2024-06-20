import React, { useState } from "react";

export default function TodoListItem() {
  const list = ["장보기", "공부하기"];

  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}
