import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = [];
    filter = "";

    constructor() {
        makeAutoObservable(this);
    }

    addTodo = (title) => {
        this.todos.push({ id: Date.now(), title, completed: false });
    };

    toggleTodo = (id) => {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    };

    removeTodo = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    };

    setFilter = (filter) => {
        this.filter = filter;
    };

    get filteredTodos() {
        if (this.filter === "completed") {
            return this.todos.filter(todo => todo.completed);
        }
        if (this.filter === "active") {
            return this.todos.filter(todo => !todo.completed);
        }
        return this.todos;
    }
}

const todoStore = new TodoStore();
export default todoStore;