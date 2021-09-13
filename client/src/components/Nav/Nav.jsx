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
    marginLeft: theme.spacing(2),
    width: 80,
  },
  title: {
    textAlign: "left",
    flexGrow: 1,
    fontSize: 32,
  },
  titleImage: {
    width: 80,
  }
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
              className={classes.titleImage}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631555532/Tactato%20Truck/taco-cat-removebg-preview_sasawz.png"
              alt="taco cat"
            />
            <Typography variant="h6" className={classes.title}>
              <NavLink className="title" to="/">
                <span className="titleYellow">T</span><span className="titleRed">a</span><span className="titleGreen">c</span><span className="titleTortilla">a</span><span className="titleYellow">t</span><span className="titleRed">o</span> <span className="titleGreen">T</span><span className="titleTortilla">r</span><span className="titleYellow">u</span><span className="titleRed">c</span><span className="titleGreen">k</span>
              </NavLink>
            </Typography>
            <div className="links">
              {user && (
                <div className="link welcome">Welcome, {user.username}</div>
              )}
              {alwaysOptions}
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Button>
              <img className={classes.menuButton} src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/clipart775400_vxiz46.png" alt="truck side menu" />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};
export default Nav;
