import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMenuItems } from "../../services/menuItems";
import "./Menu.css";
// import { Layout } from "../../components";
import MenuItem from "../../components/MenuItem/MenuItem.jsx";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const allMenuItems = await getMenuItems();
      setMenu(allMenuItems);
    };
    fetchMenuItems();
  }, []);

  return (
    // <Layout user={props.user}>
    <div className="items">
      {menu.map((menuItem, index) => {
        return (
          <Link to="/menu/:id">
            <MenuItem
              imgURL={menuItem.imgURL}
              name={menuItem.name}
              price={menuItem.price}
              ingredients={menuItem.ingredients}
              key={index}
            />
          </Link>
        );
      })}
    </div>
    // </Layout>
  );
}

export default Menu;
