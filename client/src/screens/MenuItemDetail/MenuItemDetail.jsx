import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MenuItemDetail.css";
import Layout from "../../components/Layout/Layout";
import { getMenuItem } from "../../services/menuItems";

function MenuItemDetail(props) {
  const [item, setItem] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getMenuItem(id);
      console.log("I am here");
      setItem(item);
      setLoaded(true);
    };
    fetchItem();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div>
        <h1>This is the menu item detail</h1>
        <img className="item-1" src={item.imgURL} alt={item.name} />
        <div className="name">{item.name}</div>
        <div className="price">{`${item.price}`}</div>
        <div className="ingredients">{item.ingredients}</div>
      </div>
    </Layout>
  );
}

export default MenuItemDetail;
