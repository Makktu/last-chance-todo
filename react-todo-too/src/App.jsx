import { useState } from "react";
import "./App.css";
import ListToDos from "./ListToDos";
import "./ListToDos.css";

function App() {
  // const [count, setCount] = useState(0);

  let toDos = [
    { id: 1, task: "Hoover the house", done: false },
    { id: 2, task: "write epic novel", done: false },
    { id: 3, task: "organise ThinkPads", done: false },
  ];

  return (
    <div className="App">
      <h1>Last Chance To-Do</h1>
      <input />
      <br />
      <button>SUBMIT</button>
      <div className="todo-list">
        <ListToDos allToDos={toDos} />
      </div>
    </div>
  );
}

export default App;
