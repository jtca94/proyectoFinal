import {addOrder} from "../../models/OrdersModels/addOrder.js"
import { handleErrors } from "../../middlewares/handleErrors.js";


export const add = async (req, res) => {
    try {
        const { userid, productid, quantity } = req.body;
        addOrder(userid, productid, quantity);
        return res.status(200).json({ok: true, message: "Add order successfully"});
    } catch (error) {
        const { status, message} = handleErrors(error.code)
        return res.status(status).json({ok: false, message: message});
    }
};

export const orderControllers = {
    add
};