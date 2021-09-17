import "./CartItem.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cartItemWrapper: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
    borderBottom: "1px solid lightblue",
    paddingBottom: "20px",
  },
}));

function CartItem(props) {
  console.log(props.item._id)
  const classes = useStyles();
  return (
    <Container className={classes.cartItemWrapper}>
      <div>
        <h3>{props.item.name}</h3>
        <div className="information">
          <p>Price: {props.item.price}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => props.removeCartItem(props.item._id)}
          >
            -
          </Button>
          {/* <p>{item.amount}</p> */}
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => props.addCartItem(props.item._id)}
          >
            +
          </Button>
        </div>
      </div>
      <img className="cartItemImg" src={props.item.imgURL} alt={props.item.name} />
    </Container>
  );
}

export default CartItem;
