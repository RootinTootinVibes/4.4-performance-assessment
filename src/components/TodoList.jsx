import React, { useState } from 'react';
import classes from './Button.module.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !==index));
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className={classes.button} onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;