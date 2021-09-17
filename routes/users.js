import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.get("/users/:id", controllers.getUser);

router.get("/users/:id/cart", controllers.getUserCart);
router.post("/users/:id/cart/:cartItemId", controllers.addUserCartItem);
// router.post("/users/:id/cart/", controllers.addUserCartItem);
router.delete("/users/:id/cart/:cartItemId", controllers.deleteUserCartItem);
router.get("/users/:id/menu", controllers.getUserMenuItems);
// router.get('/users/:id/menu/:menuItemId', controllers.getUserMenuItem)
// router.post('/users/:id/menu', controllers.createUserMenuItem)
// router.put('/users/:id/menu/:menuItemId', controllers.updateUserMenuItem)
// router.delete('/users/:id/menu/:menuItemId', controllers.deleteUserProduct)

export default router;
