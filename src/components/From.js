
import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const sumbitTodoHandler = (e) => {
        e.preventDefault();
        if ( inputText === "") {
           document.querySelector(".warning").classList.add(".show-warning");
        }else {
            setTodos([
                ...todos, {text: inputText, completed: false, id: todos.length}
            ])
            setInputText('');
        }
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" />
            <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;