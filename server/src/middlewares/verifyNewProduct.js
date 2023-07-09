export const verifyNewProduct = (req, res, next) => {
  try {
    const {name, description, price, category, stock, image, userId} = req.body;
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !stock ||
      !image ||
      !userId
    ) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
