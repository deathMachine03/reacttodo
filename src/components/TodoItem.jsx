// TodoItem.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from '../stores/TodoStore'; // Проверьте правильность пути

const TodoItem = observer(({ todo }) => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => todoStore.toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
            <button onClick={() => todoStore.removeTodo(todo.id)}>Remove</button>
        </div>
    );
});

export default TodoItem;
