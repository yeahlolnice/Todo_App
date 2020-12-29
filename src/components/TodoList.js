import React from "react";
// import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {todos.map(todo => (
                <Todo 
                setTodos={setTodos}
                todos={todos}
                text={todo.text}
                id={todo.id}
                completed={todo.completed} 
                />
            ))}
        </div>
    );
};

export default TodoList;
