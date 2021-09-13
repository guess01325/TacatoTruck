import "./Nav.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631555532/Tactato%20Truck/taco-cat-removebg-preview_sasawz.png"
              alt="taco cat"
            />
            <Typography variant="h6" className={classes.title}>
              <NavLink className="logo" to="/">
                Tacato Truck
              </NavLink>
            </Typography>
            <div className="links">
              {user && (
                <div className="link welcome">Welcome, {user.username}</div>
              )}
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};
export default Nav;
