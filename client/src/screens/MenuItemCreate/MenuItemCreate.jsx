import "./MenuItemCreate.css";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createMenuItem } from "../../services/menuItems";
import TextField from "@material-ui/core/TextField";
import allIngredients from "../../utils/ingredients";
import MenuItem from "@material-ui/core/MenuItem";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Box';


function MenuItemCreate(props) {
  const [ingredientsState, setIngredientsState] = useState([]);
  const [isCreatedMenuItem, setCreatedMenuItem] = useState(false);
  const [menuItem, setMenuItem] = useState({
    name: "",
    imgURL: "",
    price: "",
    ingredients: ingredientsState,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createdItem = await createMenuItem(menuItem);
    setCreatedMenuItem({ createdItem });
  };

  if (isCreatedMenuItem) {
    return <Redirect to={`/menu`} />;
  }

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

  return (
    <>
      <Layout user={props.user}>
          
        <Container>
          <div className="outterCreateContainer">
            <div className="formCreateContainer">
              <h1>Create A Taco</h1>
              <form className="createItem-form" onSubmit={handleSubmit}>
                <input
                  className="create-name"
                  placeholder="Name"
                  required
                  name="name"
                  value={menuItem.name}
                  onChange={handleChange}
                  />
                <input
                  className="create-price"
                  placeholder="Price"
                  required
                  value={menuItem.price}
                  name="price"
                  onChange={handleChange}
                  />
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
                <input
                  className="create-link"
                  placeholder="Image Link"
                  value={menuItem.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                  />
                <button type="submit" className="create-submit-button">
                  Submit
                </button>
              </form>
            </div>  
            <Box>

            <img 
              src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fres.cloudinary.com%2Fotisg%2Fimage%2Fupload%2Fv1631708333%2FChickenTaco_gtgtln.jpg"
              alt="Taco Image"
              />
              </Box>
          </div>
</Container>
      </Layout>
    </>
  );
}

export default MenuItemCreate;
