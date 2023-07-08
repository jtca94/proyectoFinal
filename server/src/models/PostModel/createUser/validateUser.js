export const validateUser = async (userName) => {
    const text = "SELECT password FROM users WHERE userName = $1";
    const values = [userName];
    const { rows } = await pool.query(text, values);
    if (rows.length === 0) {
        throw new Error("Invalid password or username");
    }
    return rows[0].password;
    }