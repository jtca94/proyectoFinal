import {createUser} from "../../models/PostModel/createUser/createUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const newUser = async (req, res) => {
  try {
    const {userName, firstName, lastName, email, passwordHashed, address} =
      req.body;
    const user = await createUser(
      userName,
      firstName,
      lastName,
      email,
      passwordHashed,
      address
    );
    return res
      .status(200)
      .json({ok: true, message: "User created successfully", user});
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

const LoginUser = async (req, res) => {
  try {
    const {userName} = req.body;
    const token = jwt.sign({userName}, process.env.SECRET_KEY, {expiresIn: "2h"});
    return res.status(200).json({ok: true, message: "User logged in", token});
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

export const userControllers = {
  newUser,
  LoginUser,
};
