import { pool } from "../../database/config.js";

export const addRating = async (userId, productid, rating, comment) => {
  const text = "INSERT INTO ratings (userid, productid, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [userId, productid, rating, comment];
  const {rows} = await pool.query(text, values);
  return rows[0];
};
