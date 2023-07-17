import { pool } from "../../database/config.js";

export const addRating = async (userid, productid, rating, comment) => {
    const text = "INSERT INTO ratings (userid, productid, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [userid, productid, rating, comment];
    const { rows } = await pool.query(text, values);
    return rows[0];
}