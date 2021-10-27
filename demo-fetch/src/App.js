//import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let data = { title: "Waiting for Data." };
  const [todo, setTodo] = useState(data);
  const [isData, setData] = useState(false);
  const [isFetching, setFetching] = useState(false);
  ///// This is also a Hook.
  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("Response = ", response);
      setTodo(await response.json());
      setFetching(false);
      console.log("Data = ", todo);
    }
    fetchData();
  }, [isData]);

  if (isFetching) {
    return <div>Data Loading...</div>;
  }
  return (
    <div>
      Hello Fetch
      <span>Title : {todo.title}</span>
    </div>
  );
}

export default App;
