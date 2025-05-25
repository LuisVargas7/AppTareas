import './style.css'

import { todo, TodoList } from './clases';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList()

todoList.todos.forEach(todo => crearTodoHtml(todo));

