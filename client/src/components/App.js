import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";

const App = () => {
  const [id, setId] = useLocalStorage("id");
  return <>{id ? <h1>Dashboard</h1> : <Login onIdSubmit={setId} />}</>;
};

export default App;

//20:00
