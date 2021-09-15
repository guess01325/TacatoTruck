import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    fontFamily: "Ranchers, cursive",
    color: "#E7AF00"
  },
  octoCat: {
    width: 60,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <a href="https://github.com/Nafff">
            <img
              className={classes.octoCat}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
              alt="github octocat"
            />
          </a>
          <a href="https://github.com/CourtneyAJackson">
            <img
              className={classes.octoCat}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
              alt="github octocat"
            />
          </a>
          <p>Check Meowt</p>
          <a href="https://github.com/eileen813">
            <img
              className={classes.octoCat}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
              alt="github octocat"
            />
          </a>
          <a href="https://github.com/guess01325">
            <img
              className={classes.octoCat}
              src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
              alt="github octocat"
            />
          </a>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
