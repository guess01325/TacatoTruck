import "./MenuItemCreate.css";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createMenuItem } from "../../services/menuItems";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import allIngredients from "../../utils/ingredients";


function MenuItemCreate(props) {
  const [menuItem, setMenuItem] = useState({
    name: "",
    imgURL: "",
    price: "",
    ingredients: "",
  });
  const [ingredientsState, setIngredientsState] = useState(
    new Array(allIngredients.length).fill(false)
  );

  const [isCreatedMenuItem, setCreatedMenuItem] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMenuItem({
      ...menuItem,
      [name]: value,
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createdItem = await createMenuItem(menuItem);
    setCreatedMenuItem({ createdItem });
  };

  if (isCreatedMenuItem) {
    return <Redirect to={`/menu`} />;
  }

  const handleOnChange = (position) => {
    const updatedIngredientState = ingredientsState.map((item, index) =>
      index === position ? !item : item
    );
    setIngredientsState(updatedIngredientState);
  };

  return (
    <>
      <Layout user={props.user}>
        {/* <h1>Create A Taco</h1>
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
          <textarea
            className="create-ingredients"
            placeholder="Ingredients"
            required
            value={menuItem.ingredients}
            name="ingredients"
            onChange={handleChange}
          />
          <input
            className="create-link"
            placeholder="Link"
            value={menuItem.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <button type="submit" className="create-submit-button">
            Submit
          </button>
        </form> */}
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} />
          <Grid item xs={12} sm={8} md={5}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <Typography component="h1" variant="h5">
                Create a' Taco
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value={menuItem.name}
                  onChange={handleChange}
                  label="Taco Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={menuItem.imgURL}
                  onChange={handleChange}
                  name="imgURL"
                  label="Image Link"
                  type="imgURL"
                  id="imgURL"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={menuItem.price}
                  onChange={handleChange}
                  name="price"
                  label="Price"
                  type="price"
                  id="price"
                  autoFocus
                />
                <FormGroup row>
                  {allIngredients.map((ingredient, index) => (
                    <>
                      {console.log(ingredient)}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={ingredientsState[index]}
                            onChange={() =>handleOnChange(index)}
                            name={ingredient}
                          />
                        }
                        label={ingredient}
                      />
                    </>
                  ))}
                </FormGroup>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item></Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default MenuItemCreate;
