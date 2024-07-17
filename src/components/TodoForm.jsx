// TodoForm.jsx
import React, { useState } from 'react';
import todoStore from '../stores/TodoStore'; // Проверьте правильность пути

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            todoStore.addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div className="todo-form">
            <input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoForm;
