import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetailEdit.css";
import Layout from "../../components/Layout/Layout";
import { getMenuItem, updateMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import allIngredients from "../../utils/ingredients";
import Button from "@material-ui/core/Button";
import { addUserCartItem } from "../../services/users";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
</style>;

function MenuItemDetail(props) {
  const [item, setItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [ingredientsState, setIngredientsState] = useState([]);
  const [isUpdated, setUpdated] = useState(false);

  const [menuItem, setMenuItem] = useState({
    ingredients: ingredientsState,
  });

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getMenuItem(id);
      setItem(item);
      setIngredientsState(item.ingredients);
      setLoaded(true);
    };
    fetchItem();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const addCartItem = async (id) => {
    await addUserCartItem(props.user.id, id);
  };

  const handleFieldChange = (event) => {
    console.log(event);
    event.persist();
    setIngredientsState(
      ingredientsState.concat(
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
      )
    );
    const { name } = event.target;
    setMenuItem({
      ...menuItem,
      [name]: ingredientsState,
    });
    console.log(ingredientsState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateMenuItem(id, menuItem);
    setUpdated(updated);
  };

  return (
    <Layout user={props.user}>
      <Container>

  <Box>

  
            <img className="item-1" src={item.imgURL} alt={item.name} />
              <div className="name">{item.name}</div>
              <div className="price">{`${item.price}`}</div>
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
                    <MenuItem value={ingredient}>{ingredient}</MenuItem>
                    ))}
                </TextField>
                <Button id="order-button" onClick={handleSubmit} size="medium">
                  Update Taco
                </Button>
                <Button
                  id="order-button"
                  onClick={() => addCartItem(item._id)}
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
