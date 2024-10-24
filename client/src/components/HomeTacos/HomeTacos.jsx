import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { getMenuItems } from "../../services/menuItems";

import "../../components/HomeTacos/HomeTacos.css";

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
      console.log(menu)
      setMenu(randomMenuitems);
    };
    fetchMenuItems();
  }, []);
  
  return (
    <Carousel>
      {menu.map((menuItem) => (
        <Carousel.Item key={menuItem.name}>
          <img
            className="carousel-images"
            src={menuItem.imgURL}
            alt={`${menuItem.name} slide`}
            />
          <Carousel.Caption>
            <div className="carousel-text">
              <h3> {menuItem.name}</h3>
              <p>{menuItem.price}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

}

export default HomeTacos;
