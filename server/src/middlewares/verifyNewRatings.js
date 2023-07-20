export const verifyNewRating = (req, res, next) => {

  try {
    const {rating, comment} = req.body;
    const {productid} = req.params;
    const {userId} = req.body.payload;
    if (!userId || !productid || !rating || !comment) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
