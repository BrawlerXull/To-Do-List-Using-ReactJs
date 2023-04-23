import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  var text = useRef();
  function addTodo() {
    event.preventDefault();
    var x = text.current.value;
    if (x != "") {
      var next = [...todos, text.current.value];
      setTodos(next);
    }
    localStorage.setItem("todos", JSON.stringify(next));
    console.log(next);
    text.current.value = "";
  }

  useEffect(() => {
    const existingTodos = localStorage.getItem("todos");
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo}</li>
        ))}
      </ul>
      <input type="text" placeholder="Enter the todo here" ref={text} />
      <input
        type="button"
        onClick={() => {
          addTodo();
        }}
        placeholder="Click"
      />
      <button
        onClick={() => {
          setTodos([]);
          text.current.value = "";
        }}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
