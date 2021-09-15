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
  });
  await user1.save();

  const user2 = new User({
    username: "courtney",
    email: "courtney@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 12),
  });
  await user2.save();

  const user3 = new User({
    username: "eileen",
    email: "eileen@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 12),
  });
  await user3.save();

  const user4 = new User({
    username: "otis",
    email: "otis@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 12),
  });
  await user4.save();

  // products data that we want inserted into database
  const menuItems = [
    {
      name: "BBQ Feet Fruit Taco",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "$980",
      ingredients: ["Cheese", "Lettuce", "Tomatoes", "BBQ Chicken"],
    },
    {
      name: "BBQ Feet Fruit Taco 2",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "$981",
      ingredients: ["Cheese", "Lettuce", "Tomatoes", "BBQ Chicken Nuggets"],
    },
  ];

  // insert products into database
  await MenuItem.insertMany(menuItems);
  console.log("Created users & TACO!");

  // close database connection. done.
  db.close();
};

insertData();



{
  name: "Tacato Sunrise",
  imgURL:
  "https://res.cloudinary.com/otisg/image/upload/v1631706682/TacatoSunrise_wm2opn.webp",
   price: "$2.99",
  ingredients: ["Scramble", "Fried Eggs", "Refried Beans", "cilantro", "Avocado", "Salsa", "Cotija Cheese", "Cheddar Cheese", "Sour Cream", "Diced Jalapenos"],
},

{
  name: "Tacato Cat Delight",
  imgURL:
  "https://res.cloudinary.com/otisg/image/upload/v1631707242/ShrimpTaco_ok62kg.jpg",
  price: "$3.99",
  ingredients: ["Shrimp", "Chili Powder", "Smoky Chipotle", "Chili powder", "Taco Slaw", "Slaws Dressing" ],
},

{
  name: "Tacato Steak & Pineapple",
  imgURL:
  "https://res.cloudinary.com/otisg/image/upload/v1631707987/steak_Pineapple_nfnrar.jpg",
  price: "$2.99",
  ingredients: ["Cheese", "Cilantro", "Green Onions", "Jalepeño Slices"],
},

{
  name: "Tacato Chicken Delight",
  imgURL:
  "https://res.cloudinary.com/otisg/image/upload/v1631708333/ChickenTaco_gtgtln.jpg",
  price: "$2.99",
  ingredients: ["Chili Powder", "Garlick Powder", "Boneless Chicken Thighs", "Pico de Gallo","Lime wedges"],
},

{
  name: "Tacato Cheese Cake Taco",
  imgURL:
  "https://res.cloudinary.com/otisg/image/upload/v1631708837/CheeseCakeTaco_wsuhlo.jpg",
  price: "$3.50",
  ingredients: ["Fried Crips, Graham Crumb Tortilla", "Cinnamon Sugar Dipped", "Cherry Pie Filling", "Cheese Cake", "Whip Cream"],
