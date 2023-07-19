import {pool} from "../../database/config.js";

export const getRatings = async (productid) => {
  const text = "SELECT * FROM ratings WHERE productid = $1";
  const values = [productid];
  const {rows} = await pool.query(text, values);
  if (!rows[0]) {
    throw new Error(`No ratings with productid ${productid}`);
  }
  return rows;
};