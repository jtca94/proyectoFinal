import {Router} from "express";
//controllers
import {userControllers} from "../controllers/UserControllers/Users.js";
import {productControllers} from "../controllers/ProductsControllers/products.js";
import {orderControllers} from "../controllers/OrderControllers/Orders.js";
import { ratingControllers } from "../controllers/RatingsControllers/Ratings.js";
//middlewares
import {verifyNewUser} from "../middlewares/Users/verifyNewUser.js";
import {verifyCredentials} from "../middlewares/Users/verifyCredentials.js";
import {verifyToken} from "../middlewares/Users/verifyToken.js";
import {passwordHash} from "../middlewares/Users/passwordHash.js";
import {verifyNewProduct} from "../middlewares/Products/verifyNewProduct.js";
import {verifyDeleteProduct} from "../middlewares/Products/verifyDeleteProduct.js";
import {verifyRatings} from "../middlewares/Ratings/verifyRatings.js";
import {verifyUniqueRating} from "../middlewares/Ratings/verifyUniqueRating.js";
import {verifyOrders} from "../middlewares/Orders/verifyOrders.js";

const routes = Router();

//POST ROUTES
routes.post("/register", verifyNewUser, passwordHash, userControllers.newUser);
routes.post("/login", verifyCredentials, userControllers.LoginUser);
routes.post("/products", verifyNewProduct, productControllers.createProduct);
routes.post('/orders', verifyOrders.post, verifyToken, orderControllers.newOrder );
routes.post('/products/:productid/ratings', verifyToken, verifyUniqueRating, verifyRatings.post, ratingControllers.setRating);
//GET ROUTES
routes.get("/productsByUser", verifyToken, productControllers.UserProducts);
routes.get("/products", productControllers.getProducts);
routes.get("/products/:id", productControllers.getOneProduct);
routes.get("/orders", verifyToken, verifyOrders.get, orderControllers.getOrders);
routes.get("/products/:productid/ratings", verifyRatings.get, ratingControllers.allRatings);
//DELETE ROUTES
routes.delete("/ratings", verifyToken, verifyRatings.Delete, ratingControllers.removeRating)
routes.delete("/products/:id", verifyToken, verifyDeleteProduct, productControllers.removeProduct);

export default routes;
