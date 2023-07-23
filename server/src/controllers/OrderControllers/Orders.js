import { addOrder } from "../../models/OrderModels/addOrder.js"
import { getOrdersById } from "../../models/OrderModels/getOrders.js"
import { handleErrors } from "../../helpers/handleErrors.js";


export const newOrder = async (req, res) => {
  try {
    const {userid, productid, quantity} = req.body;
    addOrder(userid, productid, quantity);
    return res.status(200).json({ok: true, message: "Add order successfully"});
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const getOrders = async (req, res) => {
  try {
    const { userid } = req.body;
    const orders = await getOrdersById(userid);
    return res.status(200).json({ok: true, message: "Get All Orders successfully", orders });
  } catch (error) {
    const {status, message} = handleErrors(error.message);
    return res.status(status).json({ok: false, message: message});
  }
};

export const orderControllers = {
  newOrder,
  getOrders
};