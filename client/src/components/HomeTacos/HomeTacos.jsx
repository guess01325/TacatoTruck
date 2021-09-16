import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuItems";

function HomeTacos() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      let randomMenuitems = [];
      const allMenuItems = await getMenuItems();
      for (let i = 0; i <= 4; ) {
        const randomIndex = Math.floor(Math.random(0, 1) * allMenuItems.length);
        if (randomMenuitems.includes(allMenuItems[randomIndex]) === false) {
          randomMenuitems.push(allMenuItems[randomIndex]);
          i++;
        }
      }
      setMenu(randomMenuitems);
    };
    fetchMenuItems();
  }, []);

  return (
    <Carousel variant="dark">
      {menu.map((menuItem) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={menuItem.imgURL}
            alt={`${menuItem.name} slide`}
          />
          <Carousel.Caption>
            <h3>{menuItem.name}</h3>
            <p>{menuItem.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeTacos;
