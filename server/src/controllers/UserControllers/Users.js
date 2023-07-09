import {createUser} from "../../models/UserModels/createUser/createUser.js";
import jwt from "jsonwebtoken";

// verificar que el usuario este disponible
const newUser = async (req, res) => {
  try {
    const {userName, firstName, lastName, email, passwordHashed, address} =
      req.body;
      createUser(userName, firstName, lastName, email, passwordHashed, address);
    return res
      .status(200)
      .json({ok: true, message: "User created successfully"});
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

const LoginUser = async (req, res) => {
  try {
    const {userName, id} = req.body;
    const token = jwt.sign({userName}, process.env.SECRET_KEY, {expiresIn: "2h"});
    return res.status(200).json({ok: true, message: "User logged in", token, userName, id});
  } catch (error) {
    return res.status(500).json({ok: false, message: error.message});
  }
};

export const userControllers = {
  newUser,
  LoginUser,
};
