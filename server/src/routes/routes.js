import { Router } from "express";
import { userControllers } from "../controllers/UserControllers/Users.js";
import { productControllers } from "../controllers/ProductsControllers/products.js";
import { passwordHash } from "../middlewares/passwordHash.js";
import { verifyNewUser } from "../middlewares/verifyNewUser.js";
import { verifyCredentials } from "../middlewares/verifyCredentials.js";
import { verifyNewProduct } from "../middlewares/verifyNewProduct.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const routes = Router();

//POST ROUTES
routes.post('/register', verifyNewUser, passwordHash, userControllers.newUser);
routes.post('/login', verifyCredentials, userControllers.LoginUser);
routes.post('/products', verifyNewProduct, productControllers.createProduct);
//GET ROUTES
routes.get('/productsByUser', verifyToken, productControllers.UserProducts);
routes.get('/products', productControllers.getProducts);
routes.get('/products/:id', productControllers.getOneProduct);

export default routes;