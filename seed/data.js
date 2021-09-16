import db from "../db/connection.js";
import MenuItem from "../models/menuItem.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "jake",
    email: "jake@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 12),
    products: [],
    cart: [],
  });
  await user1.save();

  const user2 = new User({
    username: "courtney",
    email: "courtney@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 12),
    products: [],
    cart: [],
  });
  await user2.save();

  const user3 = new User({
    username: "eileen",
    email: "eileen@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 12),
    products: [],
    cart: [],
  });
  await user3.save();

  const user4 = new User({
    username: "otis",
    email: "otis@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 12),
    products: [],
    cart: [],
  });
  await user4.save();

  // products data that we want inserted into database
  const menuItems = [
    {
      name: "Barbacoa Short Rib TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fonlymeat.net%2Fwp-content%2Fuploads%2F2019%2F12%2Ftai-s-captures-JiRSy0GfqPA-unsplash-1024x683.jpg&f=1&nofb=1",
      price: "$3.95",
      ingredients: [
        "Cheese",
        "Barbacoa Beef",
        "Lettuce",
        "Tomatoes",
        "Cilantro",
        "Onions",
        "Avocado",
      ],
    },
    {
      name: "TaCatos Al Pastor",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmilrecetas.net%2Fwp-content%2Fuploads%2F2016%2F09%2FTacos-al-pastor-3.jpg&f=1&nofb=1",
      price: "$3.75",
      ingredients: [
        "Cheese",
        "Pork Al Pastor",
        "Lettuce",
        "Tomatoes",
        "Cilantro",
        "Onions",
        "Pineapple",
      ],
    },
    {
      name: "Mango Fish TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lemontreedwelling.com%2Fwp-content%2Fuploads%2F2017%2F04%2FSalmon-Tacos-5-small.jpg&f=1&nofb=1",
      price: "$3.95",
      ingredients: [
        "Cheese",
        "Lettuce",
        "Tilapia",
        "Avocado",
        "Jalepeño Slices",
        "Mango",
        "Cilantro",
      ],
    },
    {
      name: "Cheeseburger TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fdel.h-cdn.co%2Fassets%2F18%2F02%2F1600x800%2Flandscape-1515468779-delish-kids-cheeseburger-tacos-004.jpg%3Fresize%3D1200%3A*&f=1&nofb=1",
      price: "$3.75",
      ingredients: [
        "Cheese",
        "Lettuce",
        "Tomatoes",
        "Ground Beef",
        "Onions",
        "Bacon",
      ],
    },
    {
      name: "Bacon and Queso Breakfast TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fucarecdn.com%2F1304e103-315b-4677-8ef6-bbfc5a64e87f%2F-%2Fcrop%2F1829x1359%2F219%2C0%2F-%2Fresize%2F912x678%2F&f=1&nofb=1",
      price: "$3.25",
      ingredients: [
        "Cheese",
        "Hash Brown Potatoes",
        "Eggs",
        "Bacon",
        "Queso Blanco",
        "Salsa",
      ],
    },
    {
      name: "Breakfast TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fbreakfast-tacos-picture-id1225274249&f=1&nofb=1",
      price: "$2.50",
      ingredients: [
        "Cheese",
        "Lettuce",
        "Tomatoes",
        "Eggs",
        "Avocado",
        "Green Onions",
      ],
    },
    {
      name: "Catfish TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspicysouthernkitchen.com%2Fwp-content%2Fuploads%2Fcatfish-tacos-13.jpg&f=1&nofb=1",
      price: "$3.75",
      ingredients: ["Cheese", "Cilantro", "Red Onions"],
    },
    {
      name: "Beef Brisket TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F03%2FBeef-Brisket-Tacos_EXPS_EDSC17_135502_D03_10_3b-2.jpg&f=1&nofb=1",
      price: "$3.95",
      ingredients: ["Cheese", "Cilantro", "Green Onions", "Jalepeño Slices"],
    },
    {
      name: "Ropa Vieja TaCato",
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthelemonbowl.com%2Fwp-content%2Fuploads%2F2018%2F12%2FRopa-Vieja-Tacos-Recipe.jpg&f=1&nofb=1",
      price: "$3.95",
      ingredients: [
        "Shredded Beef",
        "Red Bell Pepper",
        "Green Bell Pepper",
        "Onions",
      ],
    },
    {
      name: "Strawberry Dessert TaCato",
      imgURL:
        "https://i1.wp.com/gigglesgobblesandgulps.com/wp-content/uploads/2016/05/dessert-tacos-4.jpg?resize=1024%2C682&ssl=1",
      price: "$2.50",
      ingredients: [
        "Strawberries",
        "Vanilla Ice Cream",
        "Chocolate Syrup",
        "Chocolate Sprinkles",
      ],
    },
    {
      name: "The Garfield",
      imgURL: `https://thecozycook.com/wp-content/uploads/2021/06/Baked-Tacos-3.jpg`,
      price: "$4.00",
      ingredients: ["Extra Ground Beef", "Extra Cheese", "Extra Red Sauce"],
    },
    {
      name: "The Cheshire Cat",
      imgURL: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.makingthymeforhealth.com%2Fwp-content%2Fuploads%2F2018%2F03%2FLentil-Taco-Skillet-_-700x1050.jpg&f=1&nofb=1`,
      price: "$6.00",
      ingredients: ["Beyond Beef", "Lentils", "Roasted Corn", "Red Onions"],
    },
    {
      name: "The FURR-ari",
      imgURL: `https://cdn.shopify.com/s/files/1/0280/2198/1248/products/image_dcb21cd6-520d-4efc-a8c8-b99d07c76660_1024x1024.jpg?v=1595879895`,
      price: "$7.50",
      ingredients: ["Lobster", "Lettuce", "Red Peppers", "Lime Crema"],
    },
    {
      name: "The Alley Cat",
      imgURL: `https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9108-1.jpg`,
      price: "$3.50",
      ingredients: ["Carne Asada", "Onions", "Cilantro", "Lime"],
    },
    {
      name: "The 9 lives",
      imgURL: `https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/66440312_880132779024177_4777095714486353920_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=9267fe&_nc_ohc=3Cv73wD9VlMAX-11fqO&_nc_ht=scontent-lax3-2.xx&oh=281aa1f4745c7443139d60c083c99b49&oe=61662C89`,
      price: "$10.00",
      ingredients: [
        "Vanilla Ice Cream",
        "Chocolate Syrup",
        "Whipped Cream",
        "M & M's",
        "Waffle Cone",
        "Churros",
      ],
    },
    {
      name: "TaCato Sunrise",
      imgURL:
        "https://res.cloudinary.com/otisg/image/upload/v1631706682/TacatoSunrise_wm2opn.webp",
      price: "$2.99",
      ingredients: [
        "Eggs",
        "Refried Beans",
        "Cilantro",
        "Avocado",
        "Salsa",
        "Cotija Cheese",
        "Jalapeno Slices",
      ],
    },
    {
      name: "Cat Delight",
      imgURL:
        "https://res.cloudinary.com/otisg/image/upload/v1631707242/ShrimpTaco_ok62kg.jpg",
      price: "$3.99",
      ingredients: [
        "Shrimp",
        "Smoky Chipotle",
        "Chili powder",
        "Taco Slaw",
        "Slaws Dressing",
      ],
    },
    {
      name: "TaCato's Steak & Pineapple",
      imgURL:
        "https://res.cloudinary.com/otisg/image/upload/v1631707987/steak_Pineapple_nfnrar.jpg",
      price: "$2.99",
      ingredients: ["Cheese", "Cilantro", "Green Onions", "Jalepeño Slices"],
    },
    {
      name: "Chicken Delight",
      imgURL:
        "https://res.cloudinary.com/otisg/image/upload/v1631708333/ChickenTaco_gtgtln.jpg",
      price: "$2.99",
      ingredients: [
        "Chili Powder",
        "Garlic Powder",
        "Chicken",
        "Pico de Gallo",
      ],
    },
    {
      name: "Cheese Cake TaCato",
      imgURL:
        "https://res.cloudinary.com/otisg/image/upload/v1631708837/CheeseCakeTaco_wsuhlo.jpg",
      price: "$3.50",
      ingredients: [
        "Cinnamon Sugar Dipped Graham Crumb Tortilla",
        "Cherry Pie Filling",
        "Cheese Cake",
        "Whipped Cream",
      ],
    },
  ];

  // insert products into database
  await MenuItem.insertMany(menuItems);
  console.log("Created users & TACO!");

  // close database connection. done.
  db.close();
};

insertData();


