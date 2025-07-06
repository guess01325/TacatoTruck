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
import Layout from "./components/Layout/Layout"; // ✅ Make sure this path is correct
import "@fontsource/roboto";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { getUserCart } from "./services/users";

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
      const fetchCart = async () => {
        const userCartItems = await getUserCart(user.id);
        setCartItems(userCartItems);
      };
      fetchCart();
    }
  }, [user]);

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setUser(user || null);
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Layout user={user}>
              <Home user={user} />
            </Layout>
          </Route>

          <Route exact path="/menu">
            <Layout user={user}>
              <Menu user={user} cartItems={cartItems} setCartItems={setCartItems} />
            </Layout>
          </Route>

          <Route exact path="/menu/:id">
            <Layout user={user}>
              {user ? (
                <MenuItemDetailEdit user={user} cartItems={cartItems} setCartItems={setCartItems} />
              ) : (
                <MenuItemDetail user={user} cartItems={cartItems} setCartItems={setCartItems} />
              )}
            </Layout>
          </Route>

          <Route path="/create-taco">
            {user ? (
              <Layout user={user}>
                <MenuItemCreate user={user} />
              </Layout>
            ) : (
              <Redirect to="/sign-up" />
            )}
          </Route>

          <Route path="/sign-up">
            <Layout>
              <SignUp setUser={setUser} />
            </Layout>
          </Route>

          <Route path="/sign-out">
            <Layout>
              <SignOut setUser={setUser} />
            </Layout>
          </Route>

          <Route path="/sign-in">
            <Layout>
              <SignIn setUser={setUser} />
            </Layout>
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;