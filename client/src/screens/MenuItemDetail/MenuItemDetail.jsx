import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetail.css";
import Layout from "../../components/Layout/Layout";
import { getMenuItem } from "../../services/menuItems";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import allIngredients from "../../utils/ingredients";
// import useMediaQuery from '@mui/material/useMediaQuery';

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

  // item.ingredients.map((ingredient) => {
  //   const index = allIngredients.indexOf(ingredient);
  //   ingredientsState[index] = true;
  // });
  const handleChange = (index) => {
    const currentArray = ingredientsState;
    const newState = !ingredientsState[index];
    currentArray.splice(index, 1, newState);
    setIngredientsState([...currentArray]);
  };
  return (
    <Layout user={props.user}>
      <div className="formatContainer">
        <div className="detail-container">
          <div className="taco-detail-container">
            <img className="item-1" src={item.imgURL} alt={item.name} />
            <div className="info-container">
              <div className="name">{item.name}</div>
              <div className="price">{`${item.price}`}</div>

              <FormGroup className="check-box" row>
                {allIngredients.map((ingredient, index) => (
                  <>
                    {console.log(ingredient)}
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ingredientsState[index]}
                          onChange={() => {
                            handleChange(index);
                          }}
                          name={ingredient}
                        />
                      }
                      label={ingredient}
                    />
                  </>
                ))}
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenuItemDetail;
