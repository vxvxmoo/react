import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import UpdateStatus from "../UpdateStatus/UpdateStatus";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "123",
      text: "장보기",
      status: "active",
    },
    {
      id: "124",
      text: "공부하기",
      status: "active",
    },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleStatus = (todo) => {
    setTodos((todoItem) => {
      if (todoItem.id === todo.id) {
        todoItem.status = todo.status;
      }
    });
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <UpdateStatus
              onUpdate={handleStatus}
              id={item.id}
              text={item.text}
            />
            {item.text}
            <DeleteTodo />
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
