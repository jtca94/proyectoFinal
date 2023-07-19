import {pool} from "../../database/config.js";

export const deleteRating = async (ratingId) => {
  const text =
    "DELETE FROM ratings WHERE id = $1";
  const values = [ratingId];
  const {rows} = await pool.query(text, values);
  return rows[0];
};