import React, { useState } from "react";

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

  const addTodo = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;

    if (todoText.trim()) {
      const newTodo = { id: "125", text: todoText, status: "active" };
      setTodos([...todos, newTodo]);
    }
  };

  const onReset = () => {
    // input을 어떻게 초기화 해야될지를 모르겠음 ㅠㅠ
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todoText"
          placeholder="Add Todo"
          value={todos.text}
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
}
