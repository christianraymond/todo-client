import React, { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-container">
      <div className="app-wrapper">
        <div className="header">
          <h1>Todo-List</h1>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}
