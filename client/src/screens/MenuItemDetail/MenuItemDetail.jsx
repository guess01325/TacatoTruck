import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetail.css";
import Layout from "../../components/Layout/Layout";
import { getMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import allIngredients from "../../utils/ingredients";

function MenuItemDetail(props) {
  const [item, setItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [ingredientsState, setIngredientsState] = useState(
    new Array(allIngredients.length).fill(false)
  );

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

  return (
    <Layout user={props.user}>
      <div>
        <h1>This is the menu item detail</h1>
        <img className="item-1" src={item.imgURL} alt={item.name} />
        <div className="name">{item.name}</div>
        <div className="price">{`${item.price}`}</div>
        <div className="ingredients">{item.ingredients}</div>
        <FormGroup row>
          {allIngredients.map((ingredient, index) => (
            <>
              {console.log(ingredient)}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ingredientsState[index]}
                    // onChange={}
                    name={ingredient}
                  />
                }
                label={ingredient}
              />
            </>
          ))}
        </FormGroup>
      </div>
    </Layout>
  );
}

export default MenuItemDetail;
