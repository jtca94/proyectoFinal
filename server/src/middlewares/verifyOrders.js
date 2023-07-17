export const verifyOrders = (req, res, next) => {
  try {
    console.log(req.body.userid);
    const {userid, productid, quantity} = req.body;
    if (!userid || !productid || !quantity) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
