import { Router } from "express";
import { userControllers } from "../controllers/UserControllers/Users.js";
import { passwordHash } from "../middlewares/passwordHash.js";
import { verifyNewUser } from "../middlewares/verifyNewUser.js";
import { verifyCredentials } from "../middlewares/verifyCredentials.js";

const routes = Router();

routes.post('/user', verifyNewUser, passwordHash, userControllers.newUser);
routes.post('/login', verifyCredentials, userControllers.LoginUser);

export default routes;