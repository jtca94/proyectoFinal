import {pool} from "../../database/config.js";

export const getRatings = async (productId) => {
  const text = "SELECT * FROM ratings WHERE productid = $1";
  const values = [productId];
  const {rows} = await pool.query(text, values);
  return rows[0];
};