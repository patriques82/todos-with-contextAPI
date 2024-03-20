import { useContext, useState } from "react";
import { TodoContext } from "./TodoProvider";

function AddTodoForm() {
  const [text, setText] = useState("");
  const { setTodos } = useContext(TodoContext);

  const saveTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, text]);
  };

  return (
    <form onSubmit={saveTodo}>
      <label>Todo:</label>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
      <input type="submit" value="spara"></input>
    </form>
  );
}

export default AddTodoForm;
