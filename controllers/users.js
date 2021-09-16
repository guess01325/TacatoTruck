import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import MenuItem from "../models/menuItem.js";

const SALT_ROUNDS = process.env.SALT_ROUNDS || 12;
const TOKEN_KEY = process.env.TOKEN_KEY || "areallytastytacokey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 15);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("menuItems");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getUserMenuItems = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userMenuItems = await MenuItem.find({ userId: user._id });
    res.json(userMenuItems);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// export const getUserMenuItem = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const userMenuItem = await MenuItem.findById(req.params.menuItemId).populate(
//       "userId"
//     );
//     if (userMenuItem.userId.equals(user._id)) {
//       return res.json(userMenuItem);
//     }
//     throw new Error(
//       `Product ${userMenuItem._id} does not belong to user ${user._id}`
//     );
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const createUserMenuItem = async (req, res) => {
//   try {
//     if (await User.findById(req.body.userId)) {
//       const userMenuItem = new MenuItem(req.body);
//       await userMenuItem.save();
//       res.status(201).json(userMenuItem);
//     }
//     throw new Error(`User ${req.body.userId} does not exist!`);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const updateUserMenuItem = async (req, res) => {
//   try {
//     if (await User.findById(req.params.id)) {
//       const menuItem = await MenuItem.findByIdAndUpdate(menuItemId, req.body, {
//         new: true,
//       });
//       res.status(200).json(menuItem);
//     }
//     throw new Error(`User ${req.params.id} does not exist!`);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteUserProduct = async (req, res) => {
//   try {
//     if (await User.findById(req.params.id)) {
//       const deleted = await MenuItem.findByIdAndDelete(req.params.menuItemId);
//       if (deleted) {
//         return res.status(200).send("Menu item deleted");
//       }
//       throw new Error(`Product ${req.params.menuItemId} not found`);
//     }
//     throw new Error(`User ${req.params.id} does not exist!`);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };

export const getUserCart = async (req, res) => {
  try {
    const userCart = await User.findById(req.params.id).populate("cart");
    res.json(userCart.cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateUserCart = async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (await User.findById(req.params.id)) {
      const menuItem = await MenuItem.findByIdAndUpdate(menuItemId, req.body, {
        new: true,
      });
      res.status(200).json(menuItem);
    }
    throw new Error(`User ${req.params.id} does not exist!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserCartItem = async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    if (await User.findById(req.params.id)) {
      const deletedIndex = await user.cart.indexOf(req.params.cartItemId);
      const deleted = await user.cart.splice(deletedIndex, 1);
      if (deleted) {
        return res.status(200).send("Menu item deleted");
      }
      throw new Error(`Menu item ${req.params.menuItemId} not found`);
    }
    throw new Error(`User ${req.params.id} does not exist!`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
