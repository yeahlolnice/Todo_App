import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
//importing components
import Form from "./components/From";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList inputText={inputText} />
    </div>
  );
}

export default App;
