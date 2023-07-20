import {Router} from "express";
//controllers
import {userControllers} from "../controllers/UserControllers/Users.js";
import {productControllers} from "../controllers/ProductsControllers/products.js";
import {orderControllers} from "../controllers/OrderControllers/Orders.js";
import {ratingControllers} from "../controllers/RatingsControllers/Ratings.js";
//middlewares
import {passwordHash} from "../middlewares/passwordHash.js";
import { verifyNewOrder } from "../middlewares/verifyNewOrder.js";
import {verifyNewRating} from "../middlewares/verifyNewRatings.js";
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
routes.post('/orders', verifyToken, verifyNewOrder, orderControllers.newOrder);
routes.post('/products/:productid/ratings', verifyToken, verifyNewRating, ratingControllers.setRating);
//GET ROUTES
routes.get("/productsByUser", verifyToken, productControllers.UserProducts);
routes.get("/products", productControllers.getProducts);
routes.get("/products/:id", productControllers.getOneProduct);
routes.get("/orders", verifyToken, orderControllers.getOrders);
routes.get("/products/:productId/ratings", ratingControllers.allRatings);
//DELETE ROUTES
routes.delete("/products/:id", verifyToken, verifyDeleteProduct, productControllers.removeProduct);

export default routes;
