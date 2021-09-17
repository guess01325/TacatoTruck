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
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#511730",
    },
    secondary: {
      main: "#8E443D",
    },
  },
});

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      console.log(user.id);
      const fetchCart = async () => {
        const userCartItems = await getUserCart(user.id);
        setCartItems(userCartItems);
      };
      fetchCart();
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/menu">
            <Menu user={user} />
          </Route>
          <Route exact path="/menu/:id">
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
      </ThemeProvider>
    </div>
  );
}

export default App;
