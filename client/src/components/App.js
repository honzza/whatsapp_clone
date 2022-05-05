import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [id, setId] = useLocalStorage("id");
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
};

export default App;

//30:43
