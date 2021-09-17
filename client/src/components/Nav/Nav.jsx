import "./Nav.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { getUserCart, addUserCartItem, deleteUserCartItem } from "../../services/users";
import CartItem from "../CartItem/CartItem"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    width: 80,
  },
  title: {
    textAlign: "left",
    flexGrow: 1,
    fontSize: 32,
    letterSpacing: ".2rem",
    fontSize: 45,
  },
  titleImage: {
    width: 80,
  },
  list: {
    width: 550,
  },
}));

const authenticatedOptions = (
  <>
    <Button color="inherit">
      <NavLink className="link" to="/create-taco">
        Create a' Taco
      </NavLink>
    </Button>
    <Button color="inherit">
      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
    </Button>
  </>
);
const unauthenticatedOptions = (
  <>
    <Button color="inherit">
      <NavLink className="link" to="/sign-up">
        Sign Up
      </NavLink>
    </Button>
    <Button color="inherit">
      <NavLink className="link" to="/sign-in">
        Sign In
      </NavLink>
    </Button>
  </>
);
const alwaysOptions = (
  <>
    <Button color="inherit">
      <NavLink className="link" to="/menu">
        Menu
      </NavLink>
    </Button>
  </>
);
const Nav = (props) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (props.user) {
      const fetchCart = async () => {
        const userCartItems = await getUserCart(props.user.id);
        setCartItems(userCartItems);
      };
      fetchCart();
    }
  }, [drawer, setDrawer]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const addCartItem = async (id) => {
    await addUserCartItem(props.user.id, id)
  };

  const removeCartItem = async (id) => {
    await deleteUserCartItem(props.user.id, id)
  };

  let totalPriceCart = 0
  cartItems.map((item) => {
    totalPriceCart += parseFloat((item.price).slice(1));
  })

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h6" gutterBottom align="center">
        Shopping Cart
      </Typography>
      <Divider />
      <List>
        {cartItems.map((item) => (
          <ListItem>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
              <CartItem
                item={item}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
              />
          </ListItem>
        ))}
      </List>
      <h2>Total: ${totalPriceCart.toFixed(2)}</h2> <Button>Pay Meow</Button>
    </div>
  );

  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              className={classes.titleImage}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631555532/Tactato%20Truck/taco-cat-removebg-preview_sasawz.png"
              alt="taco cat"
            />
            <Typography variant="h6" className={classes.title}>
              <NavLink className="title" to="/">
                <span className="titleYellow">T</span>
                <span className="titleRed">a</span>
                <span className="titleGreen">C</span>
                <span className="titleTortilla">a</span>
                <span className="titleYellow">t</span>
                <span className="titleRed">o</span>{" "}
                <span className="titleGreen">T</span>
                <span className="titleTortilla">r</span>
                <span className="titleYellow">u</span>
                <span className="titleRed">c</span>
                <span className="titleGreen">k</span>
              </NavLink>
            </Typography>
            <div className="links">
              {props.user && (
                <div className="userGreeting">
                  You're Pawsome, {props.user.username}
                </div>
              )}
              {alwaysOptions}
              {props.user ? authenticatedOptions : unauthenticatedOptions}
            </div>
            <Button onClick={toggleDrawer(true)}>
              <img
                className={classes.menuButton}
                src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/clipart775400_vxiz46.png"
                alt="truck side menu"
              />
            </Button>
            <Drawer
              anchor={"right"}
              open={drawer}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};

export default Nav;
