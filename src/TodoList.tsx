import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }: any) {
  interface todosTypes {
    id: number;
    title: string;
    completed: boolean;
  }
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo: todosTypes) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
