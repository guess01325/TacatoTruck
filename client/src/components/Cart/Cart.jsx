import "./Cart.css";
import { useState, useEffect } from "react";
import { getUserCart } from "../../services/users";
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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (props.user) {
      console.log(props.user.id)
      const fetchCart = async () => {
        const userCartItems = await getUserCart(props.user.id);
        setCartItems(userCartItems);
      };
      fetchCart();
    }
  }, []);

  return <h6>This is a cart</h6>;
}

export default Cart;
