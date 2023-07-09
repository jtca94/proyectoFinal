import { validateUser } from '../models/UserModels/createUser/validateUser.js';
import bcrypt from 'bcryptjs';
export const verifyCredentials = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Missing credentials");
        }
        const user = await validateUser(email);
        const validatedPassword = await bcrypt.compare(password, user.password);
        if (!validatedPassword) {
            throw new Error("Invalid password or email");
        }
        req.body.userName = user.username;
        req.body.id = user.id;
        next();
    }
    catch (error) {
        return res.status(500).json({ ok: false, message: error.message });
    }
}