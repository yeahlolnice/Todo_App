import React from "react";
// import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map((todo) => (
                <Todo 
                setTodos={setTodos}
                todos={todos}
                text={todo.text}
                key={todo.id} 
                todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;
