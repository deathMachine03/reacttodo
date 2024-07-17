import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <TodoForm />
            <TodoFilter />
            <TodoList />
        </div>
    );
};

export default App;
