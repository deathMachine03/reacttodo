// TodoFilter.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from '../stores/TodoStore'; // Проверьте правильность пути

const TodoFilter = observer(() => {
    return (
        <div className="todo-filter">
            <button onClick={() => todoStore.setFilter('all')}>All</button>
            <button onClick={() => todoStore.setFilter('active')}>Active</button>
            <button onClick={() => todoStore.setFilter('completed')}>Completed</button>
        </div>
    );
});

export default TodoFilter;
