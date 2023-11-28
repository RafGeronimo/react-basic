import { useState } from "react";
import "./styles.css";

export default function App() {
  // interface todosTypes {
  //   id: number;
  //   title: string;
  //   campleted: boolean;
  // }

  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<any>([]);

  function handleSubmit(e: any) {
    e.preventDefault();

    setTodos((currentTodos: any) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="" className="item">
            New Item
          </label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
