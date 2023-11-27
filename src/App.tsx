import { useState } from "react";
import "./styles.css";

function handleSubmit() {}

export default function App() {
  const [newItem, setNewItem] = useState("");
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
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
