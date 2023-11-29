import { useState } from "react";

export default function NewTodoForm(addTodo: Function) {
  const [newItem, setNewItem] = useState<string>("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="item">
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
  );
}
