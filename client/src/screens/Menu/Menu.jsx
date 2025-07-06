import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuItems";
import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../../components/MenuItem/MenuItem.jsx";

const useStylesGrid = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
    margin: 32,
  },
}));

function Menu(props) {
  const classesGrid = useStylesGrid();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const allMenuItems = await getMenuItems();
      setMenu(allMenuItems);
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="items">
      <div className={classesGrid.gridRoot}>
        <Grid container spacing={8} justifyContent="center">
          {menu.map((menuItem, index) => (
            <MenuItem
              key={index}
              imgURL={menuItem.imgURL}
              name={menuItem.name}
              price={menuItem.price}
              ingredients={menuItem.ingredients}
              id={menuItem._id}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              user={props.user}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Menu;