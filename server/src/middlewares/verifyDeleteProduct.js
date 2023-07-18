import {pool} from "../database/config.js";
export const verifyDeleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {userId} = req.body.payload;
        const text = "SELECT * FROM products WHERE id = $1";
        const values = [id];
        const {rows} = await pool.query(text, values);
        if (rows.length === 0) {
            return res.status(404).json({ok: false, message: "Product not found"});
        }
        if (rows[0].user_id !== userId) {
            return res.status(401).json({ok: false, message: "Unauthorized"});
        }
        next();
    } catch (error) {
        return res.status(500).json({ok: false, message: error.message});
    }
};