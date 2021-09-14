import "./MenuItem.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const useStylesGrid = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
    margin: 32,
  },
  gridPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function MenuItem(props) {
  const classes = useStyles();
  const classesGrid = useStylesGrid();

  return (
    <div className={classesGrid.gridRoot}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item m>
          <Paper
            className={classesGrid.gridPaper}
            variant="outlined"
            elevation={3}
          >
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="item"
                  height="140"
                  image={props.imgURL}
                  alt={props.name}
                  title={props.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Modify
                </Button>
                <Button size="small" color="primary">
                  Order Meow
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MenuItem;
