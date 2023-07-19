import {pool} from "../../database/config.js"

export const getIdOrder = async (userid) => {
  const text = "SELECT * FROM orders WHERE userid = $1";
  const values = [userid];
  const {rows} = await pool.query(text, values);
  return rows[0];
};