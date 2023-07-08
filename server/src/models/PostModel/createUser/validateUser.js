import { pool } from "../../../database/config.js";
export const validateUser = async (email) => {
    const text = "SELECT password FROM users WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(text, values);
    if (rows.length === 0) {
        throw new Error("Invalid password or email");
    }
    return rows[0].password;
    }