import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
//importing components
import Form from "./components/From";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;


