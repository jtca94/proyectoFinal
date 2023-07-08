import { validateUser } from '../models/PostModel/createUser/validateUser.js';
import bcrypt from 'bcryptjs';
export const verifyCredentials = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Missing credentials");
        }
        const passwordHashed = await validateUser(email);
        const validatedPassword = await bcrypt.compare(password, passwordHashed);
        if (!validatedPassword) {
            throw new Error("Invalid password or email");
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ ok: false, message: error.message });
    }
}