import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    password_digest: { type: String, required: true, select: false },
    products: [{ type: Schema.Types.ObjectId, ref: 'menuItems' }],
    cart: [{ type: Schema.Types.ObjectId, ref: 'menuItems' }]
  },
  { timestamps: true }
);

export default mongoose.model('users', User)