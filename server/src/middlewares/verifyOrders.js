const post = (req, res, next) => {
  try {
    const {userid, productid, quantity} = req.body;
    if (!userid || !productid || !quantity) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

const get = (req, res, next) => {
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

export const verifyOrders = {
  post,
  get,
};
