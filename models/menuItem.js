import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MenuItem = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    price: { type: String, required: true },
    ingredients: { type: Array, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('menuItems', MenuItem)