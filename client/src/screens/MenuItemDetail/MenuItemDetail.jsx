import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetail.css";
import Layout from "../../components/Layout/Layout";
import { getMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import allIngredients from "../../utils/ingredients";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Box";

import { addUserCartItem } from "../../services/users";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
</style>;

function MenuItemDetail(props) {
  const [item, setItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [ingredientsState, setIngredientsState] = useState(
    new Array(allIngredients.length).fill(false)
  );
  console.log(ingredientsState);
  useEffect(() => {
    const fetchItem = async () => {
      const item = await getMenuItem(id);
      setItem(item);
      setLoaded(true);
    };
    fetchItem();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  item.ingredients.map((ingredient) => {
    const index = allIngredients.indexOf(ingredient);
    ingredientsState[index] = true;
  });

  const addCartItem = async (id) => {
    await addUserCartItem(props.user.id, id);
  };

  const handleOnChange = (position) => {
    const updatedIngredientState = ingredientsState.map((item, index) =>
      index === position ? !item : item
    );
    setIngredientsState(updatedIngredientState);
  };
  return (
    <Layout user={props.user}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img className="item-1" src={item.imgURL} alt={item.name} />
          <div className="name">{item.name}</div>
          <div className="price">{`${item.price}`}</div>
        </Box>
        <div className="info-container">
          <FormGroup className="check-box" row>
            {allIngredients.map((ingredient, index) => (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ingredientsState[index]}
                      name={ingredient}
                    />
                  }
                  label={ingredient}
                />
              </>
            ))}
            <Button
              id="order-button"
              onClick={() => addCartItem(props.id)}
              size="medium"
            >
              Order Meow
            </Button>
          </FormGroup>
        </div>
      </Container>
    </Layout>
  );
}

export default MenuItemDetail;
