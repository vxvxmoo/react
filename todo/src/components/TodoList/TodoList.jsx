import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import DeleteTodo from "../DeleteTodo/DeleteTodo";
import UpdateStatus from "../UpdateStatus/UpdateStatus";

export default function TodoList() {
  const [todos, setTodos] = useState(todoObj);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleStatus = (todo) => {
    setTodos(
      todoObj.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return {
            id: todo.id,
            text: todo.text,
            status: todo.status,
          };
        } else return todoItem;
      })
    );
  };

  const handleDelete = (todo) => {
    setTodos(
      todoObj.filter((todoItem) => {
        return todoItem.id !== todo.id;
      })
    );
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
            <DeleteTodo onDelete={handleDelete} id={item.id} />
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

const todoObj = [
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
];
