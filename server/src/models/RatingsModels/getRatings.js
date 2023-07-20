import {pool} from "../../database/config.js";

export const getRatings = async (productId) => {
  const text = "SELECT * FROM ratings WHERE productid = $1";
  const values = [productId];
  const {rows} = await pool.query(text, values);
  console.log(rows)
  if (rows.length === 0) {
    throw new Error(`No ratings with productId ${productId}`);
  }
  return rows;
};