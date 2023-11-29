import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";

export default function App() {
  interface todosTypes {
    id: number;
    title: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<todosTypes[]>([]);

  function addTodo(title: string) {
    //Quando queremos passar o item atual utilizamos uma função no hook:
    setTodos((currentTodos: any) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function deleteTodo(id: number) {
    setTodos((currentTodos: todosTypes[]) => {
      return currentTodos.filter((todo: todosTypes) => todo.id !== id);
    });
  }

  function toggleTodo(id: number, completed: boolean) {
    setTodos((currentTodos: todosTypes[]) => {
      return currentTodos.map((todo: todosTypes) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // PAREI NO 34 min

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo: todosTypes) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
