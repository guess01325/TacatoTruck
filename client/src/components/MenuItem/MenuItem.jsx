import "./MenuItem.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 350,
  },
  cardContent: {
    height: 75,
  },
});

const useStylesGrid = makeStyles((theme) => ({
  gridPaper: {
    padding: theme.spacing(5),
    textAlign: "center",
    backgroundColor: "#8C9267",
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: "Segoe UI",
    fontSize: 15,
  },
});

function MenuItem(props) {
  const classes = useStyles();
  const classesGrid = useStylesGrid();

  const history = useHistory();

  const handleDirectDetail = () => {
    history.push(`/menu/${props.id}`);
  };

  const handleOrder = () => {
    history.push(`/`);
  };

  return (
    <Grid item m>
      <Paper className={classesGrid.gridPaper} variant="outlined" elevation={3}>
        <Card className={classes.root} elevation={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="item"
              height="140"
              maxwidth="50"
              image={props.imgURL}
              alt={props.name}
              title={props.name}
            />
            <CardContent className={classes.cardContent}>
              <ThemeProvider theme={theme}>
                <Typography gutterBottom variant="h6" component="h1">
                  {props.name}
                </Typography>
              </ThemeProvider>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained primary button group"
              variant="contained"
              justifyContent="center"
              fullWidth
            >
              {/* <Link
                id="button-link"
                component={RouterLink}
                to={`/menu/${props.id}`} */}
              {/* > */}
              <Button
                id="button-link"
                onClick={handleDirectDetail}
                size="small"
              >
                Modify
              </Button>
              {/* </Link> */}
              <Button id="order-button" onClick={handleOrder} size="small">
                Order Meow
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}

export default MenuItem;
