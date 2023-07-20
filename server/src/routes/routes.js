import {Router} from "express";
//controllers
import {userControllers} from "../controllers/UserControllers/Users.js";
import {productControllers} from "../controllers/ProductsControllers/products.js";
import {orderControllers} from "../controllers/OrderControllers/Orders.js";
import {ratingControllers} from "../controllers/RatingsControllers/Ratings.js";
//middlewares
import {passwordHash} from "../middlewares/passwordHash.js";
import {verifyOrders} from "../middlewares/verifyOrders.js";
import {verifyRatings} from "../middlewares/verifyRatings.js";
import {verifyNewUser} from "../middlewares/verifyNewUser.js";
import {verifyCredentials} from "../middlewares/verifyCredentials.js";
import {verifyNewProduct} from "../middlewares/verifyNewProduct.js";
import {verifyToken} from "../middlewares/verifyToken.js";
import { verifyDeleteProduct } from "../middlewares/verifyDeleteProduct.js";

const routes = Router();

//POST ROUTES
routes.post("/register", verifyNewUser, passwordHash, userControllers.newUser);
routes.post("/login", verifyCredentials, userControllers.LoginUser);
routes.post("/products", verifyNewProduct, productControllers.createProduct);
routes.post('/orders',verifyOrders.post, verifyToken, orderControllers.newOrder );
routes.post('/products/ratings', verifyToken, verifyRatings, ratingControllers.setRating);
//GET ROUTES
routes.get("/productsByUser", verifyToken, productControllers.UserProducts);
routes.get("/products", productControllers.getProducts);
routes.get("/products/:id", productControllers.getOneProduct);
routes.get("/orders", verifyToken, verifyOrders.get, orderControllers.getOrders);
//corregir cada producto va a tener asociado los ratings
routes.get("/products/:id/ratings", ratingControllers.allRatings);
//DELETE ROUTES
routes.delete("/products/:id", verifyToken, verifyDeleteProduct, productControllers.removeProduct);

export default routes;
