import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetailEdit.css";
import { getMenuItem, updateMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import allIngredients from "../../utils/ingredients";
import Button from "@material-ui/core/Button";
import { addUserCartItem } from "../../services/users";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Box";

function MenuItemDetailEdit(props) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [ingredientsState, setIngredientsState] = useState([]);
  const [isUpdated, setUpdated] = useState(false);
  const [menuItem, setMenuItem] = useState({ ingredients: [] });

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getMenuItem(id);
      setItem(item);
      setIngredientsState(item.ingredients);
      setMenuItem({ ...item });  // Preload form with item details
    };
    fetchItem();
  }, [id]);

  const handleFieldChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    const updatedIngredients = ingredientsState.includes(value)
      ? ingredientsState.filter((ing) => ing !== value)
      : [...ingredientsState, value];

    setIngredientsState(updatedIngredients);
    setMenuItem({ ...menuItem, [name]: updatedIngredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateMenuItem(id, menuItem);
    setUpdated(updated);
  };

  const addCartItem = async () => {
    await addUserCartItem(props.user.id, item._id);
  };

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Box>
        <img className="item-1" src={item.imgURL} alt={item.name} />
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
      </Box>

      <div className="info-container">
        <FormGroup className="check-box" row>
          <TextField
            select
            className="create-ingredients"
            name="ingredients"
            id="ingredients"
            variant="outlined"
            label="Ingredients"
            onChange={handleFieldChange}
            SelectProps={{
              multiple: true,
              value: ingredientsState,
            }}
          >
            {allIngredients.map((ingredient) => (
              <MenuItem key={ingredient} value={ingredient}>
                {ingredient}
              </MenuItem>
            ))}
          </TextField>

          <Button id="order-button" onClick={handleSubmit} size="medium">
            Update Taco
          </Button>
          <Button id="order-button" onClick={addCartItem} size="medium">
            Order Meow
          </Button>
        </FormGroup>
      </div>
    </Container>
  );
}

export default MenuItemDetailEdit;