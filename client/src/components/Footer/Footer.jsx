import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  boxFooter: {
    top: "auto",
    bottom: 0,
    fontFamily: "Ranchers, cursive",
    color: "#E7AF00",
    backgroundColor: "#8E443D",
  },
  octoCat: {
    width: 60,
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    // <footer>
    //   <AppBar position="fixed" color="secondary" className={classes.appBar}>
    //     <Toolbar>
    //       <a href="https://github.com/Nafff">
    //         <img
    //           className={classes.octoCat}
    //           src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
    //           alt="github octocat"
    //         />
    //       </a>
    //       <a href="https://github.com/CourtneyAJackson">
    //         <img
    //           className={classes.octoCat}
    //           src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
    //           alt="github octocat"
    //         />
    //       </a>
    //       <p>Check Meowt</p>
    //       <a href="https://github.com/eileen813">
    //         <img
    //           className={classes.octoCat}
    //           src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
    //           alt="github octocat"
    //         />
    //       </a>
    //       <a href="https://github.com/guess01325">
    //         <img
    //           className={classes.octoCat}
    //           src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
    //           alt="github octocat"
    //         />
    //       </a>
    //     </Toolbar>
    //   </AppBar>
    // </footer>
    <Box
      className={classes.boxFooter}
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
        bottom: "0",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
