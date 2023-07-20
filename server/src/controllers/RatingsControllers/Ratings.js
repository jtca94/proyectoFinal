import {addRating} from "../../models/RatingsModels/addRating.js";
import {getRatings} from "../../models/RatingsModels/getRatings.js";
import {handleErrors} from "../../middlewares/handleErrors.js";

export const setRating = async (req, res) => {
  try {
    const {rating, comment} = req.body;
    const {userId} = req.body.payload;
    const {productid} = req.params;
    const setRating = addRating(userId, productid, rating, comment);
    return res
      .status(200)
      .json({ok: true, message: "order added successfully", setRating});
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

export const allRatings = async (req, res) => {
  try {
    const {productId} = req.params;
    const ratings = await getRatings(productId);
    return res.status(200).json({ok: true, ratings});
  } catch (error) {
    const {status, message} = handleErrors(error.code);
    return res.status(status).json({ok: false, message: message});
  }
};

export const ratingControllers = {
  setRating,
  allRatings
};
