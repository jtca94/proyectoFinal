export const verifyRatings = (req, res, next) => {

  try {
    const {userid, rating, comment, productid} = req.body;
    if (!userid || !productid || !rating || !comment) {
      throw new Error("All fields are required");
    }
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
