import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { verifyUser } from "./services/users";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    getUser();
  }, []);

  return <div className="App"></div>;
}

export default App;
