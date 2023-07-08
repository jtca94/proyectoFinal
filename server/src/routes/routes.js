import { Router } from "express";
import { userControllers } from "../controllers/UserControllers/Users.js";
import { passwordHash } from "../middlewares/passwordHash.js";

const routes = Router();

routes.post('/users', passwordHash, userControllers.newUser);

export default routes;