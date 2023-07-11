import { addProduct } from "../../models/ProductModels/getUser/addProduct.js";
import { getUserProducts } from "../../models/ProductModels/getUser/userProducts.js";
import { allProducts } from "../../models/ProductModels/getUser/allProducts.js";
//recordad verificar que el usuario existe al agregar producto 
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock, image, userId } = req.body;
        addProduct(name, description, price, category, stock, image, userId);
        return res.status(200).json({ok: true, message: "Product created successfully"});
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};

export const UserProducts = async (req, res) => {
    try {
        const { userId } = req.body.payload;
        const userProducts = await getUserProducts(userId);
        return res.status(200).json({ok: true, data: userProducts});
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await allProducts();
        return res.status(200).json({ok: true, products});
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};

export const productControllers = {
    createProduct,
    UserProducts,
    getProducts,
};