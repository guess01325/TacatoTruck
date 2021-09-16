import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuItems";
import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "../../components/Layout/Layout";
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
    <Layout user={props.user}>
      <div className="items">
        <div className={classesGrid.gridRoot}>
          <Grid container spacing={3} justifyContent="center">
            {menu.map((menuItem, index) => {
              return (
                <MenuItem
                  imgURL={menuItem.imgURL}
                  name={menuItem.name}
                  price={menuItem.price}
                  ingredients={menuItem.ingredients}
                  id={menuItem._id}
                  key={index}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
