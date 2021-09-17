import "./CartItem.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
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
  const classes = useStyles();

  let itemIngredients = "";
  props.item.ingredients.map((ingredient) => {
    itemIngredients += ingredient + " ";
  });

  return (
    <div className="cartItemWrapper">
      <div className="cartDiv">
        <h3>{props.item.name}</h3>
        <div className="information">
          <p>Price: {props.item.price}</p>
          <p>{itemIngredients}</p>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => props.removeCartItem(props.item._id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
        <div className="buttons">
          {/* <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => props.removeCartItem(props.item._id)}
          >
            -
          </Button> */}
          {/* <p>{item.amount}</p> */}
          {/* <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => props.addCartItem(props.item._id)}
          >
            +
          </Button> */}
        </div>
      </div>
      <img
        className="cartItemImg"
        src={props.item.imgURL}
        alt={props.item.name}
      />
    </div>
  );
}

export default CartItem;
