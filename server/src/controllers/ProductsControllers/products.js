import { addProduct } from "../../models/ProductModels/getUser/addProduct.js";
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
export const productControllers = {
    createProduct
};