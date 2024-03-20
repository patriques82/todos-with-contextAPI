import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  return <li>{todo}</li>;
}

export default TodoList;
