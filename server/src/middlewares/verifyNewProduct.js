export const verifyNewProduct = (req, res, next) => {
  try {
    const {name, description, price, category, stock, image, userId} = req.body;
    const defaultImage =
      "https://plus.unsplash.com/premium_photo-1687991219913-6b74a90a834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80";
    if (!name || !description || !price || !category || !stock || !userId) {
      throw new Error("All fields are required");
    }
    if (!image) {
      req.body.image = defaultImage;
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
