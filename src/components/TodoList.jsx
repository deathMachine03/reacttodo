// TodoList.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from '../stores/TodoStore'; // Проверьте правильность пути
import TodoItem from './TodoItem';

const TodoList = observer(() => {
    return (
        <div className="todo-list">
            {todoStore.filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
});

export default TodoList;
