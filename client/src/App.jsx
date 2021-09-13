import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import MenuItemDetail from "./screens/MenuItemDetail/MenuItemDetail";
import MenuItemDetailEdit from "./screens/MenuItemDetailEdit/MenuItemDetailEdit";
import MenuItemCreate from "./screens/MenuItemCreate/MenuItemCreate";
import Menu from "./screens/Menu/Menu";
import Home from "./screens/Home/Home";
import "@fontsource/roboto";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/menu">
          <Menu user={user} />
        </Route>
        <Route path="/menu/:id">
          {user ? (
            <MenuItemDetailEdit user={user} />
          ) : (
            <MenuItemDetail user={user} />
          )}
        </Route>
        <Route path="/create-taco">
          {user ? <MenuItemCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
