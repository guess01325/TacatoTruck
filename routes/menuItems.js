import { Router } from "express";
import * as controllers from "../controllers/menuItems.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/menu", controllers.getMenuItems);
router.get("/menu/:id", controllers.getMenuItem);
router.post("/menu", restrict, controllers.createMenuItem);
router.put("/menu/:id", restrict, controllers.updateMenuItem);
router.delete("/menu/:id", restrict, controllers.deleteMenuItem);

export default router;
