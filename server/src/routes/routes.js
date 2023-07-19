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
routes.post('/ratings/:productid', verifyToken, verifyRatings.post, ratingControllers.setRating);
//GET ROUTES
routes.get("/productsByUser", verifyToken, productControllers.UserProducts);
routes.get("/products", productControllers.getProducts);
routes.get("/products/:id", productControllers.getOneProduct);
routes.get("/orders", verifyToken, verifyOrders.get, orderControllers.getOrders);
routes.get("/ratings/:productid", ratingControllers.allRatings);
//DELETE ROUTES
routes.delete("/ratings", verifyToken, verifyRatings.Delete, ratingControllers.removeRating)

export default routes;
