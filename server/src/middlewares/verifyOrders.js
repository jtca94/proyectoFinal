export const verifyOrders = (req, res, next) => {
  try {
    const {userid} = req.body;
    if (!userid) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};