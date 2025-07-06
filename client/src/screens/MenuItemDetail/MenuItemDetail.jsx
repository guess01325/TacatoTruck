import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetail.css";
import { getMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import allIngredients from "../../utils/ingredients";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Box";

import { addUserCartItem } from "../../services/users";

function MenuItemDetail(props) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [ingredientsState, setIngredientsState] = useState(
    new Array(allIngredients.length).fill(false)
  );

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getMenuItem(id);
      setItem(item);

      // Set ingredient checkboxes based on item ingredients
      const updatedState = new Array(allIngredients.length).fill(false);
      item.ingredients.forEach((ingredient) => {
        const index = allIngredients.indexOf(ingredient);
        if (index !== -1) updatedState[index] = true;
      });
      setIngredientsState(updatedState);
    };

    fetchItem();
  }, [id]);

  const addCartItem = async () => {
    await addUserCartItem(props.user.id, item._id);
  };

  const handleOnChange = (position) => {
    const updatedState = ingredientsState.map((value, index) =>
      index === position ? !value : value
    );
    setIngredientsState(updatedState);
  };

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <img className="item-1" src={item.imgURL} alt={item.name} />
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
      </Box>
      <div className="info-container">
        <FormGroup className="check-box" row>
          {allIngredients.map((ingredient, index) => (
            <FormControlLabel
              key={ingredient}
              control={
                <Checkbox
                  checked={ingredientsState[index]}
                  onChange={() => handleOnChange(index)}
                  name={ingredient}
                />
              }
              label={ingredient}
            />
          ))}
          <Button id="order-button" onClick={addCartItem} size="medium">
            Order Meow
          </Button>
        </FormGroup>
      </div>
    </Container>
  );
}

export default MenuItemDetail;