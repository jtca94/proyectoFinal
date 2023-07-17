import {validateUser} from "../models/UserModels/createUser/validateUser.js";
import bcrypt from "bcryptjs";
export const verifyCredentials = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      throw new Error("Missing credentials");
    }
    const user = await validateUser(email);
     // esto es solo para desarrollo, en produccion se elimina
     if (email === "admin@admin.com") {
        req.body.userName = user.username;
        req.body.id = user.id;
        next();
        return;
    }
    const validatedPassword = await bcrypt.compare(password, user.password);
    if (!validatedPassword) {
      throw new Error("Invalid password or email");
    }
    req.body.userName = user.username;
    req.body.id = user.id;
    next();
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};
