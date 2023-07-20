import { pool } from "../database/config.js";

export const verifyUniqueRating = async (req, res, next) => {
    try {
        const {productid} = req.params;
        const {userId} = req.body.payload;
        const text = "SELECT * FROM ratings WHERE userid = $1 AND productid = $2";
        const values = [userId, productid];
        const {rows} = await pool.query(text, values);
        if (rows.length > 0) {
            throw new Error("Ya has calificado este producto");
        }
        next();
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};