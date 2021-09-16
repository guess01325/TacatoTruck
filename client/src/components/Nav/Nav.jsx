import "./Nav.css";
import { useState, anchor } from "react";
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
  },
  titleImage: {
    width: 80,
  },
  list: {
    width: 350,
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
const Nav = ({ user }) => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const [cart, setCart] = useState([]);

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

  console.log(user)

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
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
                <span className="titleGreen">c</span>
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
              {user && (
                <div className="link welcome">Welcome, {user.username}</div>
              )}
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
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
