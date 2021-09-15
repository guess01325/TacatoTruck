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
    {
      name: "Barbacoa Short Rib Tacato",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "$3.95",
      ingredients: [
        "Cheese",
        "Barbacoa Beef",
        "Lettuce",
        "Tomatoes",
        "Cilantro",
        "Onion",
        "Avocado",
      ],
    },
    {
      name: "Tacatos Al Pastor",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "$3.75",
      ingredients: [
        "Cheese",
        "Pork Al Pastor",
        "Lettuce",
        "Tomatoes",
        "Cilantro",
        "Onion",
        "Pineapple",
      ],
    },
    {
      name: "Mango Fish Tacato",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
      name: "Cheeseburger Tacato",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      price: "$3.75",
      ingredients: [
        "Cheese",
        "Lettuce",
        "Tomatoes",
        "Ground Beef",
        "Onion",
        "BBQ Sauce",
        "Pickles",
        "Bacon",
      ],
    },
    {
      name: "Bacon and Queso Breakfast Tacato",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
  ];

  // insert products into database
  await MenuItem.insertMany(menuItems);
  console.log("Created users & TACO!");

  // close database connection. done.
  db.close();
};

insertData();
