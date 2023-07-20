import { addRating } from "../../models/RatingsModels/addRating.js"
import { getRatings } from "../../models/RatingsModels/getRatings.js";
import { handleErrors } from "../../middlewares/handleErrors.js";

export const setRating = async (req, res) => {
    try {
        const { userid, rating, comment } = req.body;
        const { productid } = req.params;
        addRating(userid, productid, rating, comment);
        return res.status(200).json({ok: true, message: "Add order successfully"});
    } catch (error) {
        const { status, message} = handleErrors(error.code)
        return res.status(status).json({ok: false, message: message});
    }
};

export const allRatings = async (req, res) => {
    try {

        const {productid} = req.params;
        const rating = await getRatings(productid);
        return res.status(200).json({ok: true, rating});
    } catch (error) {
        const { status, message} = handleErrors(error.code)
        return res.status(status).json({ok: false, message: message});
    }
};


export const ratingControllers = {
    setRating,
    allRatings
};