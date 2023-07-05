import Express from "express";
const router = Express.Router();
import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/userControllers.js";
import checkAuth from "../middleware/authMiddleware.js";

router.route("/").post(createUser).get(getUsers);

router.route("/:id").get(checkAuth, getUser).put(checkAuth, updateUser).delete(checkAuth, deleteUser);

export default router;
