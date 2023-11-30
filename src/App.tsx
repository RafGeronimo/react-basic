import { useState, useEffect } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  interface todosTypes {
    id: number;
    title: string;
    completed: boolean;
  }

  //Para pegar as informações do localStorage podemos chamar uma função dentro do useState
  //Esse useState checa o localStorage e pega os itens (se existirem), se não ele retorna uma array vazia
  const [todos, setTodos] = useState<todosTypes[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  // O useEffect chama a função todas as vezes que os argumentos da array mudam de estado
  useEffect(() => {
    //essa função pega os todos e os guarda no localStorage
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

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

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
